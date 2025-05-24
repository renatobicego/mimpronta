
import "./blog.css";
import { Metadata } from "next";
import Posts from "./Posts";

export const metadata: Metadata = {
  title: "Nuestro Blog",
  description: "Lee los posts de nuestro blog.",
}
const Blog = () => {

  return (
    <main className="main py-24 gap-10 overflow-hidden">
      <Posts />
    </main>
  );
};

export default Blog;
