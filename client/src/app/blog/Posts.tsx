"use client";
import Image from "next/image";
import BlogCard from "./components/BlogCard";
import { useState } from "react";
import Pagination from "./components/Pagination";
import { PostServer } from "./admin/[...formMode]/Form/formPostTypes";
const Posts = () => {
  const [currentPosts, setCurrentPosts] = useState(Array<PostServer>);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="relative bg-rosa py-[6vh] w-full space-section">
        <div>
          <h1 className="mb-4 text-white title-size">Blog</h1>
          <input
            placeholder="Buscar publicaciones"
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-magnifier-input bg-clip-padding bg-no-repeat bg-left-6 pr-16 pl-16 border-white text-white placeholder:text-white input"
          />
        </div>
        <Image
          src={"/collages/megafono.png"}
          alt="Megafono"
          className="top-0 right-0 absolute w-1/3 md:w-auto lg:w-1/5 -rotate-[23deg] -scale-x-100"
          width={250}
          height={250}
        />
      </div>
      <section className="gap-4 grid grid-cols-1 md:grid-cols-2 p-2 size-section">
        {currentPosts.map((post) => (
          <BlogCard
            key={post._id}
            title={post.title}
            slug={post.slug}
            subtitle={post.subtitle}
            imgSrc={post.imgPost.src}
          />
        ))}
      </section>
      <div className="self-start pl-[5%] lg:pl-[8.335%]">
        <Pagination
          searchInput={searchInput}
          postsPerPage={6}
          setCurrentPosts={setCurrentPosts}
        />
      </div>
    </>
  );
};

export default Posts;
