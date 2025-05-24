import React from "react";
import { AdminProvider } from "../adminContext";
import dynamic from 'next/dynamic'
import PostList from "./PostList";
const AdminValidation = dynamic(() => import("./AdminValidation"), {
  ssr: false,
});
const BlogAdmin = () => {
  return (
    <AdminProvider>
      <AdminValidation>
        <PostList />
      </AdminValidation>
    </AdminProvider>
  );
};

export default BlogAdmin;
