import React from "react";
import ServiceCard from "../components/Home/Services/ServiceCard";
import Image from "next/image";

const services = [
  {
    title: "Diagnóstico de impacto social y análisis de contexto",
    description: [
      `Análisis de la situación de partida de la organización, su entorno
      social y sus principales grupos de interés para detectar desafíos y
      oportunidades. Este diagnóstico permite orientar la innovación hacia
      ámbitos donde pueda generarse un impacto social concreto y sostenible.`,
    ],
    marginTop: "0",
  },
  {
    title: "Diseño de estrategias de innovación social",
    description: [
      `Desarrollo de estrategias adaptadas a la realidad de cada
      organización, alineadas con su propósito, incorporando metodologías de
      innovación social que facilitan la creación de soluciones con impacto
      positivo a medio y largo plazo.`,
    ],
    marginTop: "0",
  },
  {
    title: "Desarrollo de proyectos de impacto social",
    description: [
      `Acompañamiento en el diseño y puesta en marcha de proyectos de
      innovación social viables y coherentes con la estrategia de la
      organización, buscando soluciones sostenibles a retos sociales y
      asegurando que puedan generar resultados medibles y duraderos.`,
    ],
    marginTop: "0",
  },
  {
    title: "Formación en innovación social para organizaciones",
    description: [
      `Programas y sesiones de formación en innovación social dirigidos a
      equipos y responsables de organizaciones que buscan integrar el impacto
      social en su actividad. A través de metodologías prácticas y casos reales,
      se facilitan herramientas para identificar retos sociales, diseñar
      soluciones sostenibles y fomentar una cultura de innovación con impacto
      positivo dentro de la organización.`,
    ],
    marginTop: "0",
  },
];

const Services = () => {
  return (
    <section className="relative flex flex-col items-start gap-4 bg-azul -mt-0.5 px-[5%] md:px-[8.335%] pt-20 pb-20 xsm:pb-24 w-full text-white">
      <h2 className="subtitle-size-2 text-white text-left">
        Servicios de asesoría en innovación social para organizaciones
      </h2>
      <p className="lg:w-2/3 text-left">
        Acompañamiento en todas las fases del proceso, desde el análisis inicial
        hasta la evaluación del impacto, poniendo el foco en la búsqueda de
        soluciones sostenibles a problemas sociales reales y en su integración
        dentro de la organización.
      </p>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 auto-rows-min mx-auto w-full">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            title={service.title}
            description={service.description}
            colSpan={"col-span-1"}
            marginTop={service.marginTop}
            titleClassName="paragraph-size font-semibold text-white"
            showDescriptionAsP
          />
        ))}
      </div>
      <Image
        src={"/collages/arboles.webp"}
        width={3936}
        quality={30}
        height={1661}
        aria-hidden
        alt=""
        className="top-[96%] md:top-[90%] lg:top-[80%] 2xl:top-[75%] left-0 z-[11] absolute w-full scale-150 md:scale-100 translate-x-1/4 md:translate-x-0"
      />
    </section>
  );
};

export default Services;
