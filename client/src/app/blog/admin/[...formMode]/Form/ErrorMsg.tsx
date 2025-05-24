import { ErrorMessage } from "formik";

const ErrorMsg = ({ name }: { name: string }) => {
  return (
    <p className="italic text-red-600 font-semibold">
      <ErrorMessage name={name} />
    </p>
  );
};

export default ErrorMsg;
