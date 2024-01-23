import Image from "next/image";
import React from "react";

const PhraseCollage = () => {
  return (
    <div className="relative w-full h-screen lg:h-auto lg:min-h-screen flex flex-col items-center">
      <Image
        src={"/papeles/papelMarron1.png"}
        alt="papel marron 1"
        quality={75}
        width={250}
        height={700}
        className="absolute -left-2 top-[10%] lg:left-0 
                        rotate-180 -scale-x-100 h-[35%] xsm:h-[40%] w-auto lg:h-auto"
      />
      <h1
        role="heading"
        id="phraseCollageMundo"
        className="phrase-size leading-phrase text-center font-semibold 
            size-section sm:w-[80%] lg:w-[65%] 2xl:w-[60%] relative z-10
            mt-48 md:mt-[30vh] lg:mt-[22vh] lg:mb-4 3xl:mt-56"
      >
        El mundo atraviesa momentos desafiantes, y con tu
        <span className="font-extrabold"> impronta </span> puedes transformarte
        en{" "}
        <span className="font-extrabold text-rosaOscuro">
          {" "}
          agente de cambio
        </span>
      </h1>
      <Image
        id="collageMundo"
        role="img"
        quality={30}
        src={"/collages/mundo.png"}
        alt="Collage mundo"
        priority
        width={1655}
        height={1055}
        className="scale-[1.35] top-[55vh] md:mt-[15vh] lg:mt-6 w-auto overflow-auto md:scale-[1.15] lg:scale-100 lg:w-[65%]
                        absolute md:top-0 md:relative z-40"
      />
    </div>
  );
};

export default PhraseCollage;
