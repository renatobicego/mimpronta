import React from "react";
import { Comment } from "../admin/[...formMode]/Form/formPostTypes";
import { useAdmin } from "../adminContext";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const CommentCard = ({ comment, router }: { comment: Comment; router: AppRouterInstance }) => {
  const { isAdmin } = useAdmin();
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
          await axios.delete(`${process.env.NEXT_PUBLIC_URL_API}/blog/comment/${comment._id}`);
          router.refresh()
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
    <div className="text-xs md:text-sm shadow-sm border rounded-2xl w-full py-4 px-5 flex justify-between gap-3">
      <p>
        <span className="text-azul font-semibold">{comment.name}</span>:{" "}
        {comment.text}
      </p>
      {isAdmin && (
        <button onClick={handleDeleteComment}>
          <Image
            alt="borrar comentario"
            src={"/icons/deleteComment.png"}
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
};

export default CommentCard;
