import { Formik } from "formik";
import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import VolverBtn from "@/app/components/VolverBtn";
import { postSchema } from "./postSchema";
import { useParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import { uploadFileFirebase } from "@/utils/files/archivosFirebase";
import { FormPostValues, Paragraph } from "./formPostTypes";
import { useRouter } from "next/navigation";

async function uploadImageAndUpdateProperty(
  image: string | File,
  pathPrefix: string
) {
  if (image instanceof File) {
    const url = await uploadFileFirebase(image, pathPrefix);
    return url as string;
  }
  return image;
}

const FormPost = () => {
  const [initialValues, setInitialValues] = useState<FormPostValues>({
    title: "",
    subtitle: "",
    password: process.env.NEXT_PUBLIC_BLOG_PASSWORD,
    date: new Date(),
    author: {
      _id: "",
      name: "",
      picture: "",
    },
    imgPost: {
      epigraph: "",
      src: "",
    },
    category: "",
    body: [{ subtitle: "", text: "", imgParagraph: { epigraph: "", src: "" } }],
  });
  const { formMode } = useParams();
  const router = useRouter()

  useEffect(() => {
    const getPreviousData = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/blog/title/${formMode[1]}`
      );
      setInitialValues((previousValues) => ({
        ...previousValues,
        ...data,
        body: data.body.map((p: Paragraph) => {
          if (!p.imgParagraph) {
            p.imgParagraph = {
              src: "",
              epigraph: "",
            };
          }
          return p
        }),
      }));
    };
    if (formMode[0] === "editar") {
      getPreviousData();
    }
  }, [formMode]);

  const handleSubmitPost = async (values: FormPostValues, actions: any) => {
    try {
      values.imgPost.src = await uploadImageAndUpdateProperty(
        values.imgPost.src,
        `blog/${values.title}/`
      );

      await Promise.all(
        values.body.map(async (p) => {
          if (p.imgParagraph?.src === "") {
            p.imgParagraph = null;
          } else if (p.imgParagraph?.src) {
            p.imgParagraph.src = await uploadImageAndUpdateProperty(
              p.imgParagraph.src,
              `blog/${values.title}/`
            );
          }
        })
      );

      if (values.author.picture instanceof File) {
        values.author.picture = await uploadImageAndUpdateProperty(
          values.author.picture,
          `blog/authors/`
        );
      }
      
      await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/blog`, values);
      alert("Post creado");
      router.replace(`/blog/${values.title}`)
    } catch (error) {
      if (error instanceof AxiosError) {
        const { errors } = error.response?.data;
        const errorsServer: { [key: string]: string } = {};
        errors.forEach((error: { path: string; msg: string }) => {
          errorsServer[error.path] = error.msg;
        });
        actions.setErrors(errorsServer);
      }
    }
    actions.setSubmitting(false);
  };

  const validateFormPost = (values: FormPostValues) => {
    const errors: Partial<FormPostValues> = {};

    if (!values.author._id) {
      errors.author = {};
      if (!values.author.name) {
        errors.author.name = "Nombre del autor/a obligatorio";
      }
      if (!values.author.picture) {
        errors.author.picture = "Foto del autor/a obligatoria";
      }
    }
    if (Object.keys(errors.author || {}).length === 0) {
      delete errors.author;
    }

    return errors;
  };

  return (
    <main className="size-section py-28">
      <VolverBtn />
      <h4 className="phrase-size font-semibold font-text mb-4">
        Escribir post
      </h4>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={postSchema}
        validate={validateFormPost}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmitPost}
      >
        {({ errors, setFieldValue, values, isSubmitting }) => (
          <Inputs
            setFieldValue={setFieldValue}
            errors={errors}
            values={values}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </main>
  );
};

export default FormPost;
