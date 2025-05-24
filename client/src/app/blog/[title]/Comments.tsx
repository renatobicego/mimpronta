import React from "react";
import { Comment } from "../admin/[...formMode]/Form/formPostTypes";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import CommentCard from "./CommentCard";
import { AdminProvider } from "../adminContext";
import { useRouter } from "next/navigation";

export const commentSchema = object({
  name: string().required().min(3),
  text: string().required().min(1),
});

const Comments = ({
  comments,
  postId,
}: {
  comments: Array<Comment>;
  postId: string;
}) => {
  const router = useRouter();
  const initialValues: Comment = {
    _id: "",
    name: "",
    text: "",
    postId,
  };
  const handlePostComment = async (values: Comment, actions: any) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/blog/comment`,
        values
      );
    
      Swal.fire({
        text: "Comentario publicado",
        icon: "success",
        showConfirmButton: false,
        timer: 1550,
        customClass: "font-title",
      });

      window.location.reload()
    } catch (error: any) {
      Swal.fire({
        text: "Error al publicar el comentario " + error.message,
        icon: "error",
        customClass: "font-title",
      });
    }
  };
  return (
    <AdminProvider>
      <div className="w-full">
        <h4 className="subtitle-size mt-6 md:mt-8">Comentarios</h4>
        <Formik
          className="w-full"
          initialValues={initialValues}
          onSubmit={handlePostComment}
          validationSchema={commentSchema}
          validateOnBlur
          validateOnChange
        >
          {({ errors, isSubmitting }) => (
            <Form
              className="flex flex-col gap-3 items-start w-full md:w-5/6 xl:w-3/4 mt-6 sm:mt-8 border shadow-sm 
            rounded-2xl px-4 py-8"
            >
              <p className="text-xs">
                Los comentarios no podrán ser editados o borrados
              </p>
              <Field
                className={`input-comment w-full ${
                  errors.name && "border-red-600"
                }`}
                name="name"
                placeholder="Nombre y apellido"
              />
              <Field
                className={`${
                  errors.text && "border-red-600"
                } input-comment w-full resize-none min-h-[100px]`}
                name="text"
                placeholder="Comentario"
                as="textarea"
              />
              <button
                aria-disabled={isSubmitting}
                className="btn-primary text-xs md:text-sm py-1 px-3 md:py-1.5 md:px-4 flex items-center gap-2"
              >
                <svg
                  className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${
                    isSubmitting ? "" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-55"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#E9E9E9"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="#1F1F1F"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Publicar comentario
              </button>
            </Form>
          )}
        </Formik>
        {comments.length === 0 ? (
          <p className="mt-8 text-sm">
            Todavía no hay comentarios ¡Sé el primero!
          </p>
        ) : (
          <div className="mt-8  w-full md:w-5/6 xl:w-3/4">
            {comments.map((comment) => (
              <CommentCard
                router={router}
                key={comment._id}
                comment={comment}
              />
            ))}
          </div>
        )}
        <hr className="mt-12 md:mt-16" />
      </div>
    </AdminProvider>
  );
};

export default Comments;
