import { ErrorMessage, Field } from "formik";
import FileUpload from "./FileUpload";
import Image from "next/image";
import { deleteFileFirebase } from "@/utils/files/archivosFirebase";
import ErrorMsg from "../ErrorMsg";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const TextInput = (props: any) => {
//   return (
//     <ReactQuill
//       theme="snow"
//       {...props}
//       // onChange={(value) => setFieldValue(`body[${index}].text`, value)}
//       onChange={(value) => console.log(value)}
//     />
//   );
// };

const ParagraphInput = ({
  index,
  setFieldValue,
  removeParagraph,
  imgSrc,
  text,
}: {
  index: number;
  setFieldValue: Function;
  removeParagraph: Function;
  imgSrc: string;
  text: string;
}) => {
  const checkDeleteParagraph = async () => {
    Swal.fire({
      text: "¿Está seguro/a que desea borrar el párrafo?",
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
          removeParagraph(index);
          if (imgSrc) {
            await deleteFileFirebase(imgSrc);
          }
        } catch (error: any) {
          Swal.fire({
            text: "Error al borrar párrafo: " + error.message,
            icon: "error",
          });
        }
      }
    });
  };

  const handleDeleteImageOfParagraph = async (imgSrc: string) => {
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
      if (result.isConfirmed) {
        try {
          await deleteFileFirebase(imgSrc);
          setFieldValue(`body[${index}].imgParagraph`, {
            src: "",
            epigraph: "",
          });
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
    <div className="flex flex-col gap-2 w-full mb-8">
      <label htmlFor={`body[${index}].subtitle`}>Párrafo {index + 1}</label>
      <Field
        name={`body[${index}].subtitle`}
        placeholder="Subtítulo del párrafo (opcional)"
        className="input"
      />
      <ErrorMsg name={`body[${index}].subtitle`} />
      {document !== undefined && (
        <ReactQuill
          theme="snow"
          value={text}
          onChange={(value) => setFieldValue(`body[${index}].text`, value)}
        />
      )}
      <ErrorMsg name={`body[${index}].text`} />

      {imgSrc ? (
        <>
          <label className="font-semibold">
            Imagen del párrafo {index} (para cambiarla, borrar la actual y subir
            otra; se puede borrar directamente y no cambiar por otra imagen)
          </label>
          <div className="relative lg:[&>div]:hover:visible w-52 h-52">
            <div
              className={`absolute -left-2 -top-2 w-[105%] h-[110%] invisible paragraph-size font-semibold 
                            text-negro  flex justify-center items-center lg:hover:backdrop-blur-sm 
                            z-10 rounded-[20px]`}
            >
              <button
                type="button"
                onClick={() => handleDeleteImageOfParagraph(imgSrc)}
                className={`flex items-center gap-2 bg-white py-1 px-3 rounded-2xl`}
              >
                Borrar Imagen
              </button>
            </div>
            <Image
              alt={"imagen de párrafo " + index}
              width={300}
              height={300}
              src={imgSrc}
              className="w-full h-full object-contain"
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor={`body[${index}].imgParagraph.src`}>
            Imagen del párrafo (opcional)
          </label>

          <FileUpload
            setFieldValue={setFieldValue}
            name={`body[${index}].imgParagraph.src`}
          />
        </>
      )}
      <ErrorMsg name={`body[${index}].imgParagraph.src`} />
      <label htmlFor={`body[${index}].imgParagraph.epigraph`}>Epígrafe</label>
      <Field
        name={`body[${index}].imgParagraph.epigraph`}
        placeholder="Epígrafe (opcional)"
        className="input"
      />
      <button
        type="button"
        className="btn-secondary py-1 text-sm rounded-3xl self-start border-red-400 hover:border-red-700"
        onClick={checkDeleteParagraph}
      >
        Borrar párrafo
      </button>
    </div>
  );
};

export default ParagraphInput;
