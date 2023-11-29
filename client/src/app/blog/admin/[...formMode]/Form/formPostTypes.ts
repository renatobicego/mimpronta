interface ImageBlog {
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
  title: string;
  subtitle: string;
  password: string | undefined;
  date: Date;
  author: Author;
  imgPost: ImageBlog;
  category: string;
  body: Array<Paragraph>;
}

export type {Author, FormPostValues, ImageBlog, Paragraph}
