/**
 * Convierte un título en un slug limpio para URLs.
 *
 * Ejemplo:
 *   "Qué fácil se ve el mundo cuando soy feliz"
 *   -> "que-facil-se-ve-el-mundo-cuando-soy-feliz"
 *
 * - Pasa a minúsculas.
 * - Elimina tildes/diacríticos (á -> a, ñ -> n, ü -> u, etc.).
 * - Reemplaza cualquier caracter no alfanumérico por guiones.
 * - Colapsa guiones repetidos y recorta los guiones de los extremos.
 */
export function slugify(title: string): string {
  return title
    .toString()
    .normalize("NFD") // separa las letras de sus diacríticos
    .replace(/[\u0300-\u036f]/g, "") // elimina los diacríticos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // todo lo que no sea alfanumérico -> guion
    .replace(/^-+|-+$/g, ""); // sin guiones al inicio/fin
}
