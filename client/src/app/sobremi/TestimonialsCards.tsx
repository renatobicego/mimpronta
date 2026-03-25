import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from "react";

const TestimonialsCards = () => {
  const testimonials = [
    {
      title: "Qnarik Grigoryan Ghimoyan - Fundación Taller de Solidaridad",
      text: `"Trabajar con Mica es un gusto! Tiene una enorme capacidad de adaptarse a las necesidades de cada encuentro,
       consigue mantener el interés y la atención de las personas en todo momento y siempre lo hace muy participativo, 
       de manera que hay más implicación por parte de quienes asisten a las sesiones.
      Además, siempre está dispuesta a repensar y mejorar cualquier propuesta de manera creativa e innovadora.
      Espero que podamos seguir trabajando juntas mucho
      tiempo!"`,
      image: "/sobreMi/qnarik.jpeg",
    },
    {
      text: `“Colaborar con Mica en nuestro equipo de facilitación siempre es una experiencia excelente. 
      No solo capta las ideas al instante, sino que las eleva con un análisis crítico y constructivo. 
      Su compromiso, responsabilidad e inteligencia la convierten en una de esas personas que siempre 
      quieres tener cerca en cualquier proyecto.”`,
      title: "Daniel Llamas - Open Innovation Company",
      image: "/sobreMi/daniel-llamas.jpeg",
    },
    {
      title: "Valeria Serra - AIDI Asociación",
      text: `"Hemos colaborado con Micaela en varios proyectos y ha sido muy inspirador para mí 
      coincidir en esos espacios. Tiene un enfoque claro, una sensibilidad especial hacia la 
      sostenibilidad y mucha capacidad para aportar soluciones innovadoras. Es una profesional 
      cercana y muy comprometida. Recomiendo el trabajo de Mica para todos los proyectos que 
      busquen impacto real y una mirada experta, responsable y consciente en innovación social."`,
      image: "/sobreMi/valeria-serra.jpeg",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full">
      <div className="z-20 relative flex gap-4 py-4 w-fit max-w-full overflow-x-auto">
        {testimonials.map((testimonial, i) => (
          <Card
            key={i}
            className="flex-shrink-0 px-4 py-4 w-[90vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw]"
          >
            <CardHeader>
              <Image
                src={testimonial.image}
                alt={`Imagen de ${testimonial.title}`}
                width={50}
                height={50}
                className="mr-4 rounded-full"
                loading="lazy"
              />
              <p className="font-title font-semibold subtitle-size">
                {testimonial.title}
              </p>
            </CardHeader>
            <CardBody>
              <blockquote className="font-text text-xs sm:text-sm md:text-base 2xl:text-lg italic">
                {testimonial.text}
              </blockquote>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCards;
