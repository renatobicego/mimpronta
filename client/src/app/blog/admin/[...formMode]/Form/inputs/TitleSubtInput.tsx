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
      <label htmlFor="metaDescription">Meta Descripción</label>
      <Field
        id="metaDescription"
        name="metaDescription"
        placeholder="Meta Descripción"
        className="input"
      />
      <p className="text-sm text-foreground/80">
        Descripción breve del contenido del post. Esta descripción será usada en
        la metadata del post para mejorar SEO.
      </p>
      <label htmlFor="keywords">Palabras Claves</label>
      <Field
        id="keywords"
        name="keywords"
        placeholder="Palabras Claves"
        className="input"
      />
      <p className="text-sm text-foreground/80">
        Palabras claves separadas por comas. Estas palabras serán usadas en la
        metadata del post para mejorar SEO.
      </p>
    </>
  );
};

export default TitleSubtInput;
