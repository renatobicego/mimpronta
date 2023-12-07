"use client";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const PostCardAdmin = ({
  imgSrc,
  title,
  id,
  fetchPosts
}: {
  imgSrc: string;
  title: string;
  id: string;
  fetchPosts: Function
}) => {
  const handleDelete = async () => {
    Swal.fire({
      title: "¿Está seguro/a?",
      text: "Los datos e imágenes del post serán borrados del servidor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#ffffff",
      customClass: {
        cancelButton: "!text-negro"
      },
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${process.env.NEXT_PUBLIC_URL_API}/blog/${id}/${process.env.NEXT_PUBLIC_BLOG_PASSWORD}`);
          await fetchPosts()
          Swal.fire({
            text: "Post borrado correctamente",
            icon: "success"
          });
        } catch (error: any) {
          Swal.fire({
            text: "Error al borrar post: " + error.message,
            icon: "error"
          });
        }
      }
    });
  };
  return (
    <div className="w-3/5 flex rounded-2xl border-2 border-gray-300">
      <Image
        src={imgSrc}
        width={300}
        height={300}
        alt={"Foto post recomendado con título: "}
        className="w-2/5 sm:w-[35%] xl:w-2/5 rounded-l-2xl  object-cover"
      />
      <div className="flex flex-col items-start gap-1 md:gap-3 px-4 py-3 md:py-6 self-center">
        <h5 className="text-xs xsm:text-sm md:text-base lg:text-lg 2xl:text-xl  mb-2 font-medium">
          {title}
        </h5>
        <div className="flex items-center gap-2">
          <Link href={"/blog/admin/editar/" + title}>
            <button className="btn-secondary md:text-sm 3xl:text-base">
              Editar
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="btn-secondary md:text-sm 3xl:text-base border-red-300 hover:border-red-700"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCardAdmin;
