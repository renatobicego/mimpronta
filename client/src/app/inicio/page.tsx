import type { Metadata } from "next";
import TestimonialsCards from "../sobremi/TestimonialsCards";
import { Image, Link } from "@nextui-org/react";
import AboutMe from "./AboutMe";

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
    <main className="main overflow-hidden py-36 gap-8">
      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h1 className="font-semibold">
          Consultoría de sostenibilidad para empresas en Madrid
        </h1>
        <p>
          La sostenibilidad se ha convertido en un pilar estratégico para las
          empresas que operan en entornos cada vez más competitivos y regulados.
        </p>
        <p>
          Contar con el apoyo de una consultoría en sostenibilidad ayuda a las
          organizaciones a integrar criterios ambientales, sociales y de
          gobernanza (ESG) de forma clara, ordenada y alineada con la normativa
          vigente, teniendo en cuenta la realidad del tejido empresarial local.
        </p>
        <p>
          Mi enfoque combina visión estratégica, análisis de impacto y
          metodologías de innovación social para acompañar a las empresas en el
          camino hacia una sostenibilidad real, transformándola en una ventaja
          competitiva tangible y medible.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          Servicios de consultoría en sostenibilidad empresarial
        </h2>
        <p>
          Servicios de consultoría en sostenibilidad adaptados a la realidad y
          al momento de cada organización, con un acompañamiento que abarca
          desde el diagnóstico inicial hasta la implementación y el seguimiento
          de las acciones.
        </p>

        <h3 className="paragraph-size font-semibold">
          Diagnóstico de sostenibilidad y análisis ESG
        </h3>
        <p>
          Análisis de la situación actual de la empresa a través de criterios
          ambientales, sociales y de gobernanza (ESG). Este diagnóstico permite
          identificar riesgos, oportunidades y áreas de mejora frente a
          estándares y normativas y las expectativas del mercado, facilitando
          una toma de decisiones más clara y ordenada.
        </p>

        <h3 className="paragraph-size font-semibold">
          Estrategias de sostenibilidad corporativa
        </h3>
        <p>
          Definición de estrategias de sostenibilidad alineadas con los
          objetivos de negocio, integrando estos criterios en la visión y el
          propósito, la cultura corporativa y los procesos clave de la empresa
          de forma coherente y realista.
        </p>

        <h3 className="paragraph-size font-semibold">
          Planes de acción y hoja de ruta sostenible
        </h3>
        <p>
          Desarrollo de planes de acción concretos que transforman la estrategia
          en pasos claros con plazos e indicadores que permiten una
          implementación adaptada a cada contexto individual.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">¿Cómo puedo ayudarte?</h2>
        <p>
          Incorporar la sostenibilidad de forma estratégica permite cumplir con
          las exigencias normativas y responder a las expectativas de
          inversores, clientes y otros grupos de interés, sin perder de vista el
          día a día y el contexto del negocio.
        </p>

        <p className="paragraph-size font-semibold">
          Integración de criterios ESG en tu estrategia empresarial
        </p>
        <p>
          Alinear los criterios ESG con la estrategia corporativa ayuda a que la
          sostenibilidad forme parte de las decisiones importantes de la
          empresa. Así deja de ser un conjunto de acciones aisladas y pasa a
          integrarse de forma natural en la gestión y evolución del negocio.
        </p>

        <p className="paragraph-size font-semibold">
          Cumplimiento normativo y regulaciones en sostenibilidad
        </p>
        <p>
          Contar con una visión clara de las normativas y regulaciones en
          sostenibilidad aplicables a cada actividad permite reducir riesgos
          legales, evitar sanciones y proteger la reputación de la empresa,
          adaptándose a los cambios regulatorios con mayor tranquilidad.
        </p>

        <p className="paragraph-size font-semibold">
          Informes de sostenibilidad y reporting ESG
        </p>
        <p>
          Los informes de sostenibilidad y el reporting ESG permiten comunicar
          de forma clara y transparente el desempeño de la empresa, utilizando
          datos fiables que refuerzan la confianza de los grupos de interés.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          ¿A qué tipo de empresas ayudo con la consultoría de sostenibilidad?
        </h2>
        <p>
          Cada empresa tiene su propio tamaño, sector y momento, por lo que las
          soluciones deben adaptarse a su realidad. Mi enfoque parte de entender
          ese punto de partida para proponer acciones viables, medibles y
          alineadas con los objetivos del negocio.
        </p>

        <p className="paragraph-size font-semibold">Si eres una pyme</p>
        <p>
          Incorporar la sostenibilidad puede hacerse de forma progresiva y
          práctica, priorizando acciones realistas que generen impacto positivo
          sin afectar al funcionamiento ni a los recursos disponibles. El
          proceso se centra en crear una hoja de ruta clara que mejore la
          eficiencia, facilite el cumplimiento y aporte valor a medio plazo.
        </p>

        <p className="paragraph-size font-semibold">
          Si gestionas una gran empresa o corporación
        </p>
        <p>
          Las grandes organizaciones afrontan retos complejos, con múltiples
          áreas involucradas, proveedores y exigencias regulatorias. La
          sostenibilidad se trabaja desde una visión estratégica, integrando
          metodologías, reporting y criterios ESG en toda la cadena de valor y
          en la toma de decisiones.
        </p>

        <p className="paragraph-size font-semibold">
          Si eres una startup o una empresa en crecimiento
        </p>
        <p>
          Integrar la sostenibilidad desde las primeras fases ayuda a que el
          negocio crezca de forma responsable y con una base resiliente para el
          futuro. Estructurar procesos, comunicar el impacto y alinearse con las
          expectativas de inversores y clientes permite construir empresas más
          sólidas desde el inicio.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          Ventajas de implantar una estrategia de sostenibilidad en tu empresa
        </h2>
        <p>
          La sostenibilidad bien gestionada aporta beneficios que van más allá
          del cumplimiento normativo.
        </p>

        <h3 className="paragraph-size font-semibold">
          Mejora de la competitividad y reputación corporativa
        </h3>
        <p>
          Una estrategia sólida refuerza la confianza de clientes, socios e
          inversores, diferenciando a la empresa en su sector.
        </p>

        <h3 className="paragraph-size font-semibold">
          Optimización de costes y eficiencia operativa
        </h3>
        <p>
          La gestión eficiente de recursos y procesos reduce costes operativos y
          mejora el rendimiento a medio y largo plazo.
        </p>

        <h3 className="paragraph-size font-semibold">
          Atracción de inversión y acceso a financiación sostenible
        </h3>
        <p>
          Las empresas con criterios ESG integrados tienen mayor acceso a
          financiación responsable y mejores condiciones de inversión.
        </p>

        <h3 className="paragraph-size font-semibold">
          Generación de impacto positivo y propósito empresarial
        </h3>
        <p>
          La actividad de la empresa se convierte en una oportunidad para
          generar un impacto positivo en el mundo, construyendo un propósito que
          deja una huella responsable y duradera para las próximas generaciones.
        </p>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          ¿Cómo trabajo la consultoría de sostenibilidad?
        </h2>
        <p>
          Mimpronta simboliza la huella única que dejamos en el mundo: una
          huella irrepetible nacida de lo que somos, de cómo actuamos y de cómo
          conectamos con los demás.
        </p>

        <div className="flex flex-col gap-3">
          <div>
            <h3 className="paragraph-size font-semibold">Análisis inicial</h3>
            <p>
              Análisis detallado del contexto interno y externo de la empresa
              para identificar prioridades estratégicas.
            </p>
          </div>
          <div>
            <h3 className="paragraph-size font-semibold">
              Definición de objetivos y KPIs de sostenibilidad
            </h3>
            <p>
              Objetivos claros y medibles, alineados con la estrategia
              empresarial y los marcos ESG relevantes.
            </p>
          </div>
          <div>
            <h3 className="paragraph-size font-semibold">
              Implementación, seguimiento y mejora continua
            </h3>
            <p>
              Acompañamiento durante la implementación y el seguimiento,
              ajustando la estrategia según resultados y cambios del entorno.
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <AboutMe />
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h3 className="paragraph-size font-semibold">
          Preguntas frecuentes sobre consultoría de sostenibilidad para empresas
        </h3>

        <dl className="font-text flex flex-col gap-1">
          <dt className="font-semibold">
            ¿Qué es una consultoría de sostenibilidad empresarial?
          </dt>
          <dd>
            Es un servicio especializado que ayuda a las empresas a integrar la
            sostenibilidad y los criterios ESG en su estrategia, operaciones y
            toma de decisiones.
          </dd>

          <dt className="font-semibold">
            ¿Qué empresas necesitan consultoría ESG?
          </dt>
          <dd>
            Cualquier empresa que quiera generar un impacto positivo en el
            mundo, anticiparse a la regulación, mejorar su competitividad o
            responder a las expectativas de inversores y clientes.
          </dd>

          <dt className="font-semibold">
            ¿Cuánto tiempo lleva implantar una estrategia sostenible?
          </dt>
          <dd>
            Depende del tamaño y complejidad de la empresa, se analizará cada
            caso en particular y se validarán los plazos desde el inicio.
          </dd>
        </dl>
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">Opiniones de mimpronta</h2>
        <TestimonialsCards />
      </section>

      <section className="flex w-full space-section h-full overflow-hidden flex-col items-start gap-3 relative">
        <h2 className="subtitle-size-2">
          ¿Necesitas asesoramiento en sostenibilidad empresarial en Madrid?
        </h2>
        <p>
          Si tu empresa busca integrar la sostenibilidad de forma estratégica y
          alineada con sus objetivos de negocio, la consultoría especializada es
          el primer paso para avanzar con rigor y visión a largo plazo.
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
