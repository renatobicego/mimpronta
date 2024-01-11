
import axios from "axios";
import type { Metadata, ResolvingMetadata } from 'next'
import Article from "./Article";
 
type Props = {
  params: { title: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const title = params.title
 
  const { data: postData } = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_API}/blog/title/${title}`
  );
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: postData.title,
    openGraph: {
      images: [postData.imgPost.src, ...previousImages],
    },
  }
}

const BlogPost = () => {
  return <Article />
};

export default BlogPost;
