/**
 * Convierte un título en un slug limpio para URLs.
 *
 * Ejemplo:
 *   "Qué fácil se ve el mundo cuando soy feliz"
 *   -> "que-facil-se-ve-el-mundo-cuando-soy-feliz"
 *
 * Debe mantenerse idéntico al slugify del cliente
 * (client/src/app/lib/slug.ts) para que las URLs coincidan.
 */
const slugify = (title = "") => {
  return title
    .toString()
    .normalize("NFD") // separa las letras de sus diacríticos
    .replace(/[\u0300-\u036f]/g, "") // elimina los diacríticos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // todo lo que no sea alfanumérico -> guion
    .replace(/^-+|-+$/g, ""); // sin guiones al inicio/fin
};

module.exports = { slugify };
