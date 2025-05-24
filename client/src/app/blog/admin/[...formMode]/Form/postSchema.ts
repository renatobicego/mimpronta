import { object, string, date, array, mixed } from "yup";
export const postSchema = object({
  title: string().required("Título obligatorio").min(5, "Agregar más texto al título"),
  subtitle: string().required("Subtítulo obligatorio").min(10, "Agregar más texto al subtítulo"),
  category: string().required("Categoria obligatoria"),
  date: date().default(() => new Date()),
  author: object({
    _id: string().optional().min(2),
    name: string().optional(),
    picture: mixed().optional(), // Allow either string or File
  }),
  imgPost: object({
    epigraph: string().optional().default(""),
    src: mixed().required(
      "Imagen de portada obligatoria / Error al subir la imagen de portada"
    ), // Allow either string or File
  }),
  body: array(
    object({
      subtitle: string().optional().default(""),
      text: string().required("Texto del párrafo obligatorio"),
      imgParagraph: object({
        epigraph: string().optional().default(""),
        src: mixed().optional().default(""), // Allow either string or File
      })
        .optional()
        .nullable()
        .default(null),
    })
  ).min(1, "El post debe contener al menos un párrafo"),
});
