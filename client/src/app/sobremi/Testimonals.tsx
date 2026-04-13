import Image from "next/image";
import React from "react";
import TestimonialsCards from "./TestimonialsCards";

const Testimonals = () => {
  return (
    <section className="w-full flex flex-col items-center relative gap-6 pb-40 px-[5%] lg:px-[8.335%] lg:-mt-[10vh] max-lg:pt-14">
      <h2 className="text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl font-smileCity text-azul">
        Testimonios
      </h2>
      <TestimonialsCards />
      <Image
        src="/sobreMi/regadera.png"
        loading="lazy"
        alt="regadera"
        className="max-md:hidden absolute left-0 bottom-0"
        width={400}
        height={400}
      />
      <Image
        src="/sobreMi/solPasto.png"
        loading="lazy"
        alt="regadera"
        className="absolute right-0 bottom-0"
        width={400}
        height={400}
      />
    </section>
  );
};

export default Testimonals;
