import Image from "next/image";

const Values = () => {
  const values = [
    {
      text: "Una forma más armoniosa de habitar el planeta",
      image: "world.svg",
      imageSize: 60,
      textWidth: "w-full sm:w-[49.5%] lg:w-[32.7%]",
      gap: "gap-6 md:gap-8 ",
    },
    {
      text: "Más colaboración, menos competencia",
      image: "people.svg",
      imageSize: 60,
      textWidth: "w-full sm:w-[49.5%] lg:w-[32.7%]",
      gap: "gap-6 md:gap-8",
    },
    {
      text: "Si el bien no es común, entonces no es bien",
      image: "handHeart.svg",
      imageSize: 60,
      textWidth: "w-full sm:w-[49.5%] lg:w-[32.7%]",
      gap: "gap-6 md:gap-8",
    },
    {
      text: "Ecosistemas organizacionales que generan impacto social positivo",
      image: "plant.svg",
      imageSize: 60,
      textWidth: " w-full sm:w-[49.5%] lg:w-[59%]",
      gap: "gap-6 md:gap-8",
    },
    {
      text: "Valor económico y valor social pueden combinarse",
      image: "hands.svg",
      imageSize: 84,
      textWidth: "w-full mx-auto sm:w-[49.5%] lg:w-[39%]",
      gap: "gap-6 md:gap-8 ",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center relative z-20 pb-20 max-lg:mt-10">
      <h2 className="text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl font-smileCity text-azul">
        Creo en
      </h2>
      <Image
        src="/sobreMi/megafono.png"
        alt="megafono"
        className="absolute left-0 top-0 md:-top-16 lg:top-0  max-w-[25%] md:max-w-[20%] lg:max-w-[15%] 2xl:max-w-fit"
        width={200}
        loading="lazy"
        height={200}
      />

      <ul className="w-4/5 sm:w-[84%] xl:w-[65%] mt-8 flex justify-between flex-wrap relative z-10">
        {values.map((value, i) => (
          <li
            key={i}
            className={`flex flex-col relative items-center py-8 px-6 lg:px-10 text-white bg-azul 
                                                 rounded-[20px] paragraph-size ${value.textWidth} mb-2 ${value.gap} 
                                                lg:justify-start hover:scale-[1.02] transition text-center`}
            style={{}}
          >
            {i === 4 && (
              <Image
                src="/sobreMi/garabato2.png"
                loading="lazy"
                alt="garabato"
                className="absolute -right-10 -bottom-12 sm:-right-28 sm:-bottom-24 w-[15vw] lg:w-[10vw] xl:-right-36 xl:-bottom-28 xl:w-auto"
                width={150}
                height={150}
              />
            )}
            <Image
              src={"/icons/" + value.image}
              loading="lazy"
              className={``}
              width={value.imageSize}
              height={value.imageSize}
              alt="Icono mundo"
            />
            {value.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Values;
