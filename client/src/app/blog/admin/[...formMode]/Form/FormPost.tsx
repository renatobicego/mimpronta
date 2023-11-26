import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import ParagraphInput from "./ParagraphInput";
import Inputs from "./Inputs";
import { useRouter } from "next/navigation";
import VolverBtn from "@/app/components/VolverBtn";
import { object, string, number, date, InferType, array, mixed } from 'yup';

interface ImageBlog {
  src: string | File;
  epigraph: string;
}

export interface Paragraph {
  subtitle: string;
  text: string;
  imgParagraph: ImageBlog;
}

interface Author {
  _id?: string,
  name?: string,
  picture?: string | File
}

interface FormPostValues {
  title: string;
  subtitle: string;
  date: Date;
  author: Author;
  imgPost: ImageBlog;
  category: string;
  body: Array<Paragraph>;
}



const postSchema = object({
  title: string().required('Título obligatorio'),
  subtitle: string().required('Subtítulo obligatorio'),
  category: string().required('Categoria obligatorio'),
  date: date().default(() => new Date()),
  author: object({
    _id: string().optional(),
    name: string().required('Nombre del autor/a obligatorio'),
    picture: mixed().required('Foto del autor/a obligatorio'), // Allow either string or File
  }),
  imgPost: object({
    epigraph: string().optional().default(""),
    src: mixed().required('Imagen de portada obligatoria / Error al subir la imagen de portada'), // Allow either string or File
  }),
  body: array(
    object({
      subtitle: string().optional().default(""),
      text: string().required('Texto del párrafo obligatorio'),
      imgParagraph: object({
        epigraph: string().optional().default(""),
        src: mixed().required('Error al subir la imagen de párrafo'), // Allow either string or File
      }).optional().default(null),
    })
  ).min(1, 'El post debe contener al menos un párrafo'),
})

const FormPost = ({ editing = true }) => {
  const [initialValues, setInitialValues] = useState<FormPostValues>({
    title: "",
    subtitle: "",
    date: new Date(),
    author: {
      _id: "",
      name: "",
      picture: ""
    },
    imgPost: {
      epigraph: "",
      src: "",
    },
    category: "",
    body: [],
  });

  const [paragraphs, setParagraphs] = useState<Paragraph[]>([]) 

  useEffect(() => {
    if (editing) {
      setInitialValues((previousValues) => ({
        ...previousValues,
        title: "Hola",
      }));
    }
  }, [editing]);

  const handleSubmitPost = (values: FormPostValues, actions: any) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }

  const validateFormPost = (values: FormPostValues) => {
    const errors: Partial<FormPostValues> = {}
    const fieldsToValidate = ['title', 'subtitle', 'category']
    fieldsToValidate.forEach((field) => {
      if(!field){

      }
    })
    
  }

  return (
    <main className="size-section py-28">
      <VolverBtn />
      <h4 className="phrase-size font-semibold font-text mb-4">
        Escribir post
      </h4>
      <Formik
        initialValues={{ ...initialValues, body: paragraphs }}
        enableReinitialize
        validate={validateFormPost}
        onSubmit={handleSubmitPost}
      >
        <Inputs paragraphs={paragraphs} setParagraphs={setParagraphs} />
      </Formik>
    </main>
  );
};

export default FormPost;
