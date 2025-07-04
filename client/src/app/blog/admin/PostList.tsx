"use client";
import { usePosts } from "@/app/postsContext";
import PostCardAdmin from "./PostCardAdmin";

const PostList = () => {
  const { dataPosts, fetchPosts } = usePosts();

  return (
    <main className="size-section py-28 flex flex-col items-start gap-4 min-h-screen">
      <h4 className="phrase-size font-semibold">Post publicados</h4>
      <a href="/blog/admin/publicar">
        <button className="btn-primary text-xs md:text-sm py-1 px-3 md:py-1.5 md:px-4">
          Publicar post
        </button>
      </a>
      {dataPosts?.posts !== undefined && dataPosts?.posts.length > 0 ? (
        dataPosts.posts.map((post) => (
          <PostCardAdmin
            id={post._id}
            key={post._id}
            imgSrc={post.imgPost.src}
            title={post.title}
            fetchPosts={fetchPosts}
          />
        ))
      ) : (
        <p>No hay posts publicados</p>
      )}
    </main>
  );
};

export default PostList;
