import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section className="mt-0 sm:mt-[10vh] w-[80dvw] lg:w-[75dvw] flex flex-col items-center gap-8 relative">
      <p className="phrase-size text-center leading-phrase font-semibold  lg:w-[75%] font-title mb-4 relative z-10">
        mi<span className="font-extrabold text-rosaOscuro">m</span>pronta
        simboli<span className="font-text">z</span>a la{" "}
        <span className="font-extrabold text-azul">huella única</span> que
        dejamos en nuestro entorno y en el mundo. Es la expresión de nuestra
        <span className="font-extrabold text-azul">
          {" "}
          contribución singular y significativa,
        </span>{" "}
        y la forma en que todo se une para influir y contribuir a la sociedad.
      </p>
      <Image
        src={"/papeles/papelMarron4.png"}
        alt="papel marron 2"
        quality={75}
        width={250}
        height={700}
        className="absolute -left-[53vw] md:-left-[38%] top-20 lg:hidden -scale-x-80 h-[45%] xsm:h-[70%] "
      />
      <p
        role="definition"
        className="paragraph-size leading-8 lg:leading-10 text-center font-semibold lg:w-[75%] list-none relative z-10"
      >
        Todos tenemos el{" "}
        <span className="font-extrabold text-azul">
          potencial de generar un impacto,
        </span>{" "}
        aunque no todos podemos resolver todos los desafíos que el mundo
        enfrenta. mi<span className="font-extrabold text-rosaOscuro">m</span>
        pronta es ese{" "}
        <span className="font-extrabold text-azul">
          espacio individual y colectivo{" "}
        </span>{" "}
        donde las habilidades se unen con lo que la sociedad, el medio ambiente
        y el futuro necesitan. Donde las ideas convergen en{" "}
        <span className="font-extrabold text-azul">
          {" "}
          proyectos con impacto,
        </span>{" "}
        con herramientas y recursos que permiten potenciar las fortalezas
        individuales y alinearlas con los retos y oportunidades actuales.
        Contribuyendo así a un{" "}
        <span className="font-extrabold text-azul">
          futuro más justo y sostenible
        </span>{" "}
        para todos.
      </p>
      <Link href={"/sobremi"}>
        <button role="button" className="btn-primary mt-4 ">
          Descubre quien soy
        </button>
      </Link>
    </section>
  );
};

export default AboutUs;
