import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center -mt-[5vh] w-full h-full">
      <div className="relative flex max-lg:flex-col justify-center items-center lg:items-start gap-8 px-[5%] lg:px-[8.335%] pt-[20vh] w-full min-h-[105vh] text-center">
        <Image
          src="/sobreMi/foco.png"
          alt="foco"
          className="top-[15%] lg:top-1/3 left-0 absolute max-w-[20%] lg:max-w-[12%] 2xl:max-w-fit"
          width={200}
          height={200}
        />
        <Image
          src="/sobreMi/mano.png"
          alt="mano"
          className="top-[15%] lg:top-[10%] right-0 absolute max-w-[20%] lg:max-w-[12%] 2xl:max-w-fit"
          width={200}
          height={200}
        />
        <Image
          src="/sobreMi/garabato1.png"
          alt="garabato"
          className="right-0 bottom-[50%] md:bottom-[5%] absolute max-w-[10%] 2xl:max-w-fit"
          width={200}
          height={200}
        />
        <div className="relative flex items-center gap-4">
          <Image
            src="/sobreMi/micaela-aseoramiento-innovacion-social.png"
            alt="Micaela ofreciendo asesoramiento en innovación social a una empresa"
            title="Micaela ofreciendo asesoramiento en innovación social a una empresa"
            aria-description="Micaela ofreciendo asesoramiento en innovación social a una empresa"
            width={800}
            className="z-10 relative lg:mt-8 w-[50vw] md:w-[35vw] lg:w-[24.5vw] xl:w-[20.5vw] h-auto"
            height={1200}
          />
          <Image
            src="/sobreMi/flecha.png"
            alt="flecha"
            width={200}
            height={200}
            className="max-lg:hidden z-20 relative self-start mt-16 pb-20 max-w-[9vw]"
          />
        </div>
        <div className="relative flex flex-col items-center lg:items-start gap-4 lg:mt-10 md:w-3/4 lg:w-1/2">
          <h1 className="flex gap-2 md:gap-4 xl:gap-6 h-16 sm:h-20 xl:h-24 font-smileCity text-rosaOscuro text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl">
            <span>¡Hola!</span>{" "}
            <span className="self-end">Soy Micaela Gerbeno</span>
          </h1>
          <p className="text-sm md:text-base xl:text-lg 3xl:text-xl lg:text-left leading-6 md:leading-8 3xl:leading-[40px] xl:leading-[30px]">
            Soy consultora y formadora de{" "}
            <strong>Innovación Social y Sostenibilidad.</strong> <br />
            Me especializo en el{" "}
            <strong>
              desarrollo de negocios sostenibles y con impacto social
            </strong>
            , acompañando a personas y organizaciones a conectar con su{" "}
            verdadero valor y potencial para visualizar su posible contribución
            a lo que el mundo necesita. <br />
            Nací en San Juan, Argentina y a lo largo de los años, he vivido en
            varias ciudades como Mendoza, Wellington, Melbourne y actualmente en
            Madrid. <br /> El movimiento es mi inspiración, y mi propósito:{" "}
            <strong>
              la búsqueda de oportunidades para contribuir a un mundo mejor.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
