import axios from "axios";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Article from "./Article";
import { PostServer } from "../admin/[...formMode]/Form/formPostTypes";
import { slugify } from "@/app/lib/slug";

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
  const canonicalSlug = postData.slug || slugify(postData.title);

  return {
    title: `${postData.title} | Mimpronta`,
    description: metaDescription,
    keywords: keywords,
    alternates: {
      canonical: `/blog/${canonicalSlug}`,
    },
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

  // Redirección canónica: si se llega por una URL antigua (con tildes/espacios)
  // o cualquier variante que no sea el slug limpio, redirigimos de forma
  // permanente (308) al slug. Así evitamos contenido duplicado y preservamos
  // el SEO de los enlaces ya indexados.
  const canonicalSlug = post.slug || slugify(post.title);
  const requestedParam = decodeURIComponent(params.title);
  if (canonicalSlug && requestedParam !== canonicalSlug) {
    permanentRedirect(`/blog/${canonicalSlug}`);
  }

  return <Article post={post} />;
};

export default BlogPost;
