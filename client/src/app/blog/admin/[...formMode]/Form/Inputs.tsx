import { ErrorMessage, Field, FieldArray, Form, FormikErrors } from "formik";
import ParagraphInput from "./inputs/ParagraphInput";
import {
  Fragment,
  PropsWithChildren,
  useState,
} from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { Author, useBlogData } from "@/utils/hooks/useBlogData";
import FileUpload from "./inputs/FileUpload";
import Loading from "@/app/loading";
import { FormPostValues } from "./formPostTypes";
import SelectAuthor from "./inputs/SelectAuthor";


const Inputs = ({
  errors,
  setFieldValue,
  values,
  isSubmitting,
}: {
  errors: FormikErrors<Partial<FormPostValues>>;
  setFieldValue: Function;
  values: FormPostValues;
  isSubmitting: boolean;
}) => {
  const [newAuthor, setNewAuthor] = useState(false);
  const { entityData, loading, error } = useBlogData(["categories", "authors"]);

  if(loading){
    return <Loading />
  }

  if(error){
    return <div>
      <p>
        Error al conectar con la base de datos
      </p>
    </div>
  }
  console.log(values)
  return (
    <Form className="flex flex-col gap-4 lg:gap-6 items-start sm:w-full lg:w-3/5">
      <div className="w-full flex flex-col gap-4 flex-wrap">
        <Field id="title" name="title" placeholder="Título" className="input" />
        <p className="italic text-red-600 font-semibold">
          <ErrorMessage name="title" />
        </p>
        <Field
          id="subtitle"
          name="subtitle"
          placeholder="Subtítulo"
          className="flex-1 input resize-none min-h-[180px]"
          as="textarea"
        />
        <p className="italic text-red-600 font-semibold">
          <ErrorMessage name="subtitle" />
        </p>
        <div className="flex flex-col gap-2">
          {newAuthor ? (
            <>
              <Field
                id="author.name"
                name="author.name"
                placeholder="Nombre del autor"
                className="input"
              />
              <p className="italic text-red-600 font-semibold">
                <ErrorMessage name="author.name" />
              </p>
              <label htmlFor="author.picture">Foto de autor</label>
              <FileUpload setFieldValue={setFieldValue} name="author.picture" />
              <p className="italic text-red-600 font-semibold">
                <ErrorMessage name="author.picture" />
              </p>
              <button
                type="button"
                className="btn-secondary py-2 rounded-3xl text-sm self-start"
                onClick={() => setNewAuthor(false)}
              >
                Seleccionar autor
              </button>
            </>
          ) : (
            <>
              <Field
                id="author._id"
                name="author._id"
                as={SelectAuthor}
                authors={entityData.authors}
              />
              {errors.author && (
                <p className="italic text-red-600 font-semibold">
                  Seleccionar o agregar autor
                </p>
              )}
              <button
                type="button"
                className="btn-secondary py-2 rounded-3xl text-sm self-start"
                onClick={() => setNewAuthor(true)}
              >
                Agregar autor
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="imgPost.src">Imagen de portada</label>
          <FileUpload setFieldValue={setFieldValue} name="imgPost.src" />
          <p className="italic text-red-600 font-semibold">
            <ErrorMessage name="imgPost.src" />
          </p>
          <Field
            id="imgPost.epigraph"
            name="imgPost.epigraph"
            className="input"
            placeholder="Epígrafe (opcional)"
          />
          <p className="italic text-red-600 font-semibold">
            <ErrorMessage name="imgPost.epigraph" />
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category">Categoría</label>
          <Field
            id="category"
            className="input self-start min-w-[160px]"
            name="category"
            as="select"
          >
            <option value="" disabled hidden>Categoría</option>
            {entityData.categories.map((category) => (
              <option key={category._id} value={category._id}>
                
                {category.name}
              </option>
            ))}
          </Field>
          <p className="italic text-red-600 font-semibold">
            <ErrorMessage name="category" />
          </p>
        </div>
      </div>
      <h6 className="phrase-size font-text font-normal">Párrafos</h6>
      <FieldArray
        name="body"
        render={(arrayHelpers) => {
          return (
            <>
              {values.body.map((paragraph, index) => {
                return (
                  <Fragment key={index}>
                    <hr className="w-full border-amarillo" />
                    <ParagraphInput
                      setFieldValue={setFieldValue}
                      index={index}
                      removeParagraph={arrayHelpers.remove}
                    />
                  </Fragment>
                );
              })}
              <button
                type="button"
                className="btn-secondary py-2 rounded-3xl text-sm self-start"
                onClick={() =>
                  arrayHelpers.push({
                    subtitle: "",
                    text: "",
                    imgParagraph: { epigraph: "", src: "" },
                  })
                }
              >
                Agregar párrafo
              </button>
            </>
          );
        }}
      />

      {typeof errors.body === "string" && (
        <p className="italic text-red-600 font-semibold">
          <ErrorMessage name="body" />
        </p>
      )}
      <button
        aria-disabled={isSubmitting}
        type="submit"
        className="self-start mt-4 btn-primary-sm flex items-center gap-2"
      >
        <svg
          className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${isSubmitting ? '' : 'hidden'}`}
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
        Publicar
      </button>
      {Object.keys(errors || {}).length !== 0 && (
        <p className="italic text-red-600 font-semibold">
          Por favor, corrija los errores del post
        </p>
      )}
    </Form>
  );
};

export default Inputs;
