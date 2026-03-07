import { Image } from "@nextui-org/react";
import React from "react";

const AboutMe = () => {
  return (
    <div className=" w-full flex items-center justify-center relative gap-8 max-sm:flex-wrap">
      <Image
        src="/sobreMi/micaela-aseoramiento-innovacion-social.png"
        alt="Micaela ofreciendo asesoramiento en innovación social a una empresa"
        title="Micaela ofreciendo asesoramiento en innovación social a una empresa"
        aria-description="Micaela ofreciendo asesoramiento en innovación social a una empresa"
        width={800}
        removeWrapper
        className="relative sm:max-w-[30%] xl:max-w-[25%] z-10 max-sm:max-h-[40vh] max-sm:w-auto"
        height={1200}
      />
      <Image
        src="/sobreMi/flecha.png"
        alt="flecha"
        width={200}
        height={200}
        className="pb-20 z-20 max-lg:hidden relative max-w-[9vw] self-start mt-16"
      />
      <div className="flex flex-col items-start gap-4 relative ">
        <p className="subtitle-size-2">¡Hola! Soy Micaela Gerbeno</p>
        <h2 className="font-semibold">
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
