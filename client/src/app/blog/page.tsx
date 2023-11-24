"use client"
import Image from "next/image"
import BlogCard from "./components/BlogCard"
import { useState } from "react"
import Pagination from "./components/Pagination"
import './blog.css'
export type PostType = {
    id: string;
    title: string;
    subtitle: string,
    imgSrc: string
};
const Blog = () => {
    const [currentPosts, setCurrentPosts] = useState(Array<PostType>);

    return (
        <main className="main py-24 gap-10 overflow-hidden">
            <div className="w-full py-[6vh] bg-rosa space-section relative">
                <div>
                    <h3 className="title-size text-white mb-4">
                        <span className="font-text">N</span>uestro Blog
                    </h3>
                    <input placeholder="Buscar publicaciones" type="search" 
                        className="input pr-16 text-white border-white placeholder:text-white bg-magnifier-input
                                    bg-clip-padding  bg-no-repeat pl-16 bg-left-6" />
                </div>
                <Image
                    src={'/collages/megafono.png'}
                    alt="Megafono"
                    className="w-1/3 -scale-x-100 md:w-auto absolute right-0 top-0 -rotate-[23deg]"
                    width={250}
                    height={250} />
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 size-section gap-4 p-2">
                {currentPosts.map((post, i) => (
                    <BlogCard
                        key={i}
                        title={post.title}
                        subtitle={post.subtitle}
                        imgSrc={post.imgSrc} />
                ))}
            </section>
            <div className="self-start pl-[5%] lg:pl-[8.335%]">
                <Pagination postsPerPage={8} setCurrentPosts={setCurrentPosts}/>
            </div>
        </main>
    )
}

export default Blog