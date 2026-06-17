import axios from "axios";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Article from "./Article";
import { PostServer } from "../admin/[...formMode]/Form/formPostTypes";

type Props = {
  params: { title: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getPost(title: string): Promise<PostServer | null> {
  try {
    const { data } = await axios.get<PostServer>(
      `${process.env.NEXT_PUBLIC_URL_API}/blog/title/${title}`,
    );
    return data;
  } catch (error) {
    // Si el post no existe (404) devolvemos null para responder con un 404 real.
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    // Re-lanzamos otros errores (p. ej. 500) para no convertir caídas del
    // servidor en un 404 permanente.
    throw error;
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = params.title;
  const postData = await getPost(title);

  if (!postData) {
    return {
      title: "Página no encontrada | Mimpronta",
      description: "El artículo que buscas no existe o ha sido eliminado.",
      robots: { index: false, follow: false },
    };
  }

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
}

const BlogPost = async ({ params }: Props) => {
  const post = await getPost(params.title);

  if (!post) {
    // Devuelve un 404 real y renderiza la página not-found.
    notFound();
  }

  return <Article post={post} />;
};

export default BlogPost;
