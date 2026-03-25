import Image from "next/image";
import NextImage from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex xl:flex-row flex-col items-center xl:items-start gap-8 max-lg:px-[5%] md:pt-16 lg:pt-[7vh] 2xl:pt-[12vh] xl:pt-[9vh] xl:pr-[8.335%] xl:pl-0 w-full h-full min-h-screen lg:min-h-[110vh]">
      <div className="z-10 relative flex flex-col gap-3 order-1 2xl:mt-16 md:w-3/4 xl:w-1/2 xl:text-left text-center">
        <h1 className="font-semibold">
          Consultoría de <span className="text-rosaOscuro">sostenibilidad</span>{" "}
          para empresas en Madrid
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

      <div className="z-10 relative flex justify-center max-xl:order-2 xl:order-0 w-full xl:w-2/3">
        <NextImage
          src="/collages/consultoria_sostenibilidad_empresas_madrid.png"
          alt="Datos que analiza una consultoría ESG para empresas en madrid"
          title="Datos que analiza una consultoría ESG para empresas en madrid"
          aria-description="Datos que analiza una consultoría ESG para empresas en madrid"
          priority
          quality={30}
          width={700}
          height={446}
          className="w-full max-w-screen md:max-w-[600px] lg:max-w-[800px] xl:max-w-full h-auto"
        />
      </div>
      <Image
        src={"/papeles/papelAzulRoto.png"}
        alt="Papel roto azul"
        quality={30}
        width={2000}
        height={500}
        className="-bottom-12 left-0 z-10 absolute w-full h-auto"
      />
    </section>
  );
};

export default HeroSection;
