import { FieldHookConfig, useField } from "formik";
import { MutableRefObject } from "react";

const FileUpload = ({
  name,
  setFieldValue
}: {
  name: string,
  setFieldValue: Function
}) => {
  return (
    <div>
      <input
        className="input"
        accept=".png, .jpg, .jpeg"
        type="file"
        id={name}
        name={name}
        onChange={(e) => {
            // Object is possibly null error w/o check
            if (e.currentTarget.files) {
              setFieldValue(name, e.currentTarget.files[0]);
            }
          }}
      />
    </div>
  );
};

export default FileUpload;
