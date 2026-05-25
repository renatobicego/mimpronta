import { Image } from "@nextui-org/react";
import React from "react";

const AboutMe = () => {
  return (
    <div className="relative flex max-md:flex-col justify-center 3xl:justify-start items-center lg:items-start gap-4 lg:gap-8 w-full">
      <Image
        src="/sobreMi/micaela-aseoramiento-innovacion-social.png"
        alt="Micaela ofreciendo asesoramiento en innovación social a una empresa"
        title="Micaela ofreciendo asesoramiento en innovación social a una empresa"
        aria-description="Micaela ofreciendo asesoramiento en innovación social a una empresa"
        width={800}
        removeWrapper
        className="z-10 relative max-sm:w-auto sm:max-w-[40%] 3xl:max-w-[20%] xl:max-w-[25%] max-sm:max-h-[40vh]"
        height={1200}
      />
      <Image
        src="/sobreMi/flecha.png"
        alt=""
        width={200}
        height={200}
        aria-hidden
        className="max-lg:hidden z-20 relative self-start mt-16 pb-20 max-w-[9vw]"
      />
      <div className="relative flex flex-col items-center md:items-start gap-4 lg:mt-10 3xl:max-w-[35vw] max-md:text-center">
        <p className="flex md:max-lg:flex-col md:max-lg:items-start gap-2 md:gap-4 xl:gap-6 h-16 sm:h-20 md:h-28 xl:h-24 font-smileCity text-rosaOscuro !text-3xl xsm:!text-4xl sm:!text-5xl xl:!text-6xl 3xl:text-7xl">
          <span>¡Hola!</span>{" "}
          <span className="self-end">Soy Micaela Gerbeno</span>
        </p>
        <h2 className="font-semibold 3xl:text-xl">
          Consultora y formadora en sostenibilidad
        </h2>
        <p>Soy consultora y formadora de Innovación Social y Sostenibilidad.</p>
        <p>
          Me especializo en el desarrollo de negocios sostenibles y con impacto
          social, acompañando a personas y organizaciones a conectar con su
          verdadero valor y potencial para visualizar su posible contribución a
          lo que el mundo necesita.
        </p>
        <p>
          El movimiento es mi inspiración, y mi propósito: la búsqueda de
          oportunidades para contribuir a un mundo mejor.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
