import { ErrorMessage, FieldArray, Form, FormikErrors } from "formik";
import ParagraphInput from "./inputs/ParagraphInput";
import { Fragment} from "react";
import { useBlogData } from "@/utils/hooks/useBlogData";
import Loading from "@/app/loading";
import { FormPostValues } from "./formPostTypes";
import TitleSubtInput from "./inputs/TitleSubtInput";
import AuthorInput from "./inputs/SelectAuthor";
import ImgPostInput from "./inputs/ImgPostInput";
import SelectCategory from "./inputs/SelectCategory";
import ErrorMsg from "./ErrorMsg";

const Inputs = ({
  errors,
  setFieldValue,
  values,
  isSubmitting,
  editing
}: {
  errors: FormikErrors<Partial<FormPostValues>>;
  setFieldValue: Function;
  values: FormPostValues;
  isSubmitting: boolean;
  editing: boolean
}) => {
  const { entityData, loading, error } = useBlogData(["categories", "authors"]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <p>Error al conectar con la base de datos</p>
      </div>
    );
  }


  return (
    <Form className="flex flex-col gap-4 lg:gap-6 items-start sm:w-full lg:w-3/5">
      <div className="w-full flex flex-col gap-4 flex-wrap">
        <TitleSubtInput />
        {!editing && <AuthorInput errors={errors} authors={entityData.authors} setFieldValue={setFieldValue} />}
        <ImgPostInput imgPost={values.imgPost} setFieldValue={setFieldValue} />
        <SelectCategory categories={entityData.categories} />
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
                      imgSrc={
                        typeof paragraph.imgParagraph?.src === "string"
                          ? paragraph.imgParagraph?.src
                          : ""
                      }
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
          <ErrorMsg name="body" />
      )}
      <button
        aria-disabled={isSubmitting}
        type="submit"
        className="self-start mt-4 btn-primary-sm flex items-center gap-2"
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
        {editing ? 'Editar' : 'Publicar'}
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
