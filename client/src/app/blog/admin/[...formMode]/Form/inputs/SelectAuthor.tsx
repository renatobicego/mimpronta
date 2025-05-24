import { Avatar, Select, SelectItem } from "@nextui-org/react";
import { Field, FormikErrors } from "formik";
import { PropsWithChildren, useState } from "react";
import FileUpload from "./FileUpload";
import ErrorMsg from "../ErrorMsg";
import { AuthorServer, FormPostValues } from "../formPostTypes";


interface SelectAuthorProps {
  authors: Array<AuthorServer>;
  value: string;
  // Add any other props you explicitly expect for SelectAuthor
}
const SelectAuthor: React.FC<PropsWithChildren<SelectAuthorProps>> = (
  props
) => {
  return (
    <Select
      classNames={{
        mainWrapper: "rounded-2xl",
        trigger: "input bg-transparent rounded-2xl",
        label: "italic text-gray-500 font-text text-base font-normal ml-3",
      }}
      label="Seleccionar autor"
      {...props}
      items={props.authors}
    >
      {(author) => (
        <SelectItem
          key={author._id}
          value={author._id}
          startContent={
            <Avatar alt="" className="w-10 h-10" src={author.picture} />
          }
        >
          {author.name}
        </SelectItem>
      )}
    </Select>
  );
};

const AuthorInput = ({
  errors,
  setFieldValue,
  authors,
}: {
  setFieldValue: Function;
  errors: FormikErrors<Partial<FormPostValues>>;
  authors: Array<AuthorServer>;
}) => {
  const [newAuthor, setNewAuthor] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {newAuthor ? (
        <>
          <Field
            id="author.name"
            name="author.name"
            placeholder="Nombre del autor"
            className="input"
          />
          <ErrorMsg name="author.name" />
          <label htmlFor="author.picture">Foto de autor</label>
          <FileUpload setFieldValue={setFieldValue} name="author.picture" />

          <ErrorMsg name="author.picture" />

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
            authors={authors}
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
  );
};

export default AuthorInput;
