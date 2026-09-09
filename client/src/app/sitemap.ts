import { MetadataRoute } from "next";
import { slugify } from "./lib/slug";

const SITE_URL = "https://mimpronta.com";

type SitemapPost = {
  _id: string;
  title: string;
  slug?: string;
  date?: string;
};

// Revalida el sitemap cada hora para recoger artículos nuevos sin rebuild.
export const revalidate = 3600;

async function getPosts(): Promise<SitemapPost[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/blog`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.posts) ? data.posts : [];
  } catch {
    // Si el API no responde, devolvemos solo las rutas estáticas.
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/consultoria-sostenibilidad-empresas-madrid`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/asesoria-innovacion-social-organizaciones-madrid`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const posts = await getPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug || slugify(post.title)}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
