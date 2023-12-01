"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    const shouldDelete = confirm("¿Está seguro que desea borrar este post?");
    if (shouldDelete) {
      await axios.delete(`${process.env.NEXT_PUBLIC_URL_API}/blog/${id}/${process.env.NEXT_PUBLIC_BLOG_PASSWORD}`);
      await fetchPosts()
    }
  };
  return (
    <div className="w-3/5 flex rounded-2xl border-2 border-gray-300">
      <Image
        src={imgSrc}
        width={300}
        height={300}
        alt={"Foto post recomendado con título: "}
        className="w-2/5 sm:w-[35%] xl:w-2/5 rounded-l-2xl max-h-[250px] object-cover"
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
