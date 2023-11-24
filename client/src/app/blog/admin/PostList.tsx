
import PostCardAdmin from "./PostCardAdmin";

const mockedPosts = [
  {
    title: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
    imgSrc: "image.png",
    id: "dsf321",
  },
  {
    title: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
    imgSrc: "image2.png",
    id: "dsf321",
  },
  {
    title: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
    imgSrc: "image3.png",
    id: "dsf321",
  },
];

const PostList = () => {

  return (
    <main className="size-section my-28 flex flex-col items-start gap-4">
      <h4 className="phrase-size font-semibold">Post publicados</h4>
      {mockedPosts.map((post, i) => (
        <PostCardAdmin key={i} imgSrc={post.imgSrc} title={post.title} />
      ))}
    </main>
  );
};

export default PostList;
