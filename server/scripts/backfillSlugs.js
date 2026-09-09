/**
 * Migración: poblar el campo `slug` en los posts existentes.
 *
 * Uso:
 *   node scripts/backfillSlugs.js          -> solo posts sin slug
 *   node scripts/backfillSlugs.js --force  -> regenera el slug de TODOS los posts
 *
 * Genera slugs únicos (agrega sufijo -2, -3... ante colisiones) manteniendo
 * el orden por fecha de creación para que los slugs sean estables.
 *
 * Debe ejecutarse desde la carpeta server/ para que cargue el .env correcto.
 */
require("dotenv").config();
const mongoose = require("mongoose");
const { dbConnection } = require("../db/config");
// Importamos Post y slugify directamente desde sus archivos para evitar cargar
// los index (helpers/index.js y models/index.js), que arrastran la
// inicialización de Firebase / el Server y fallan fuera del arranque normal.
const Post = require("../models/blog/Post");
const { slugify } = require("../helpers/functions/slug");

const force = process.argv.includes("--force");

const run = async () => {
  await dbConnection();

  // Traemos id, título y slug actual. Ordenados por _id (orden de creación)
  // para que la asignación de sufijos ante colisiones sea determinista.
  const posts = await Post.find({}, "title slug").sort({ _id: 1 }).lean();

  // Slugs ya tomados durante esta corrida, para evitar colisiones entre
  // los propios posts que estamos migrando.
  const usedSlugs = new Set();

  let updated = 0;
  let skipped = 0;

  for (const post of posts) {
    // Si no forzamos y ya tiene slug, lo respetamos (y lo reservamos).
    if (!force && post.slug) {
      usedSlugs.add(post.slug);
      skipped += 1;
      continue;
    }

    const baseSlug = slugify(post.title);
    let slug = baseSlug;
    let counter = 2;
    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter += 1;
    }

    usedSlugs.add(slug);
    await Post.updateOne({ _id: post._id }, { $set: { slug } });
    updated += 1;
    console.log(`  ✓ "${post.title}" -> ${slug}`);
  }

  console.log(
    `\nMigración completa. Actualizados: ${updated}, sin cambios: ${skipped}, total: ${posts.length}`,
  );

  await mongoose.connection.close();
  process.exit(0);
};

run().catch(async (error) => {
  console.error("Error en la migración:", error.message);
  try {
    await mongoose.connection.close();
  } catch (_) {}
  process.exit(1);
});
