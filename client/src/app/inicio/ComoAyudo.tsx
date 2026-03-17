import { Card, CardBody } from "@nextui-org/react";

const ComoAyudo = () => {
  return (
    <div className="z-10 relative bg-white pt-32 md:pt-64 xl:pt-96 pb-10">
      <section className="relative flex flex-col items-center gap-3 pb-4 w-full h-full overflow-hidden text-center space-section">
        <h2 className="subtitle-size-2">¿Cómo puedo ayudarte?</h2>
        <p className="md:w-3/4 lg:w-2/3">
          Incorporar la sostenibilidad de forma estratégica permite cumplir con
          las exigencias normativas y responder a las expectativas de
          inversores, clientes y otros grupos de interés, sin perder de vista el
          día a día y el contexto del negocio.
        </p>

        <div className="gap-6 grid grid-cols-1 xl:grid-cols-3 mt-4 w-full">
          <Card className="bg-card bg-white shadow-sm hover:shadow-md border hover:border-amarillo rounded-[20px] hover:scale-[1.02] transition-all">
            <CardBody className="gap-3 p-6 text-left">
              <p className="font-semibold text-foreground paragraph-size">
                Integración de criterios ESG en tu estrategia empresarial
              </p>
              <p className="text-foreground/80">
                Alinear los criterios ESG con la estrategia corporativa ayuda a
                que la sostenibilidad forme parte de las decisiones importantes
                de la empresa. Así deja de ser un conjunto de acciones aisladas
                y pasa a integrarse de forma natural en la gestión y evolución
                del negocio.
              </p>
            </CardBody>
          </Card>

          <Card className="bg-card bg-white shadow-sm hover:shadow-md border hover:border-amarillo rounded-[20px] hover:scale-[1.02] transition-all">
            <CardBody className="gap-3 p-6 text-left">
              <p className="font-semibold text-foreground paragraph-size">
                Cumplimiento normativo y regulaciones en sostenibilidad
              </p>
              <p className="text-foreground/80">
                Contar con una visión clara de las normativas y regulaciones en
                sostenibilidad aplicables a cada actividad permite reducir
                riesgos legales, evitar sanciones y proteger la reputación de la
                empresa, adaptándose a los cambios regulatorios con mayor
                tranquilidad.
              </p>
            </CardBody>
          </Card>

          <Card className="bg-card bg-white shadow-sm hover:shadow-md border hover:border-amarillo rounded-[20px] hover:scale-[1.02] transition-all">
            <CardBody className="gap-3 p-6 text-left">
              <p className="font-semibold text-foreground paragraph-size">
                Informes de sostenibilidad y reporting ESG
              </p>
              <p className="text-foreground/80">
                Los informes de sostenibilidad y el reporting ESG permiten
                comunicar de forma clara y transparente el desempeño de la
                empresa, utilizando datos fiables que refuerzan la confianza de
                los grupos de interés.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="relative flex flex-col items-center gap-3 py-8 w-full h-full overflow-hidden text-center space-section">
        <h2 className="subtitle-size-2">
          ¿A qué tipo de empresas ayudo con la consultoría de sostenibilidad?
        </h2>
        <p className="md:w-3/4 lg:w-2/3">
          Cada empresa tiene su propio tamaño, sector y momento, por lo que las
          soluciones deben adaptarse a su realidad. Mi enfoque parte de entender
          ese punto de partida para proponer acciones viables, medibles y
          alineadas con los objetivos del negocio.
        </p>

        <div className="gap-6 grid md:grid-cols-1 lg:grid-cols-3 w-full">
          <Card className="bg-card bg-white shadow-sm hover:shadow-md border hover:border-amarillo rounded-[20px] hover:scale-[1.02] transition-all">
            <CardBody className="gap-3 p-6">
              <p className="font-semibold text-foreground !text-base md:!text-lg">
                Si eres una pyme
              </p>
              <p className="text-foreground/80">
                Incorporar la sostenibilidad puede hacerse de forma progresiva y
                práctica, priorizando acciones realistas que generen impacto
                positivo sin afectar al funcionamiento ni a los recursos
                disponibles. El proceso se centra en crear una hoja de ruta
                clara que mejore la eficiencia, facilite el cumplimiento y
                aporte valor a medio plazo.
              </p>
            </CardBody>
          </Card>

          <Card className="bg-card bg-white shadow-sm hover:shadow-md border hover:border-amarillo rounded-[20px] hover:scale-[1.02] transition-all">
            <CardBody className="gap-3 p-6">
              <p className="font-semibold text-foreground !text-base md:!text-lg">
                Si gestionas una gran empresa o corporación
              </p>
              <p className="text-foreground/80">
                Las grandes organizaciones afrontan retos complejos, con
                múltiples áreas involucradas, proveedores y exigencias
                regulatorias. La sostenibilidad se trabaja desde una visión
                estratégica, integrando metodologías, reporting y criterios ESG
                en toda la cadena de valor y en la toma de decisiones.
              </p>
            </CardBody>
          </Card>

          <Card className="bg-card bg-white shadow-sm hover:shadow-md border hover:border-amarillo rounded-[20px] hover:scale-[1.02] transition-all">
            <CardBody className="gap-3 p-6">
              <p className="font-semibold text-foreground !text-base md:!text-lg">
                Si eres una startup o una empresa en crecimiento
              </p>
              <p className="text-foreground/80">
                Integrar la sostenibilidad desde las primeras fases ayuda a que
                el negocio crezca de forma responsable y con una base resiliente
                para el futuro. Estructurar procesos, comunicar el impacto y
                alinearse con las expectativas de inversores y clientes permite
                construir empresas más sólidas desde el inicio.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ComoAyudo;
