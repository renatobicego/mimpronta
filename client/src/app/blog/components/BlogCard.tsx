import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/app/lib/slug";

const BlogCard = ({
  title,
  slug,
  subtitle,
  imgSrc,
  recommended = false,
}: {
  title: string;
  slug?: string;
  subtitle?: string;
  imgSrc: string;
  recommended?: boolean;
}) => {
  // Usamos el slug persistido; si por algún motivo faltara, lo derivamos del título.
  const href = "/blog/" + (slug || slugify(title));
  if (recommended) {
    return (
      <div className="flex shadow-sm border-2 border-gray-300 rounded-2xl w-full">
        <Image
          src={imgSrc}
          width={300}
          height={300}
          alt={"Foto post recomendado con título: "}
          className="rounded-l-2xl w-2/5 sm:w-[35%] xl:w-2/5 object-cover"
        />
        <div className="flex flex-col items-start self-center gap-1 md:gap-3 px-4 py-3 md:py-6">
          <h3 className="mb-2 font-medium text-xs xsm:text-sm md:text-base lg:text-lg 2xl:text-xl">
            {title}
          </h3>
          <Link href={href}>
            <button className="md:text-sm 3xl:text-base btn-secondary">
              Leer Post
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex flex-col justify-end items-start shadow-lg px-4 md:px-6 lg:px-8 pt-[20%] pb-8 lg:pb-10 hover:[&>button]:border-amarillo rounded-2xl font-text text-white blog-post-card">
      <div className="bottom-0 left-0 z-[1] absolute bg-gradient-to-t from-negro rounded-2xl w-full h-full"></div>
      <div className="top-1/2 left-1/2 z-10 absolute w-[95%] h-[90%] -translate-x-1/2 -translate-y-1/2 post-line-hover"></div>
      <Image
        src={imgSrc}
        alt="Imagen post de blog"
        className="rounded-2xl"
        fill
        objectFit="cover"
      />
      <Link href={href} className="z-10 relative">
        <h5 className="mb-2 font-medium text-lg md:text-xl lg:text-2xl">
          {title}
        </h5>
        <p className="hidden mb-4 lg:line-clamp-2">{subtitle}</p>
        <button className="border-white text-base btn-secondary">
          Leer Post
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
