import React from "react";
import { Commentary } from "../admin/[...formMode]/Form/formPostTypes";
import { Form, Formik } from "formik";

const Commentaries = ({
  commentaries,
  postId,
}: {
  commentaries: Array<Commentary>;
  postId: string;
}) => {
  const initialValues: Commentary = {
    _id: "",
    name: "",
    text: "",
    postId,
  };
  const handlePostCommentary = async (values: Commentary, actions: any) => {
    try {
        
    } catch (error) {
        
    }
  };
  return (
    <div>
      <h4 className="subtitle-size mt-6 md:mt-8">Comentarios</h4>
      <Formik initialValues={initialValues} onSubmit={handlePostCommentary}>
        <Form></Form>
      </Formik>
    </div>
  );
};

export default Commentaries;
