interface ImageBlog {
  _id?: string;
  src: string | File;
  epigraph: string;
}

interface Paragraph {
  subtitle: string;
  text: string;
  imgParagraph: ImageBlog | null;
}

interface Author {
  _id?: string;
  name?: string;
  picture?: string | File;
}

interface FormPostValues {
  _id?: string
  title: string;
  subtitle: string;
  password: string | undefined;
  date: Date;
  author: Author;
  imgPost: ImageBlog;
  category: string;
  body: Array<Paragraph>;
}

interface AuthorServer {
  _id: string;
  name: string;
  picture: string;
}

interface ImageBlogServer extends ImageBlog{
  src: string;
}

interface ParagraphServer extends Paragraph {
  imgParagraph: ImageBlogServer | null
}

interface CategoryServer {
  _id: string,
  name: string
}

interface PostServer {
  _id: string
  title: string;
  subtitle: string;
  date: Date;
  author: AuthorServer;
  imgPost: ImageBlogServer;
  category: CategoryServer;
  body: Array<ParagraphServer>;
}


export type {Author, FormPostValues, ImageBlog, Paragraph, PostServer, AuthorServer}
