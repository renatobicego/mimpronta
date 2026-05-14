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
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = params.title;

  try {
    const { data: postData }: { data: PostServer } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_API}/blog/title/${title}`,
    );

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
      robots: { index: true, follow: true },
    };
  } catch {
    return {
      title: "Blog | Mimpronta",
      description: "Artículo del blog de Mimpronta",
      robots: { index: true, follow: true },
    };
  }
}

const BlogPost = () => {
  return <Article />;
};

export default BlogPost;
