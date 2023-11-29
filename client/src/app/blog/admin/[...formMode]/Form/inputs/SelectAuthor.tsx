import { Avatar, Select, SelectItem } from "@nextui-org/react";
import { PropsWithChildren, useEffect } from "react";

interface AuthorServer {
  _id: string,
  name: string, 
  picture: string
}

interface SelectAuthorProps {
  authors: Array<AuthorServer>;
  value: string
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
      defaultSelectedKeys={[props.value]}
    >
      {props.authors.map((author) => (
        <SelectItem
          key={author._id}
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

export default SelectAuthor;
