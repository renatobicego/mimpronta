import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import BlogCard from "../components/BlogCard"

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diiciembre']

const post = {
    title: 'Título del Post ',
    subtitle: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Atque obcaecati excepturi quisquam quas vitae architecto. ',
    date: new Date(),
    author: 'Micaela Gerbeno',
    imgBlog: {
        src: '/blog/imagePost.png',
        epigraph: 'Epígrafe de la foto'
    },
    category: {
        name: 'Marketing'
    },
    body: [
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quibusdam quisquam numquam pariatur eligendi quia soluta sequi consequatur ut suscipit dicta ab, in ipsum cum eveniet, doloremque alias ea veritatis?',
            subtitle: 'Subtítulo',
        },
        {
            text: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
            imgParagraph: {
                src: '/blog/image2.png',
                epigraph: 'Epigrafe'
            }
        },
        {
            text: 'Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.',
            subtitle: 'Subtítulo 2',
        },
    ]

}

const mockedRecommendedPosts = [
    {
        title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
        subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
        imgSrc: 'image.png',
        id: 'dsf321'
    },
    {
        title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
        subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
        imgSrc: 'image2.png',
        id: 'dsf321'
    },
    {
        title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
        subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
        imgSrc: 'image3.png',
        id: 'dsf321'
    },
]

const BlogPost = () => {
    return (
        <article className="size-section md:w-3/4 lg:w-3/5 3xl:w-1/2 py-[13vh] lg:pt-[17vh] xl:py-[20vh] font-text
                            flex flex-col items-start gap-5 lg:gap-6">
            <h3 className="text-lg xsm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-bold text-negro">
                {post.title}
            </h3>
            <p className="py-2 px-4 rounded-3xl border border-gray-300 text-xs xsm:text-sm 3xl:text-base">
                {post.category.name}
            </p>
            <h4 className="subtitle-size my-2 font-medium">
                {post.subtitle}
            </h4>
            <div className="w-full">
                <Image 
                    src={post.imgBlog.src}
                    alt={"Imagen de post:" + post.title }
                    className="w-full h-auto"
                    width={800}
                    height={800}
                />
                {post.imgBlog.epigraph && 
                    <p className="italic ml-1 mt-2 text-xs xsm:text-sm 3xl:text-base">
                        {post.imgBlog.epigraph}
                    </p>
                }
            </div>
            {
                post.body.map((paragraph, i) => (
                    <Fragment key={i}>
                        {paragraph.subtitle && <h5 className="subtitle-size">{paragraph.subtitle}</h5>}
                        <p className="text-sm md:text-base xl:text-lg leading-7 md:leading-8 xl:leading-9">{paragraph.text}</p>
                        {paragraph.imgParagraph && 
                            <div>
                                <Image 
                                    src={paragraph.imgParagraph.src}
                                    alt={"Imagen párrafo de post:" + post.title }
                                    width={900}
                                    height={900}
                                />
                                {paragraph.imgParagraph.epigraph  && 
                                    <p className="italic ml-1 mt-2 text-xs xsm:text-sm 3xl:text-base">
                                        {paragraph.imgParagraph.epigraph}
                                    </p>
                                } 
                            </div>
                        }
                    </Fragment>
                ))
            }
            <div className="flex items-center gap-2 ml-1">
                <Image 
                    src={'/blog/pp.png'}
                    alt={"Foto de perfil autor/a: " + post.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <h6 className="text-xs xsm:text-sm 3xl:text-base">
                    {post.author} - {`${post.date.getDate()} ${months[post.date.getMonth()]}, ${post.date.getFullYear()}`}
                </h6>
            </div>
            <h4 className="subtitle-size mt-6 md:mt-8">
                Posts Recomendados
            </h4>
            <div className="flex flex-col w-full md:w-5/6 xl:w-3/4 gap-4">
                {
                    mockedRecommendedPosts.map((post, i) => (
                        <BlogCard 
                            key={i} 
                            recommended
                            title={post.title}
                            imgSrc={post.imgSrc}/>
                    ))
                }
            </div>
        </article>
    )
}

export default BlogPost