import React from "react";
import ServiceCard from "../components/Home/Services/ServiceCard";
import Image from "next/image";
const services = [
  {
    title: "Diagnóstico de sostenibilidad y análisis ESG",
    description: [
      `Análisis de la situación actual de la empresa a través de criterios
          ambientales, sociales y de gobernanza (ESG). Este diagnóstico permite
          identificar riesgos, oportunidades y áreas de mejora frente a
          estándares y normativas y las expectativas del mercado, facilitando
          una toma de decisiones más clara y ordenada.`,
    ],
    marginTop: "5",
  },
  {
    title: "Estrategias de sostenibilidad corporativa",
    description: [
      `Definición de estrategias de sostenibilidad alineadas con los
          objetivos de negocio, integrando estos criterios en la visión y el
          propósito, la cultura corporativa y los procesos clave de la empresa
          de forma coherente y realista.`,
    ],
    marginTop: "16",
  },
  {
    title: "Planes de acción y hoja de ruta sostenible",
    description: [
      `Desarrollo de planes de acción concretos que transforman la estrategia
          en pasos claros con plazos e indicadores que permiten una
          implementación adaptada a cada contexto individual.`,
    ],
    marginTop: "7",
  },
];

const Services = () => {
  return (
    <section className="relative flex flex-col items-start gap-4 bg-azul -mt-0.5 px-[5%] md:px-[8.335%] pt-20 3xl:pt-8 pb-20 xsm:pb-24 w-full text-white">
      <h2 className="subtitle-size-2 text-white text-left">
        Servicios de consultoría en sostenibilidad empresarial
      </h2>
      <p className="lg:w-2/3 text-left">
        Servicios de consultoría en sostenibilidad adaptados a la realidad y al
        momento de cada organización, con un acompañamiento que abarca desde el
        diagnóstico inicial hasta la implementación y el seguimiento de las
        acciones.
      </p>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min mx-auto w-full">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            title={service.title}
            description={service.description}
            colSpan={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
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
        className="top-[94%] md:top-[90%] lg:top-[70%] 2xl:top-[65%] 3xl:top-[60%] left-0 z-[11] absolute w-full scale-150 md:scale-100 translate-x-1/4 md:translate-x-0"
      />
    </section>
  );
};

export default Services;
