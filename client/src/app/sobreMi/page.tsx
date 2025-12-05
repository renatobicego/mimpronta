import Image from "next/image";
import HeroSection from "./HeroSection";
import Values from "./Values";
import PhotoGallery from "./PhotoGallery";
import Testimonals from "./Testimonals";

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
