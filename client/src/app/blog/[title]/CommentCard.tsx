import React, { useState } from "react";
import { Comment } from "../admin/[...formMode]/Form/formPostTypes";
import { useAdmin } from "../adminContext";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import CommentReplyForm from "./CommentReplyForm";

const CommentCard = ({
  comment,
  router,
}: {
  comment: Comment;
  router: AppRouterInstance;
}) => {
  const { isAdmin } = useAdmin();
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleDeleteComment = async () => {
    Swal.fire({
      text: "¿Está seguro/a que desea borrar el comentario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#ffffff",
      customClass: {
        cancelButton: "!text-negro",
      },
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_URL_API}/blog/comment/${comment._id}`
          );
          window.location.reload()
        } catch (error: any) {
          Swal.fire({
            text: "Error al borrar el comentario: " + error.message,
            icon: "error",
          });
        }
      }
    });
  };

  const handleDeleteCommentReply = async (id: string) => {
    Swal.fire({
      text: "¿Está seguro/a que desea borrar el comentario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#ffffff",
      customClass: {
        cancelButton: "!text-negro",
      },
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_URL_API}/blog/commentReply/${id}/${comment._id}`
          );
          window.location.reload()
        } catch (error: any) {
          Swal.fire({
            text: "Error al borrar el comentario: " + error.message,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="text-xs md:text-sm shadow-sm border rounded-2xl w-full py-4 px-5 flex flex-col items-start gap-3 mb-3">
      <div className="flex items-center justify-between gap-3 w-full">
        <p className="flex-1">
          <span className="text-azul font-semibold">{comment.name}</span>:{" "}
          {comment.text}
        </p>
        {isAdmin && (
          <button className="w-6 h-6" onClick={handleDeleteComment}>
            <Image
              alt="borrar comentario"
              src={"/icons/deleteComment.png"}
              width={20}
              height={20}
              className="w-full h-full"
            />
          </button>
        )}
      </div>
      <button
        onClick={() => setShowReplyForm(!showReplyForm)}
        className="text-azul text-xs"
      >
        {showReplyForm ? "Cerrar" : "Responder"}
      </button>
      {showReplyForm && <CommentReplyForm commentId={comment._id} />}
      {(comment.replies && comment.replies.length > 0) && (
        <div className="text-xs flex flex-col items-start w-full border p-3 rounded-xl">
          <h6 className="mb-3 font-medium">Respuestas</h6>
          {comment.replies.map((reply) => (
            <div
              key={reply._id}
              className="flex items-center justify-between gap-3 w-full"
            >
              <p className="flex-1">
                <span className="text-azul font-semibold">{reply.name}</span>:{" "}
                {reply.text}
              </p>
              {isAdmin && (
                <button
                  className="w-6 h-6"
                  onClick={() => handleDeleteCommentReply(reply._id)}
                >
                  <Image
                    alt="borrar respuesta a comentario"
                    src={"/icons/deleteComment.png"}
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentCard;
