import { Field } from "formik";
import ErrorMsg from "../ErrorMsg";

const TitleSubtInput = () => {
  return (
    <>
      <label htmlFor="title">Título</label>
      <Field id="title" name="title" placeholder="Título" className="input" />
      <ErrorMsg name="title" />
      <label htmlFor="subtitle">Subtítulo</label>
      <Field
        id="subtitle"
        name="subtitle"
        placeholder="Subtítulo"
        className="flex-1 input resize-none min-h-[180px]"
        as="textarea"
      />
      <ErrorMsg name="subtitle" />
    </>
  );
};

export default TitleSubtInput;
