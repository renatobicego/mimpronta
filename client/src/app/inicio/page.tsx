import type { Metadata } from "next";
import NextImage from "next/image";
import TestimonialsCards from "../sobremi/TestimonialsCards";
import ContactInicio from "../components/Home/Contact/ContactInicio";
import HeroSection from "./HeroSection";
import ComoAyudo from "./ComoAyudo";
import Ventajas from "./Ventajas";
import ProcesoConsultoria from "./ProcesoConsultoria";
import Services from "./Services";
import AboutMe from "./AboutMe";
import AccordionFaq from "./AccordionFaq";

export const metadata: Metadata = {
  title: "Consultoría de sostenibilidad para empresas en Madrid",
  description:
    "Ayudo a empresas en Madrid a diseñar e implementar su estrategia ESG, mejorando impacto, cumpliendo normativa de sostenibilidad y generando valor responsable.",
  keywords: [
    "Consultoría de sostenibilidad para empresas en Madrid",
    "Consultoría ESG para empresas en Madrid",
    "Consultoría ESG para empresas",
    "Servicios ESG para empresas en Madrid",
    "Servicios ESG para empresas",
    "Consultoría de sostenibilidad para empresas",
  ],
  openGraph: {
    title: "Consultoría de sostenibilidad para empresas en Madrid",
    description:
      "Ayudo a empresas en Madrid a diseñar e implementar su estrategia ESG, mejorando impacto, cumpliendo normativa de sostenibilidad y generando valor responsable.",
    type: "website",
  },
};

export default function ConsultoriaSostenibilidadPage() {
  return (
    <main id="inicio-page" className="gap-8 py-36 overflow-hidden main">
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
      <ComoAyudo />
      <Ventajas />
      <ProcesoConsultoria />

      <section className="relative flex flex-col items-start gap-3 max-lg:my-16 w-full h-full overflow-hidden space-section">
        <AboutMe />
      </section>

      <section className="relative flex flex-col items-start gap-3 bg-azul pt-16 pb-8 w-full h-full overflow-hidden text-white space-section">
        <h3 className="font-semibold text-white paragraph-size">
          Preguntas frecuentes sobre consultoría de sostenibilidad para empresas
        </h3>
        <AccordionFaq />
      </section>

      <section className="relative flex flex-col items-start gap-3 bg-azul -mt-8 pb-16 w-full h-full overflow-hidden text-white space-section">
        <h2 className="subtitle-size-2 text-white">Opiniones de mimpronta</h2>
        <TestimonialsCards />
      </section>

      <ContactInicio />
    </main>
  );
}
