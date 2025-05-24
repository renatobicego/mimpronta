import Image from "next/image";
import AboutUs from "./components/Home/AboutUs";
import PhraseCollage from "./components/Home/PhraseCollage";
import Services from "./components/Home/Services/Services";
import Blog from "./components/Home/Blog/Blog";
import Contact from "./components/Home/Contact/Contact";

export default function Home() {
  return (
    <main id="inicio" className="main overflow-hidden">
      <Image
        src={"/papeles/papelMarron4.png"}
        alt="papel marron 2"
        width={847}
        quality={50}
        height={1700}
        className="absolute left-[83vw] sm:left-[85vw] top-10 lg:left-[90vw] 3xl:left-[90vw]
                  rotate-[185deg] -scale-x-100 h-[90vh] xsm:h-[100vh] w-auto lg:h-[180vh] z-30
                  landscape:left-[96vw] md:landscape:left-[87vw]"
      />
      <section className="flex w-full h-full overflow-hidden flex-col items-center relative -mt-32">
        <Image
          alt="fondo"
          priority={true}
          quality={10}
          width={4500}
          height={3000}
          className="absolute left-0 top-0 w-full object-cover h-[200vh] sm:h-[300vh] md:h-[200vh] lg:h-[320vh] opacity-50"
          src={"/papel.webp"}
        />
        <PhraseCollage />
        <AboutUs />
        <div className="relative w-full">
          <Image
            src={"/papeles/flechaAzul.png"}
            alt="Flecha azul"
            width={200}
            quality={30}
            height={400}
            className="h-auto w-[20%] lg:w-auto absolute left-0 bottom-1/3 md:bottom-1/2 lg:bottom-1/2 max-lg:landscape:w-[15%]"
          />
          <Image
            src={"/papeles/papelMarron3.png"}
            alt="Papel roto quienes somos"
            quality={50}
            width={200}
            height={400}
            className="h-auto w-[30%] sm:w-[25%] absolute left-[80vw] sm:left-[84vw] lg:hidden
                      bottom-0 rotate-[195deg]  -scale-x-100 z-[49] lg:-bottom-12"
          />
          <Image
            src={"/papeles/papelAzulRoto.png"}
            alt="Papel roto azul"
            quality={30}
            width={2000}
            height={500}
            className="w-full h-auto mt-[10vh] relative "
          />
        </div>
      </section>
      <Image
        src={"/papeles/papelMarron3.png"}
        alt="Papel roto quienes somos"
        quality={50}
        width={200}
        height={400}
        className="hidden lg:inline absolute lg:left-[90vw] 2xl:left-[92vw] rotate-[195deg] top-[180vh] 3xl:top-[160vh] -scale-x-100 z-[49]"
      />
      <Services />
      <Blog />
      <Contact />
    </main>
  );
}
