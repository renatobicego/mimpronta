"use client"
import { AdminProvider } from "../../adminContext";
import dynamic from 'next/dynamic'
import FormPost from "./Form/FormPost";
 
const AdminValidation = dynamic(() => import('../AdminValidation'), { ssr: false })

const CreateEditPost = () => {
    return (
        <AdminProvider>
            <AdminValidation>
                <FormPost />
            </AdminValidation>
        </AdminProvider>
    )
  };
  
  export default CreateEditPost;