import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function AboutMe() {
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

  const testimonials = [
    {
      title: "Qnarik Grigoryan Ghimoyan - Fundación Taller de Solidaridad",
      text: `"Trabajar con Mica es un gusto! Tiene una enorme capacidad de adaptarse a las necesidades de cada encuentro,
       consigue mantener el interés y la atención de las personas en todo momento y siempre lo hace muy participativo, 
       de manera que hay más implicación por parte de quienes asisten a las sesiones.
      Además, siempre está dispuesta a repensar y mejorar cualquier propuesta de manera creativa e innovadora.
      Espero que podamos seguir trabajando juntas mucho
      tiempo!"`,
    },
  ];
  return (
    <main className="main pt-0 overflow-hidden">
      <Image
        alt="fondo"
        priority={true}
        quality={10}
        fill
        className="object-cover opacity-50"
        src={"/papel.webp"}
      />
      {/* <Image
        alt="fondo"
        priority={true}
        quality={10}
        width={4500}
        height={3000}
        className="absolute left-0 top-[300vh] md:top-[200vh] lg:top-[330vh] w-full object-cover h-[320vh] md:h-[200vh] lg:h-[320vh] opacity-50"
        src={"/papel.webp"}
      /> */}
      <section className="flex w-full h-full flex-col items-center relative -mt-[5vh]">
        <div className="max-lg:min-h-screen lg:h-[85svh] w-full max-lg:flex-col flex  lg:items-start items-center justify-center relative text-center gap-8 px-[5%] lg:px-[8.335%] pt-[20vh] md:pt-[15vh]">
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
          <div className="relative flex items-start gap-4">
            <Image
              src="/sobreMi/imagenMica.png"
              alt="imagen micaela"
              width={800}
              className="h-[40vh] lg:h-[50vh] xl:h-[60vh] w-auto relative z-10"
              height={1200}
            />
            <Image
              src="/sobreMi/flecha.png"
              alt="flecha"
              width={200}
              height={200}
              className="lg:pb-20 absolute z-20 max-lg:right-[10%] -bottom-8 max-lg:rotate-[140deg] lg:relative max-w-[15vw] sm:max-w-[10vw] md:max-w-[9vw] lg:mt-10"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4 relative md:w-3/4 lg:w-1/2 lg:mt-10">
            <h1 className="font-smileCity text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl flex gap-2 md:gap-4 xl:gap-6 h-16 sm:h-20 xl:h-24 text-rosaOscuro">
              <span>¡Hola!</span>{" "}
              <span className="self-end">Soy Micaela Gerbeno</span>
            </h1>
            <p className="text-justify lg:text-left text-sm md:text-base xl:text-lg 3xl:text-xl leading-6  md:leading-8 xl:leading-[30px] 3xl:leading-[40px]">
              Soy consultora y formadora de{" "}
              <strong>Innovación Social y Sostenibilidad.</strong> <br />
              Me especializo en el{" "}
              <strong>
                desarrollo de negocios sostenibles y con impacto social,
              </strong>{" "}
              acompañando a personas y organizaciones a conectar con su{" "}
              <strong>verdadero valor y potencial</strong> para visualizar su
              posible contribución a lo que el <strong>mundo necesita.</strong>{" "}
              <br />
              Nací en San Juan, Argentina y a lo largo de los años, he vivido en
              varias ciudades como Mendoza, Wellington, Melbourne y actualmente
              en Madrid. <br />{" "}
              <strong>
                El movimiento es mi inspiración, y mi propósito:
              </strong>{" "}
              la búsqueda de{" "}
              <strong>oportunidades para contribuir a un mundo mejor.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center relative z-20 pb-20 max-lg:mt-10">
        <h2 className="text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl font-smileCity text-azul">
          Creo en
        </h2>
        <Image
          src="/sobreMi/megafono.png"
          alt="megafono"
          className="absolute left-0 top-0 md:-top-16 xl:top-1/3 max-w-[25%] md:max-w-[20%] lg:max-w-[15%] 2xl:max-w-fit"
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
              {i === 2 && (
                <Image
                  src="/sobreMi/garabato3.png"
                  alt="garabato"
                  className="absolute -right-12 -top-12 -z-10 max-lg:hidden"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              )}
              {i === 1 && (
                <Image
                  src="/sobreMi/garabato3.png"
                  loading="lazy"
                  alt="garabato"
                  className="absolute -right-12 -top-12 -z-10 max-sm:hidden lg:hidden"
                  width={100}
                  height={100}
                />
              )}
              {i === 0 && (
                <Image
                  src="/sobreMi/garabato3.png"
                  loading="lazy"
                  alt="garabato"
                  className="absolute -right-12 -top-12 -z-10 sm:hidden"
                  width={100}
                  height={100}
                />
              )}
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

      <section className="w-full flex flex-col items-start relative z-20 md:max-lg:pt-10 ">
        <div className="lg:absolute lg:left-[8.5%] lg:top-[8%] xl:top-[10%] lg:max-w-[40%] max-lg:px-[5%]">
          <h3 className="text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl font-smileCity text-rosaOscuro">
            Trabajo en red
          </h3>
          <p className="text-justify lg:text-left text-sm md:text-base xl:text-lg 3xl:text-xl leading-6  md:leading-8 xl:leading-[30px] 3xl:leading-[40px]">
            En esta búsqueda no estoy sola. El trabajo{" "}
            <strong>colaborativo</strong> y los resyltados se potencian si
            unimos talentos diversions hacia un propósito común.
          </p>
        </div>
        <Image
          src="/sobreMi/galeriaFotos.png"
          alt="galeria fotos"
          className="max-lg:hidden w-full"
          loading="lazy"
          width={1000}
          height={800}
        />
        <div className="w-full flex relative max-md:flex-col items-start max-lg:px-[5%] md:max-lg:-mb-20 lg:absolute lg:left-[30%] lg:bottom-[35%] lg:max-w-[40%]">
          <Image
            src="/sobreMi/collageFotos1.png"
            alt="collage de fotos"
            className="lg:hidden md:w-1/2 py-8 "
            loading="lazy"
            width={1000}
            height={800}
          />
          <div className="md:absolute md:max-lg:-bottom-20  flex flex-col items-start gap-2 max-md:px-[5%]">
            <h4 className="subtitle-size font-normal font-text ">
              Formo parte de
            </h4>
            <Image
              src="/sobreMi/formoParte.png"
              alt="empresas y organizaciones de las que formo parte"
              loading="lazy"
              className="ml-10"
              width={200}
              height={200}
            />
          </div>
          <Image
            src="/sobreMi/collageFotos2.png"
            alt="collage de fotos"
            className="lg:hidden md:w-1/2 pt-8"
            loading="lazy"
            width={1000}
            height={800}
          />
        </div>
        <Image
          src="/sobreMi/collageFotos3.png"
          alt="collage de fotos"
          className="lg:hidden md:w-2/3 ml-auto py-8"
          loading="lazy"
          width={1000}
          height={800}
        />
      </section>
      <section className="w-full flex flex-col items-center relative gap-6 pb-32 md:pb-40 lg:pb-10">
        <h4 className="text-3xl xsm:text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl font-smileCity text-azul">
          Testimonios
        </h4>
        <div className="w-full flex items-start justify-center overflow-x-auto px-[5%] relative z-20">
          {testimonials.map((testimonial, i) => (
            <Card className="md:w-3/4 lg:w-2/3 xl:w-1/2 3xl:w-1/3 py-4 px-4">
              <CardHeader>
                <h5 className="font-semibold font-title text-center">
                  {testimonial.title}
                </h5>
              </CardHeader>
              <CardBody>
                <blockquote className="italic font-text text-justify">
                  {testimonial.text}
                </blockquote>
              </CardBody>
            </Card>
          ))}
        </div>
        <Image
          src="/sobreMi/regadera.png"
          loading="lazy"
          alt="regadera"
          className="max-md:hidden absolute left-0 bottom-0"
          width={400}
          height={400}
        />
        <Image
          src="/sobreMi/solPasto.png"
          loading="lazy"
          alt="regadera"
          className="absolute right-0 bottom-0"
          width={400}
          height={400}
        />
      </section>
    </main>
  );
}
