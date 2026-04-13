import Image from "next/image";
import HeroSection from "./HeroSection";
import Values from "./Values";
import PhotoGallery from "./PhotoGallery";
import Testimonals from "./Testimonals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micaela Gerbeno | Innovación social y sostenibilidad - Mimpronta",
  description:
    "Soy Micaela Gerbeno, consultora en innovación social y sostenibilidad. Acompaño a personas y organizaciones a crear negocios con impacto.",
  keywords: [
    "Innovación social y sostenibilidad",
    "Micaela Gerbeno",
    "Consultoría en innovación social",
    "Sostenibilidad",
    "Negocios con impacto",
  ],
};

export default function AboutMe() {
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
      <HeroSection />
      <Values />
      <PhotoGallery />
      <Testimonals />
    </main>
  );
}
