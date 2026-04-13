import "./blog.css";
import { Metadata } from "next";
import Posts from "./Posts";

export const metadata: Metadata = {
  title: "Blog | Mimpronta",
  description:
    "Blog de sostenibilidad de Mimpronta: estrategias, análisis y herramientas para implementar modelos de negocio sostenibles.",
};
const Blog = () => {
  return (
    <main className="main py-24 gap-10 overflow-hidden">
      <Posts />
    </main>
  );
};

export default Blog;
