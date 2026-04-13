import axios from "axios";
import type { Metadata, ResolvingMetadata } from "next";
import Article from "./Article";
import { PostServer } from "../admin/[...formMode]/Form/formPostTypes";

type Props = {
  params: { title: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const title = params.title;

  const { data: postData }: { data: PostServer } = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_API}/blog/title/${title}`
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const metaDescription =
    postData.metaDescription || "Artículo del blog de Mimpronta";
  const keywords = postData.keywords?.[0].split(",");

  return {
    title: `${postData.title} | Mimpronta`,
    description: metaDescription,
    keywords: keywords,
    openGraph: {
      images: [postData.imgPost.src, ...previousImages],
    },
    authors: { name: postData.author.name },
  };
}

const BlogPost = () => {
  return <Article />;
};

export default BlogPost;
