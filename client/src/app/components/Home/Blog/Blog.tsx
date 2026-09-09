"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./pagination.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { usePosts } from "@/app/postsContext";
import { Loader } from "@/app/loading";
import { slugify } from "@/app/lib/slug";

const Blog = () => {
  const { dataPosts, loading } = usePosts();
  useEffect(() => {}, [dataPosts.posts]);
  return (
    <section className="relative flex bg-white s:mt-[25vw] xsm:mt-16 sm:mt-24 lg:mt-[8vh] pb-0 w-full h-full xsm:min-h-[65vh] lg:min-h-screen">
      <div className="z-10 relative bg-rosa sm:bg-gradient-to-r from-rosa via-60% via-rosa to-60% to-white pt-14 xsm:pt-10 md:pt-20 pb-8 lg:pb-0 w-[15%] sm:w-1/3 h-auto">
        <Image
          src={"/collages/megafono.png"}
          height={1000}
          width={1000}
          className="top-20 xsm:top-[10vh] sm:top-0 left-4 sm:left-0 absolute sm:relative sm:mt-[25vw] md:mt-[10vw] 3xl:mt-[17vw] xl:mt-[15vw] w-full sm:w-5/6 h-auto rotate-[30deg] sm:rotate-0 scale-[2] sm:scale-125 lg:scale-100"
          alt="Megafono collage"
        />
      </div>
      <div className="flex flex-col justify-center sm:items-start xsm:self-end sm:self-stretch gap-4 md:gap-8 xl:gap-10 mt-36 s:mt-[35vw] xsm:mt-36 sm:mt-44 md:mt-[18vw] 2xl:mt-[23vw] mb-20 ml-6 sm:ml-0 w-2/3">
        <h2 className="title-size">Blog</h2>
        {loading && (
          <p className="paragraph-size">
            <Loader />
          </p>
        )}
        {dataPosts.posts.length > 0 && (
          <>
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoHeight
              spaceBetween={20}
              mousewheel={{ forceToAxis: true }}
              modules={[Pagination, Mousewheel]}
              className="!z-0 !ml-0 w-[110%] sm:w-full !overflow-hidden mySwiper"
              slidesPerView={"auto"}
            >
              {dataPosts.posts.map((post) => (
                <SwiperSlide
                  key={post._id}
                  className="!w-full sm:!w-3/4 lg:!w-[45%] !h-full"
                >
                  <div className="flex flex-col items-start gap-2 sm:gap-4 shadow p-4 md:p-6 border hover:border-amarillo rounded-2xl w-full h-full transition-all">
                    <h3 className="font-text text-base lg:text-xl 2xl:text-2xl text-left">
                      {post.title}
                    </h3>
                    <p className="text-sm lg:text-base 2xl:text-lg text-left line-clamp-3">
                      {post.subtitle}
                    </p>
                    <Link
                      href={"/blog/" + (post.slug || slugify(post.title))}
                      className="mt-auto"
                    >
                      <button className="px-4 sm:px-5 lg:px-6 pb-0.5 border border-negro hover:border-amarillo rounded-[10px] font-medium text-sm lg:text-base 2xl:text-lg transition-all">
                        Leer post
                      </button>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Link href={"/blog"} className="-mt-10">
              <button className="flex items-center gap-2 px-2 py-3 rounded-3xl w-max font-semibold text-negro text-sm md:text-base hover:scale-105 transition-all">
                Ver más posts
                <Image
                  src="/icons/chevronB.png"
                  className="mt-0.5 lg:mt-1"
                  width={17}
                  height={17}
                  alt="Icono flecha"
                />
              </button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
