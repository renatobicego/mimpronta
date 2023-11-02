"use client"
import Image from 'next/image'
import React from 'react'
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import './pagination.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import PostCard from './PostCard';
import Link from 'next/link';

const posts = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat earum eum consectetur 
        quae ipsam culpa quis, architecto, vitae recusandae, ex maiores molestiae dolor. 
        Inventore nemo doloremque laudant`
    },
    {
        title: 'Título ipsum dolor sit amet',
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat earum eum consectetur 
        quae ipsam culpa quis.`
    },
    {
        title: 'Doloremque placeat earum eum consectetur quae ipsam culpa quis, architecto',
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat earum eum consectetur 
        quae ipsam culpa quis, architecto, vitae recusandae, ex maiores molestiae dolor.`
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur',
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat earum eum consectetur 
        quae ipsam culpa quis, architecto, vitae recusandae, ex maiores molestiae dolor. 
        Inventore nemo doloremque laudant`
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur',
        subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat earum eum consectetur 
        quae ipsam culpa quis, architecto, vitae recusandae, ex maiores molestiae dolor. 
        Inventore nemo doloremque laudant`
    },
]

const Blog = () => {
  return (
    <section className='w-full flex flex-col sm:flex-row bg-white pb-20 sm:pb-0'>
        <div className='w-full sm:w-1/3 3xl:w-1/3 pb-8 pt-10 lg:pb-0 bg-rosa 
                        sm:bg-gradient-to-r from-rosa via-rosa  via-60% to-60% to-white 
                        relative z-10 h-32 xsm:h-52 sm:h-auto'>
            <Image
                src={'/collages/megafono.png'}
                height={1000}
                width={1000}
                className='absolute sm:relative top-12 xsm:top-24 right-0 sm:top-0 sm:right-0 
                            w-1/2 sm:w-5/6 h-auto -scale-x-100 sm:scale-x-100
                            sm:mt-[25vw] md:mt-[20vw] lg:mt-[10vw] 2xl:mt-[15vw] 3xl:mt-[17vw]'
                alt='Megafono collage' />
        </div>
        <div className="flex flex-col gap-6 sm:gap-4 md:gap-8 items-start justify-center w-[90%] mx-auto flex-1 
                        mt-10 sm:mt-44 md:mt-32 lg:mt-16 2xl:mt-44">
            <h5 className='title-size'><span className='font-text'>N</span>uestro blog</h5>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoHeight
                spaceBetween={30}
                modules={[Pagination]}
                className='w-full mySwiper !ml-0'
                slidesPerView={'auto'}>
                {posts.map((post, i) => (
                    <SwiperSlide key={i} className='!flex !w-5/6 !h-full sm:!w-3/4 lg:!w-[45%] flex-col items-start !justify-around'>
                        <div className='flex flex-col gap-4 justify-between'>
                            <h6 className='font-text text-lg lg:text-xl 2xl:text-2xl'>{post.title}</h6>
                            <p className='line-clamp-3 text-base 2xl:text-lg'>
                                {post.subtitle}
                            </p>
                        </div>
                        <Link href={''}>
                            <button className='border-2 border-negro px-6 pb-0.5 font-medium rounded-[10px] text-lg'>
                                Leer post
                            </button>
                        </Link>
                    </SwiperSlide>
                    // <SwiperSlide key={i} className='!w-5/6 !h-full sm:!w-3/4 lg:!w-[45%] flex-col'>
                    //     <h6 className='font-text text-lg lg:text-xl 2xl:text-2xl mb-4'>{post.title}</h6>
                    //     <p className='line-clamp-3 text-base 2xl:text-lg mb-4'>
                    //         {post.subtitle}
                    //     </p>
                    //     <Link href={''}>
                    //         <button className='border-2 border-negro px-6 pb-0.5 font-medium rounded-[10px] text-lg'>
                    //             Leer post
                    //         </button>
                    //     </Link>
                    // </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Blog