import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex w-full h-full flex-col items-center relative -mt-[5vh]">
      <div className="min-h-[105vh] w-full max-lg:flex-col flex  lg:items-start items-center justify-center relative text-center gap-8 px-[5%] lg:px-[8.335%] pt-[20vh]">
        <Image
          src="/sobreMi/foco.png"
          alt="foco"
          className="absolute left-0 top-[15%] lg:top-1/3 max-w-[20%] lg:max-w-[12%] 2xl:max-w-fit"
          width={200}
          height={200}
        />
        <Image
          src="/sobreMi/mano.png"
          alt="mano"
          className="absolute right-0 top-[15%] lg:top-[10%] max-w-[20%] lg:max-w-[12%] 2xl:max-w-fit"
          width={200}
          height={200}
        />
        <Image
          src="/sobreMi/garabato1.png"
          alt="garabato"
          className="absolute right-0 bottom-[50%] md:bottom-[5%]  max-w-[10%] 2xl:max-w-fit"
          width={200}
          height={200}
        />
        <div className="relative flex items-center gap-4">
          <Image
            src="/sobreMi/imagenMica.png"
            alt="imagen micaela"
            width={800}
            className="h-[40vh] lg:h-[50vh] xl:h-[60vh] w-auto relative z-10 lg:mt-8"
            height={1200}
          />
          <Image
            src="/sobreMi/flecha.png"
            alt="flecha"
            width={200}
            height={200}
            className="pb-20 z-20 max-lg:hidden relative max-w-[9vw] self-start mt-16"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4 relative md:w-3/4 lg:w-1/2 lg:mt-10">
          <h1 className="font-smileCity text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl flex gap-2 md:gap-4 xl:gap-6 h-16 sm:h-20 xl:h-24 text-rosaOscuro">
            <span>¡Hola!</span>{" "}
            <span className="self-end">Soy Micaela Gerbeno</span>
          </h1>
          <p className=" lg:text-left text-sm md:text-base xl:text-lg 3xl:text-xl leading-6  md:leading-8 xl:leading-[30px] 3xl:leading-[40px]">
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
