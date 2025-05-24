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
import { usePosts } from "@/app/postsContext";
import Swal from 'sweetalert2'
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
  const {fetchPosts} = usePosts()

  useEffect(() => {
    const getPreviousData = async () => {
      const title = decodeURIComponent(formMode[1])
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/blog/title/${title}`
      );
      if(!data){
        return router.replace('/blog/admin/publicar')
      }
      setInitialValues((previousValues) => ({
        ...previousValues,
        ...data,
        category: data.category._id,
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

      if (values.author.picture instanceof File && formMode[0] !== "editar") {
        values.author.picture = await uploadImageAndUpdateProperty(
          values.author.picture,
          `blog/authors/`
        );
      }

      if(formMode[0] === "editar"){
        await axios.put(`${process.env.NEXT_PUBLIC_URL_API}/blog/${values._id}`, values);
        await fetchPosts()
        Swal.fire({
          text: "Post editado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          customClass: "font-title"
        });
      }else{
        await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/blog`, values);
        await fetchPosts()
        Swal.fire({
          text: "Post creado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          customClass: "font-title"
        });
      }
      actions.resetForm()
      router.replace(`/blog/${values.title}`)
    } catch (error) {
      if (error instanceof AxiosError && error.status === 400) {
        const { errors } = error.response?.data;
        const errorsServer: { [key: string]: string } = {};
        errors.forEach((error: { path: string; msg: string }) => {
          errorsServer[error.path] = error.msg;
        });
        actions.setErrors(errorsServer);
      }else{
        Swal.fire({
          text: "Error en el servidor: " + error,
          icon: "error",
          customClass: "font-title"
        });
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
    <main className="size-section py-28 ">
      <VolverBtn />
      <h4 className="phrase-size font-semibold font-text mb-4">
        {formMode[0] === "editar" ? 'Editar post' : 'Escribir post' }
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
            editing={formMode[0] === "editar"}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </main>
  );
};

export default FormPost;
