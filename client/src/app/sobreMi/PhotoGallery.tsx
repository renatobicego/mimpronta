import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoGallery = () => {
  return (
    <section className="w-full flex flex-col items-start relative z-20 md:max-lg:pt-10 ">
      <div className="lg:absolute lg:left-[8.5%] lg:top-[8%] xl:top-[10%] lg:max-w-[40%] max-lg:px-[5%]">
        <h3 className="text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl font-smileCity text-rosaOscuro">
          Trabajo en red
        </h3>
        <p className=" lg:text-left text-sm md:text-base xl:text-lg 3xl:text-xl leading-6  md:leading-8 xl:leading-[30px] 3xl:leading-[40px]">
          En esta búsqueda no estoy sola. El{" "}
          <strong>trabajo colaborativo</strong> y los resultados se potencian si
          unimos talentos diversos hacia un propósito común.
        </p>
      </div>
      <Image
        src="/sobreMi/galeriaFotos.png"
        alt="galeria fotos"
        className="max-lg:hidden w-full"
        loading="lazy"
        width={1000}
        height={800}
      />
      <div className="w-full flex relative max-lg:flex-wrap max-md:flex-col items-start max-lg:px-[5%] lg:absolute lg:left-[30%] lg:bottom-[28%] lg:max-w-[40%]">
        <Image
          src="/sobreMi/collageFotos1.png"
          alt="collage de fotos"
          className="lg:hidden md:w-1/2 py-8 "
          loading="lazy"
          width={1000}
          height={800}
        />
        <Image
          src="/sobreMi/collageFotos2.png"
          alt="collage de fotos"
          className="lg:hidden md:w-1/2 pt-8"
          loading="lazy"
          width={1000}
          height={800}
        />
        <Image
          src="/sobreMi/collageFotos3.png"
          alt="collage de fotos"
          className="md:hidden md:w-2/3 ml-auto py-8"
          loading="lazy"
          width={1000}
          height={800}
        />
        <Image
          src="/sobreMi/collageFotos4.png"
          alt="collage de fotos"
          className="max-md:hidden lg:hidden mx-auto -mt-8"
          loading="lazy"
          width={1000}
          height={800}
        />
        <div className="lg:absolute  flex flex-col items-start gap-2 ">
          <h4 className="subtitle-size font-normal font-text ">
            Formo parte de
          </h4>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Link
                href={
                  "https://www.madridemprende.es/conoce-a-nuestra-red-de-mentores//"
                }
                target="_blank"
              >
                <Image
                  src="/sobreMi/madrid-emprende-logo.png"
                  alt="madrid emprende logo"
                  loading="lazy"
                  width={120}
                  height={120}
                />
              </Link>
              <hr className="bg-black w-full h-0.5 mb-2" />
              <Link
                href={
                  "https://www.madridemprende.es/conoce-a-nuestra-red-de-mentores//"
                }
                target="_blank"
              >
                <Image
                  src="/sobreMi/logo-madrid.png"
                  alt="logo madrid"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <Link
              href={"https://oicteam.com/index.php/en/home/"}
              target="_blank"
            >
              <Image
                src="/sobreMi/open-innovation-logo.png"
                alt="open innovation logo"
                loading="lazy"
                width={140}
                height={140}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
