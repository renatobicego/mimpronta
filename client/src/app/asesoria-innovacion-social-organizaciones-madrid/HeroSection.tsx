import Image from "next/image";
import NextImage from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex xl:flex-row flex-col items-center xl:items-start gap-8 max-lg:px-[5%] pt-[4svh] md:pt-16 lg:pt-[7vh] 2xl:pt-[12vh] xl:pt-[9vh] xl:pr-[8.335%] xl:pl-0 w-full h-full min-h-screen lg:min-h-[110vh]">
      <div className="z-10 relative flex flex-col gap-3 order-1 2xl:mt-16 md:w-3/4 xl:w-1/2 xl:text-left text-center">
        <h1 className="font-semibold">
          Asesoría de <span className="text-rosaOscuro">innovación social</span>{" "}
          para organizaciones en Madrid
        </h1>
        <p>
          La innovación social permite a las organizaciones generar impacto
          social real sin perder de vista sus objetivos estratégicos. Desde la
          asesoría de innovación social en Madrid, se trabaja para integrar la
          dimensión social en la estrategia, conectando propósito, actividad y
          entorno de forma coherente.
        </p>
        <p>
          Se aborda como un proceso estratégico y continuo, no como una acción
          aislada. El enfoque se basa en aplicar metodologías que ayudan a
          identificar retos sociales y convertirlos en soluciones sostenibles
          que aporten valor tanto a la organización como a la comunidad en la
          que opera.
        </p>
      </div>

      <div className="z-10 relative flex justify-center max-xl:order-2 xl:order-0 w-full xl:w-2/3">
        <NextImage
          src="/collages/consultoria_sostenibilidad_empresas_madrid.png"
          alt="Asesoría de innovación social para organizaciones en Madrid"
          title="Asesoría de innovación social para organizaciones en Madrid"
          aria-description="Asesoría de innovación social para organizaciones en Madrid"
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
