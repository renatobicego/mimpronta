import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import ParagraphInput from "./ParagraphInput";
import Inputs from "./Inputs";
import { useRouter } from "next/navigation";

interface ImageBlog {
  href: string | File;
  epigraph: string;
}

export interface Paragraph {
  subtitle: string;
  text: string;
  imgParagraph: ImageBlog;
}

interface Author {
  id?: string,
  name?: string,
  picture?: string | File
}

interface MyFormValues {
  title: string;
  subtitle: string;
  date: Date;
  author: Author;
  imgPost: ImageBlog;
  category: string;
  body: Array<Paragraph>;
}
const FormPost = ({ editing = true }) => {
  const [initialValues, setInitialValues] = useState<MyFormValues>({
    title: "",
    subtitle: "",
    date: new Date(),
    author: {
      id: "",
      name: "",
      picture: ""
    },
    imgPost: {
      epigraph: "",
      href: "",
    },
    category: "",
    body: [],
  });

  const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);
  const router = useRouter()

  useEffect(() => {
    if (editing) {
      setInitialValues((previousValues) => ({
        ...previousValues,
        title: "Hola",
      }));
    }
  }, [editing]);

  return (
    <main className="size-section py-28">
      <button onClick={router.back} className="flex items-center gap-2 mb-4">
        <Image
          alt="Volver icono"
          className="rotate-180 mt-0.5"
          width={20}
          height={20}
          src={'/icons/chevronB.png'}
        />
        Volver
      </button>
      <h4 className="phrase-size font-semibold font-text mb-4">
        Escribir post
      </h4>
      <Formik
        initialValues={{ ...initialValues, body: paragraphs }}
        enableReinitialize
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Inputs paragraphs={paragraphs} setParagraphs={setParagraphs} />
      </Formik>
    </main>
  );
};

export default FormPost;
