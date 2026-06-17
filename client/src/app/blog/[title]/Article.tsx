"use client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import VolverBtn from "@/app/components/VolverBtn";
import { PostServer } from "../admin/[...formMode]/Form/formPostTypes";
import Comments from "./Comments";
import axios from "axios";
import Swal from "sweetalert2";
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const Article = ({ post }: { post: PostServer }) => {
  const [recommendedPosts, setRecommendedPosts] = useState<Array<PostServer>>(
    [],
  );
  const [commentsOpen, setCommentsOpen] = useState(false);
  useEffect(() => {
    const fetchRecommendedPosts = async () => {
      try {
        const { data: recommendedPostData } = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}/blog/recommended/${post._id}`,
        );
        setRecommendedPosts(
          recommendedPostData.filter((p: PostServer) => p._id !== post._id),
        );
      } catch (error: any) {
        Swal.fire(
          "Error en el servidor al traer los posts recomendados: " +
            error.message,
        );
      }
    };
    fetchRecommendedPosts();
  }, [post._id]);

  const toggleCommentsSection = () => {
    setCommentsOpen(!commentsOpen);
  };
  const date = new Date(post.date);
  return (
    <article className="flex flex-col items-start gap-5 lg:gap-6 py-[13vh] xl:py-[20vh] lg:pt-[17vh] md:w-3/4 lg:w-3/5 3xl:w-1/2 size-section font-text">
      <VolverBtn />
      <h1 className="font-bold text-negro text-lg xsm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl">
        {post.title}
      </h1>
      {/* <p className="px-4 py-2 border border-gray-300 rounded-3xl text-xs xsm:text-sm 3xl:text-base">
        {post.category.name}
      </p> */}
      <h2 className="my-2 font-medium subtitle-size">{post.subtitle}</h2>
      {/* <div className="flex flex-col items-center w-full">
        <Image
          src={post.imgPost.src}
          alt={"Imagen de post:" + post.title}
          className="mx-auto w-full max-w-lg h-auto max-h-[550px] object-contain"
          width={800}
          height={800}
        />
        {post.imgPost.epigraph && (
          <p className="mt-2 ml-1 text-xs xsm:text-sm 3xl:text-base italic">
            {post.imgPost.epigraph}
          </p>
        )}
      </div> */}
      {post.body.map((paragraph, i) => (
        <Fragment key={i}>
          {paragraph.subtitle && (
            <h2 className="subtitle-size">{paragraph.subtitle}</h2>
          )}
          {paragraph.text && (
            <div
              className="[&>a]:text-amarillo text-sm md:text-base xl:text-lg leading-7 md:leading-8 xl:leading-9 [&>ol]:list-decimal [&>ol]:list-inside [&>ul]:list-disc [&>ul]:list-inside"
              dangerouslySetInnerHTML={{ __html: paragraph.text }}
            />
          )}
          {paragraph.imgParagraph && (
            <div className="flex flex-col items-center mx-auto w-fit">
              <Image
                src={paragraph.imgParagraph.src || "/placeholder.svg"}
                alt={"Imagen párrafo de post:" + post.title}
                width={900}
                className="w-auto h-full max-h-[550px] object-contain"
                height={900}
              />
              {paragraph.imgParagraph.epigraph && (
                <p className="mx-auto mt-2 ml-1 text-xs xsm:text-sm 3xl:text-base italic">
                  {paragraph.imgParagraph.epigraph}
                </p>
              )}
            </div>
          )}
        </Fragment>
      ))}
      <div className="flex items-center gap-2 ml-1">
        <Image
          src={post.author.picture}
          alt={"Foto de perfil autor/a: " + post.author.name}
          width={40}
          height={40}
          className="rounded-full w-10 h-auto object-cover object-top aspect-square"
        />
        <p className="text-default-500 text-xs xsm:text-sm 3xl:text-base">
          <span>{post.author.name}</span> ·{" "}
          <time dateTime={date.toISOString()}>
            {`${date.getDate()} ${
              months[date.getMonth()]
            }, ${date.getFullYear()}`}
          </time>
        </p>
      </div>
      {
        post.comments && <Comments postId={post._id} comments={post.comments} />
        // ) : (
        //   <button onClick={toggleCommentsSection} className="flex items-center gap-1">
        //     <Image
        //       alt="comments"
        //       src={'/icons/comment.png'}
        //       width={25}
        //       height={25}
        //     />
        //     {(post.comments && post.comments?.length > 0) && post.comments.length}
        //   </button>
        // )
      }
      {recommendedPosts.length > 0 && (
        <>
          <h3 className="mt-6 md:mt-8 subtitle-size">Posts Recomendados</h3>
          <div className="flex flex-col gap-4 w-full md:w-5/6 xl:w-3/4">
            {recommendedPosts.map((post) => (
              <BlogCard
                key={post._id}
                recommended
                title={post.title}
                imgSrc={post.imgPost.src}
              />
            ))}
          </div>
        </>
      )}
    </article>
  );
};

export default Article;
