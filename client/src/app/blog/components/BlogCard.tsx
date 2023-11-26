import Image from "next/image"
import Link from "next/link"

const BlogCard = ({
    title,
    subtitle,
    imgSrc,
    recommended = false
}: {
    title: string,
    subtitle?: string,
    imgSrc: string,
    recommended?: boolean
}) => {

    if(recommended){
        return (
            <div className="w-full flex rounded-2xl border-2 border-gray-300">
                <Image 
                    src={'/blog/' + imgSrc}
                    width={300}
                    height={300}
                    alt={"Foto post recomendado con título: "}
                    className="w-2/5 sm:w-[35%] xl:w-2/5 rounded-l-2xl max-h-[250px] object-cover"
                />
                <div className="flex flex-col items-start gap-1 md:gap-3 px-4 py-3 md:py-6 self-center">
                    <h5 className="text-xs xsm:text-sm md:text-base lg:text-lg 2xl:text-xl  mb-2 font-medium">
                        {title}
                    </h5>
                    <Link href={'/blog/' + title}>
                        <button className="btn-secondary md:text-sm 3xl:text-base">
                            Leer Post
                        </button>
                    </Link>
                </div> 
            </div>
        )
    }
    return (
        <div className="blog-post-card flex flex-col items-start justify-end 
                        font-text relative rounded-2xl text-white 
                        px-4 md:px-6 lg:px-8 pt-[20%] pb-8 lg:pb-10 hover:[&>button]:border-amarillo">
            <div className="w-full h-full bg-gradient-to-t from-negro absolute bottom-0 left-0 z-[1] rounded-2xl"></div>
            <div className="post-line-hover absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[95%] z-10 h-[90%]"></div>
            <Image 
                src={'/blog/' + imgSrc}
                alt="Imagen post de blog"
                className=" rounded-2xl"
                fill
                objectFit="cover"
            />
            <Link href={'/blog/' + title} className="relative z-10">
                <h5 className="text-lg md:text-xl lg:text-2xl mb-2 font-medium">
                    {title}
                </h5>
                <p className="hidden lg:line-clamp-2 mb-4">
                    {subtitle}
                </p>
                <button className="btn-secondary text-base border-white">
                    Leer Post
                </button>
            </Link>
        </div>
    )
}

export default BlogCard