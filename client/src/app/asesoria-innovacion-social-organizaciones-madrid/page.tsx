import type { Metadata } from "next";
import NextImage from "next/image";
import TestimonialsCards from "../sobremi/TestimonialsCards";
import AboutMe from "../consultoria-sostenibilidad-empresas-madrid/AboutMe";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Ventajas from "./Ventajas";
import ProcesoAsesoria from "./ProcesoAsesoria";
import AccordionFaq from "./AccordionFaq";
import ContactAsesoria from "./ContactAsesoria";

export const metadata: Metadata = {
  title: "Asesoría de innovación social para organizaciones en Madrid",
  description:
    "Asesoría de innovación social en Madrid para organizaciones: impulsa impacto, sostenibilidad y crecimiento con estrategias innovadoras y medibles.",
  keywords: ["Asesoría de innovación social para organizaciones en Madrid"],
  openGraph: {
    title: "Asesoría de innovación social para organizaciones en Madrid",
    description:
      "Asesoría de innovación social en Madrid para organizaciones: impulsa impacto, sostenibilidad y crecimiento con estrategias innovadoras y medibles.",
    type: "website",
  },
};

export default function AsesoriaInnovacionSocialPage() {
  return (
    <main id="inicio-page" className="gap-8 overflow-hidden main">
      <NextImage
        alt=""
        aria-hidden="true"
        priority
        quality={10}
        fill
        className="opacity-50 object-cover"
        src="/papel.webp"
      />

      <HeroSection />
      <Services />
      <Ventajas />
      <ProcesoAsesoria />

      <section className="relative flex flex-col items-start gap-3 md:max-lg:my-16 max-md:mb-8 w-full h-full overflow-hidden space-section">
        <AboutMe />
      </section>

      <section className="relative flex flex-col items-start gap-3 bg-azul pt-16 pb-8 w-full h-full overflow-hidden text-white space-section">
        <h3 className="font-semibold text-white paragraph-size">
          Preguntas frecuentes sobre asesoría de innovación social para
          organizaciones
        </h3>
        <AccordionFaq />
      </section>

      <section className="relative flex flex-col items-start gap-3 bg-azul -mt-8 pb-16 w-full h-full overflow-hidden text-white space-section">
        <h2 className="subtitle-size-2 text-white">Opiniones de mimpronta</h2>
        <TestimonialsCards />
      </section>

      <ContactAsesoria />
    </main>
  );
}
