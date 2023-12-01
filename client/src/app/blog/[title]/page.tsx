"use client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import VolverBtn from "@/app/components/VolverBtn";
import { useParams } from "next/navigation";
import { PostServer } from "../admin/[...formMode]/Form/formPostTypes";
import axios from "axios";
import Loading from "@/app/loading";

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

const BlogPost = () => {
  const [post, setPost] = useState<PostServer | undefined>();
  const [recommendedPosts, setRecommendedPosts] = useState<
    Array<PostServer> | undefined
  >();
  const { title } = useParams();
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const { data: postData } = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}/blog/title/${title}`
        );
        const { data: recommendedPostData } = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}/blog/recommended/${postData.category._id}`
        );
        setPost(postData);
        setRecommendedPosts(
          recommendedPostData.filter((p: PostServer) => p._id !== postData._id)
        );
      } catch (error) {
        throw new Error("Error al traer los datos del post: " + error);
      }
    };
    if (!post || !recommendedPosts) {
      fetchPostData();
    }
  }, [title]);

  if (!post || !recommendedPosts) {
    return <Loading />;
  }

  const date = new Date(post.date);
  return (
    <article
      className="size-section md:w-3/4 lg:w-3/5 3xl:w-1/2 py-[13vh] lg:pt-[17vh] xl:py-[20vh] font-text
                            flex flex-col items-start gap-5 lg:gap-6"
    >
      <VolverBtn />
      <h3 className="text-lg xsm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-bold text-negro">
        {post.title}
      </h3>
      <p className="py-2 px-4 rounded-3xl border border-gray-300 text-xs xsm:text-sm 3xl:text-base">
        {post.category.name}
      </p>
      <h4 className="subtitle-size my-2 font-medium">{post.subtitle}</h4>
      <div className="w-full">
        <Image
          src={post.imgPost.src}
          alt={"Imagen de post:" + post.title}
          className="w-full h-auto"
          width={800}
          height={800}
        />
        {post.imgPost.epigraph && (
          <p className="italic ml-1 mt-2 text-xs xsm:text-sm 3xl:text-base">
            {post.imgPost.epigraph}
          </p>
        )}
      </div>
      {post.body.map((paragraph, i) => (
        <Fragment key={i}>
          {paragraph.subtitle && (
            <h5 className="subtitle-size">{paragraph.subtitle}</h5>
          )}
          <p className="text-sm md:text-base xl:text-lg leading-7 md:leading-8 xl:leading-9">
            {paragraph.text}
          </p>
          {paragraph.imgParagraph && (
            <div>
              <Image
                src={paragraph.imgParagraph.src}
                alt={"Imagen párrafo de post:" + post.title}
                width={900}
                height={900}
              />
              {paragraph.imgParagraph.epigraph && (
                <p className="italic ml-1 mt-2 text-xs xsm:text-sm 3xl:text-base">
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
          className="rounded-full"
        />
        <h6 className="text-xs xsm:text-sm 3xl:text-base">
          {post.author.name} -{" "}
          {`${date.getDate()} ${
            months[date.getMonth()]
          }, ${date.getFullYear()}`}
        </h6>
      </div>
      {recommendedPosts.length > 0 && (
        <>
          <h4 className="subtitle-size mt-6 md:mt-8">Posts Recomendados</h4>
          <div className="flex flex-col w-full md:w-5/6 xl:w-3/4 gap-4">
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

export default BlogPost;
