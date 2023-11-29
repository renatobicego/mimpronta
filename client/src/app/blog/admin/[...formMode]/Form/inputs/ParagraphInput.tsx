import { ArrayHelpers, ErrorMessage, Field } from "formik";
import FileUpload from "./FileUpload";

const ParagraphInput = ({
  index,
  setFieldValue,
  removeParagraph,
}: {
  index: number;
  setFieldValue: Function;
  removeParagraph: Function;
}) => {
  const checkDeleteParagraph = () => {
    const validation = confirm("¿Está seguro que desea borrar el párrafo?");
    if (validation) {
      removeParagraph(index);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full mb-8">
      <label htmlFor={`body[${index}].subtitle`}>Párrafo {index + 1}</label>
      <Field
        name={`body[${index}].subtitle`}
        placeholder="Subtítulo del párrafo (opcional)"
        className="input"
      />
      <p className="italic text-red-500 font-semibold">
        <ErrorMessage name={`body[${index}].subtitle`} />
      </p>
      <Field
        name={`body[${index}].text`}
        placeholder="Texto del párrafo"
        className="flex-1 input resize-none min-h-[250px] pr-2"
        as="textarea"
      />
      <p className="italic text-red-500 font-semibold">
        <ErrorMessage name={`body[${index}].text`} />
      </p>
      <label htmlFor={`body[${index}].imgParagraph.src`}>
        Imagen del párrafo (opcional)
      </label>

      <FileUpload
        setFieldValue={setFieldValue}
        name={`body[${index}].imgParagraph.src`}
      />
      <p className="italic text-red-500 font-semibold">
        <ErrorMessage name={`body[${index}].imgParagraph.src`} />
      </p>
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
