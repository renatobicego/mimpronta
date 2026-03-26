import Image from "next/image";
import React from "react";

const PhraseCollage = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-screen lg:h-auto lg:min-h-screen">
      <Image
        src={"/papeles/papelMarron1.png"}
        alt="papel marron 1"
        quality={75}
        width={250}
        height={700}
        className="top-[10%] -left-2 lg:left-0 absolute w-auto h-[35%] xsm:h-[40%] lg:h-auto rotate-180 -scale-x-100"
      />
      <h1
        role="heading"
        id="phraseCollageMundo"
        className="z-10 relative mt-48 md:mt-[30vh] lg:mt-[22vh] 3xl:mt-56 lg:mb-4 sm:w-[80%] lg:w-[65%] 2xl:w-[60%] size-section font-semibold text-center leading-phrase"
      >
        Donde los
        <span className="font-extrabold text-rosaOscuro"> talentos </span> se
        unen con las <br />
        <span className="font-extrabold text-rosaOscuro">
          necesidades del mundo
        </span>
      </h1>
      <Image
        id="collageMundo"
        role="img"
        quality={30}
        src={"/collages/consultoria_sostenibilidad_empresas_madrid.png"}
        alt="Datos que analiza una consultoría ESG para empresas en madrid"
        title="Datos que analiza una consultoría ESG para empresas en madrid"
        aria-description="Datos que analiza una consultoría ESG para empresas en madrid"
        priority
        width={1655}
        height={1055}
        className="top-[55vh] md:top-0 z-40 absolute md:relative md:mt-[15vh] lg:mt-6 w-auto lg:w-[65%] overflow-auto scale-[1.35] md:scale-[1.15] lg:scale-100"
      />
    </div>
  );
};

export default PhraseCollage;
