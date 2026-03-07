import type { Metadata } from "next";
import TestimonialsCards from "../sobremi/TestimonialsCards";
import { Link } from "@nextui-org/react";
import AboutMe from "../inicio/AboutMe";

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
    <main className="main overflow-hidden py-36 gap-8">
      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h1 className="font-semibold">
          Asesoría de innovación social para organizaciones en Madrid
        </h1>
        <p>
          La innovación social permite a las organizaciones generar impacto
          social real sin perder de vista sus objetivos estratégicos. Desde la
          asesoría de innovación social en Madrid, se trabaja para integrar la
          dimensión social en la estrategia, conectando propósito, actividad y
          entorno de forma coherente.
        </p>
        <p>
          Se aborda como un proceso estratégico y continuo, no como una acción
          aislada. El enfoque se basa en aplicar metodologías que ayudan a
          identificar retos sociales y convertirlos en soluciones sostenibles
          que aporten valor tanto a la organización como a la comunidad en la
          que opera.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          Servicios de asesoría en innovación social para organizaciones
        </h2>
        <p>
          Acompañamiento en todas las fases del proceso, desde el análisis
          inicial hasta la evaluación del impacto, poniendo el foco en la
          búsqueda de soluciones sostenibles a problemas sociales reales y en su
          integración dentro de la organización.
        </p>

        <h3 className="paragraph-size font-semibold">
          Diagnóstico de impacto social y análisis de contexto
        </h3>
        <p>
          Análisis de la situación de partida de la organización, su entorno
          social y sus principales grupos de interés para detectar desafíos y
          oportunidades. Este diagnóstico permite orientar la innovación hacia
          ámbitos donde pueda generarse un impacto social concreto y sostenible.
        </p>

        <h3 className="paragraph-size font-semibold">
          Diseño de estrategias de innovación social
        </h3>
        <p>
          Desarrollo de estrategias adaptadas a la realidad de cada
          organización, alineadas con su propósito, incorporando metodologías de
          innovación social que facilitan la creación de soluciones con impacto
          positivo a medio y largo plazo.
        </p>

        <h3 className="paragraph-size font-semibold">
          Desarrollo de proyectos de impacto social
        </h3>
        <p>
          Acompañamiento en el diseño y puesta en marcha de proyectos de
          innovación social viables y coherentes con la estrategia de la
          organización, buscando soluciones sostenibles a retos sociales y
          asegurando que puedan generar resultados medibles y duraderos.
        </p>

        <h3 className="paragraph-size font-semibold">
          Formación en innovación social para organizaciones
        </h3>
        <p>
          Programas y sesiones de formación en innovación social dirigidos a
          equipos y responsables de organizaciones que buscan integrar el
          impacto social en su actividad.
        </p>
        <p>
          A través de metodologías prácticas y casos reales, se facilitan
          herramientas para identificar retos sociales, diseñar soluciones
          sostenibles y fomentar una cultura de innovación con impacto positivo
          dentro de la organización.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          Ventajas de trabajar en innovación social para tu organización
        </h2>
        <p>
          La innovación social bien planteada aporta beneficios claros para la
          organización.
        </p>

        <p className="paragraph-size font-semibold">
          Mejora del impacto social y reputación corporativa
        </p>
        <p>
          Las empresas refuerzan su credibilidad y la confianza de clientes,
          empleados e inversores.
        </p>

        <p className="paragraph-size font-semibold">
          Fortalece la cultura organizacional
        </p>
        <p>
          La participación en proyectos de impacto social mejora el compromiso
          interno y alinea a los equipos con un propósito compartido.
        </p>

        <p className="paragraph-size font-semibold">
          Aporta diferenciación en el mercado
        </p>
        <p>
          La innovación social permite diferenciarse, anticiparse a expectativas
          sociales y responder mejor a los retos del entorno.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">¿Cómo lo hago?</h2>
        <p>
          La metodología combina trabajo colaborativo, análisis y participación,
          siempre con foco en generar resultados útiles y aplicables para la
          organización.
        </p>

        <p className="paragraph-size font-semibold">
          Identificación de retos sociales y oportunidades
        </p>
        <p>
          Se analiza el contexto interno y externo para detectar los retos
          sociales más relevantes y las oportunidades donde la organización
          puede generar un impacto positivo real.
        </p>

        <p className="paragraph-size font-semibold">
          Co-creación de soluciones con grupos de interés
        </p>
        <p>
          Las soluciones se diseñan de forma colaborativa, implicando a los
          actores clave para asegurar que sean viables, útiles y bien acogidas
          por las personas y comunidades a las que van dirigidas.
        </p>

        <p className="paragraph-size font-semibold">
          Implementación, seguimiento y escalado de proyectos
        </p>
        <p>
          Se acompaña la puesta en marcha de las iniciativas, realizando
          seguimiento y facilitando el aprendizaje continuo para mejorar los
          proyectos y ampliar aquellas soluciones que demuestran mayor impacto.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <AboutMe />
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h3 className="paragraph-size font-semibold">
          Preguntas frecuentes sobre asesoría de innovación social para
          organizaciones
        </h3>

        <dl className="font-text flex flex-col gap-1">
          <dt className="font-semibold">
            ¿Qué es la innovación social aplicada a la empresa?
          </dt>
          <dd>
            Es el desarrollo de soluciones innovadoras que responden a retos
            sociales y, al mismo tiempo, aportan valor estratégico a la
            organización.
          </dd>

          <dt className="font-semibold">
            ¿Qué empresas pueden beneficiarse de la innovación social?
          </dt>
          <dd>
            Cualquier empresa que quiera reforzar su impacto social, su
            reputación y su estrategia a largo plazo.
          </dd>

          <dt className="font-semibold">
            ¿Cómo se mide el impacto de la innovación social?
          </dt>
          <dd>
            Mediante indicadores sociales definidos desde el inicio y adaptados
            a cada proyecto, revisados de forma periódica.
          </dd>
        </dl>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">Opiniones de mimpronta</h2>
        <TestimonialsCards />
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          ¿Necesitas asesoramiento en innovación social en tu organización?
        </h2>
        <p>
          Si tu organización quiere avanzar hacia modelos más responsables e
          innovadores, la asesoría en innovación social es una herramienta clave
          para generar impacto con sentido estratégico.
        </p>
        <Link href={"/#contacto"}>
          <button role="button" className="btn-primary mt-4 ">
            Hablemos
          </button>
        </Link>
      </section>
    </main>
  );
}
