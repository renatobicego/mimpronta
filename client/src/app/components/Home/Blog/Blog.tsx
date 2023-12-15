"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./pagination.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { usePosts } from "@/app/postsContext";

const Blog = () => {
  const { dataPosts } = usePosts();
  useEffect(() => {}, [dataPosts.posts]);
  return (
    <section className="w-full xsm:mt-16 s:mt-[25vw] sm:mt-24 lg:mt-[8vh] flex bg-white pb-0 xsm:min-h-[65vh] lg:min-h-screen h-full">
      <div
        className="w-[15%] sm:w-1/3 pb-8 pt-14 xsm:pt-10 md:pt-20 lg:pb-0 bg-rosa 
                          sm:bg-gradient-to-r from-rosa via-rosa  via-60% to-60% to-white 
                          relative z-10 h-auto"
      >
        <Image
          src={"/collages/megafono.png"}
          height={1000}
          width={1000}
          className=" w-full scale-[2] rotate-[30deg] sm:rotate-0 sm:w-5/6 h-auto absolute top-20 xsm:top-[10vh] 
                          sm:top-0 sm:relative sm:scale-125 lg:scale-100 left-4 sm:left-0
                          sm:mt-[25vw] md:mt-[10vw] xl:mt-[15vw] 3xl:mt-[17vw]"
          alt="Megafono collage"
        />
      </div>
      <div
        className="flex flex-col gap-4 md:gap-8 xl:gap-10 xsm:self-end sm:self-stretch sm:items-start justify-center w-2/3
                          mt-36 mb-20 xsm:mt-36 s:mt-[35vw] sm:mt-44  md:mt-[18vw] 2xl:mt-[23vw] ml-6 sm:ml-0"
      >
        {dataPosts.posts.length > 0 && (
          <>
            <h5 className="title-size">
              <span className="font-text">N</span>uestro blog
            </h5>
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoHeight
              spaceBetween={20}
              modules={[Pagination]}
              className="w-[110%] sm:w-full mySwiper !ml-0 !z-0 !overflow-hidden"
              slidesPerView={"auto"}
            >
              {dataPosts.posts.map((post) => (
                <SwiperSlide
                  key={post._id}
                  className="!w-full !h-full sm:!w-3/4 lg:!w-[45%]"
                >
                  <div
                    className="w-full flex flex-col items-start gap-2 sm:gap-4 p-4 md:p-6 
                                rounded-2xl shadow border hover:border-amarillo transition-all"
                  >
                    <h6 className="font-text text-base lg:text-xl 2xl:text-2xl text-left">
                      {post.title}
                    </h6>
                    <p className="line-clamp-3 text-sm lg:text-base 2xl:text-lg text-left">
                      {post.subtitle}
                    </p>
                    <Link href={"/blog/" + post.title} className="mt-4">
                      <button
                        className="border border-negro px-4 sm:px-5 lg:px-6 pb-0.5 font-medium 
                    rounded-[10px] text-sm lg:text-base 2xl:text-lg hover:border-amarillo transition-all"
                      >
                        Leer post
                      </button>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Link href={"/blog"}>
              <button
                className="font-semibold text-negro flex items-center hover:scale-105 transition-all
                              gap-2 py-3 px-2 rounded-3xl w-max text-sm md:text-base -mt-4"
              >
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
