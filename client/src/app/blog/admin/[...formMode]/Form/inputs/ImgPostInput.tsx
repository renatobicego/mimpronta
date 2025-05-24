import React from "react";
import { ImageBlog } from "../formPostTypes";
import { deleteFileFirebase } from "@/utils/files/archivosFirebase";
import Image from "next/image";
import FileUpload from "./FileUpload";
import ErrorMsg from "../ErrorMsg";
import { Field } from "formik";
import Swal from "sweetalert2";

const ImgPostInput = ({
  imgPost,
  setFieldValue,
}: {
  imgPost: ImageBlog;
  setFieldValue: Function;
}) => {
  const handleDeleteImgPost = async () => {
    Swal.fire({
      text: "¿Está seguro/a que desea borrar la imagen?",
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
      if (result.isConfirmed && typeof imgPost.src === "string") {
        try {
          await deleteFileFirebase(imgPost.src);
          setFieldValue("imgPost", {_id: imgPost._id, src: "", epigraph: "" });
        } catch (error: any) {
          Swal.fire({
            text: "Error al borrar la imagen: " + error.message,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <div className="flex flex-col gap-2">
      {typeof imgPost.src === "string" && imgPost.src.length > 2 ? (
        <>
          <label htmlFor="author.picture">
            Foto de portada (para cambiarla, borrar la anterior y subir una
            nueva)
          </label>
          <div className="relative lg:[&>div]:hover:visible w-72 h-52">
            <div
              className={`absolute -left-2 -top-2 w-[105%] h-[110%] invisible paragraph-size font-semibold 
                            text-negro  flex justify-center items-center lg:hover:backdrop-blur-sm 
                            z-10 rounded-[20px]`}
            >
              <button
                type="button"
                onClick={handleDeleteImgPost}
                className={`flex items-center gap-2 text-sm bg-white py-1 px-3 rounded-2xl`}
              >
                Borrar Imagen
              </button>
            </div>
            <Image
              alt={"imagen de portada"}
              width={300}
              height={300}
              src={imgPost.src}
              className="w-full h-full object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor="imgPost.src">Imagen de portada</label>
          <FileUpload setFieldValue={setFieldValue} name="imgPost.src" />
        </>
      )}
      <ErrorMsg name="imgPost.src" />
      <label htmlFor="imgPost.epigraph">Epígrafe</label>
      <Field
        id="imgPost.epigraph"
        name="imgPost.epigraph"
        className="input"
        placeholder="Epígrafe (opcional)"
      />
      <ErrorMsg name="imgPost.epigraph" />
    </div>
  );
};

export default ImgPostInput;
