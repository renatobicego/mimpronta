import { Field, Form } from "formik";
import { Paragraph } from "./FormPost";
import ParagraphInput from "./ParagraphInput";
import { useState } from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { Author, useBlogData } from "@/utils/hooks/useBlogData";


const SelectAuthor = ({authors} : {authors: Array<Author>}) => {
  return (
    <Select
      classNames={{
        mainWrapper: "rounded-2xl",
        trigger: "input bg-transparent rounded-2xl",
        label: "italic text-gray-500 font-text text-base font-normal ml-3",
      }}
      label="Seleccionar autor"
    >
      {authors.map((author, i) => (
        <SelectItem
          key={i}
          value={author._id}
          startContent={
            <Avatar alt="" className="w-10 h-10" src={author.picture} />
          }
        >
          {author.name}
        </SelectItem>
      ))}
    </Select>
  );
};


const Inputs = ({
  paragraphs,
  setParagraphs,
}: {
  paragraphs: Paragraph[];
  setParagraphs: React.Dispatch<React.SetStateAction<Paragraph[]>>;
}) => {
  const [newAuthor, setNewAuthor] = useState(false);
  const { entityData, loading, error } = useBlogData(["categories", "authors"]);
  const handleAddParagraph = () => {
    setParagraphs([
      ...paragraphs,
      { subtitle: "", text: "", imgParagraph: { epigraph: "", src: "" } },
    ]);
  };

  const handleRemoveParagraph = (index: Number) => {
    setParagraphs(paragraphs.filter((p, i) => i !== index));
  };

  return (
    <Form className="flex flex-col gap-4 lg:gap-6 items-start sm:w-full lg:w-3/5">
      <div className="w-full flex flex-col gap-4 flex-wrap">
        <Field id="title" name="title" placeholder="Título" className="input" />
        <Field
          id="subtitle"
          name="subtitle"
          placeholder="Subtítulo"
          className="flex-1 input resize-none min-h-[180px]"
          as="textarea"
        />
        <div className="flex flex-col gap-2">
          {newAuthor ? (
            <>
              <Field
                id="author.name"
                name="author.name"
                placeholder="Nombre del autor"
                className="input"
              />
              <label htmlFor="author.picture">Foto de autor</label>
              <Field
                id="author.picture"
                name="author.picture"
                placeholder="Nombre del autor"
                type="file"
                className="input"
              />
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
              <Field id="author._id" name="author._id" as={SelectAuthor} authors={entityData.authors}/>
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
          <Field
            id="imgPost.src"
            name="imgPost.src"
            type="file"
            className="input"
            placeholder="Imagen de portada"
          />
          <Field
            id="imgPost.epigraph"
            name="imgPost.epigraph"
            className="input"
            placeholder="Epígrafe (opcional)"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category">Categoría</label>
          <Field
            id="category"
            className="input self-start min-w-[100px]"
            name="category"
            as="select"
          >
            {entityData.categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <h6 className="phrase-size font-text font-normal">Párrafos</h6>
      {paragraphs.map((paragraph, index) => (
        <>
          <hr className="w-full border-amarillo" />
          <ParagraphInput
            handleRemoveParagraph={handleRemoveParagraph}
            index={index}
            key={index}
          />
        </>
      ))}

      <button
        type="button"
        className="btn-secondary py-2 rounded-3xl"
        onClick={handleAddParagraph}
      >
        Agregar párrafo
      </button>
      <button type="submit" className="self-start mt-4 btn-primary-sm">
        Publicar
      </button>
    </Form>
  );
};

export default Inputs;
