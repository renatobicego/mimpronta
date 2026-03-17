import NextImage from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex xl:flex-row flex-col items-center gap-8 pb-20 w-full h-full overflow-hidden space-section">
      <NextImage
        src="/papeles/papelMarron1.png"
        alt=""
        aria-hidden="true"
        quality={75}
        width={180}
        height={500}
        className="top-[5%] -left-4 lg:left-0 absolute w-auto h-[30%] lg:h-auto rotate-180 -scale-x-100 pointer-events-none"
      />

      <div className="z-10 relative flex flex-col gap-3 order-1 md:w-3/4 xl:w-1/2 text-center max-xl:">
        <h1 className="font-semibold">
          Consultoría de sostenibilidad para empresas en Madrid
        </h1>
        <p>
          La sostenibilidad se ha convertido en un pilar estratégico para las
          empresas que operan en entornos cada vez más competitivos y regulados.
        </p>
        <p>
          Contar con el apoyo de una consultoría en sostenibilidad ayuda a las
          organizaciones a integrar criterios ambientales, sociales y de
          gobernanza (ESG) de forma clara, ordenada y alineada con la normativa
          vigente, teniendo en cuenta la realidad del tejido empresarial local.
        </p>
        <p>
          Mi enfoque combina visión estratégica, análisis de impacto y
          metodologías de innovación social para acompañar a las empresas en el
          camino hacia una sostenibilidad real, transformándola en una ventaja
          competitiva tangible y medible.
        </p>
      </div>

      <div className="z-10 relative flex justify-center max-xl:order-2 xl:order-0 w-full xl:w-1/2">
        <NextImage
          src="/collages/consultoria_sostenibilidad_empresas_madrid.png"
          alt="Datos que analiza una consultoría ESG para empresas en madrid"
          title="Datos que analiza una consultoría ESG para empresas en madrid"
          aria-description="Datos que analiza una consultoría ESG para empresas en madrid"
          priority
          quality={30}
          width={700}
          height={446}
          className="w-full max-w-[420px] md:max-w-[600px] xl:max-w-full h-auto"
        />
      </div>

      <NextImage
        src="/papeles/papelMarron2.png"
        alt=""
        aria-hidden="true"
        quality={75}
        width={180}
        height={500}
        className="top-[5%] -right-4 absolute w-auto h-[30%] lg:h-auto pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
