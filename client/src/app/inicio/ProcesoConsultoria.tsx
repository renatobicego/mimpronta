const ProcesoConsultoria = () => {
  return (
    <section className="relative flex flex-col items-start gap-3 lg:mt-16 w-full h-full overflow-hidden space-section">
      <h2 className="font-bold text-foreground text-2xl md:text-3xl">
        ¿Cómo trabajo la consultoría de sostenibilidad?
      </h2>
      <p className="text-foreground/80">
        Mimpronta simboliza la huella única que dejamos en el mundo: una huella
        irrepetible nacida de lo que somos, de cómo actuamos y de cómo
        conectamos con los demás.
      </p>

      <ol
        className="relative mt-6 w-full"
        aria-label="Pasos del proceso de consultoría"
      >
        <div
          className="top-0 bottom-0 left-4 md:left-6 absolute bg-primary/30 w-0.5"
          aria-hidden="true"
        />

        <li className="relative flex gap-4 md:gap-6 pb-8">
          <div
            className="z-10 relative flex justify-center items-center bg-primary rounded-full w-8 md:w-12 h-8 md:h-12 font-bold text-primary-foreground text-sm md:text-base shrink-0"
            aria-hidden="true"
          >
            1
          </div>
          <article className="flex-1 pt-1">
            <h3 className="font-semibold text-foreground paragraph-size">
              Análisis inicial
            </h3>
            <p className="mt-1 text-foreground/80">
              Análisis detallado del contexto interno y externo de la empresa
              para identificar prioridades estratégicas.
            </p>
          </article>
        </li>

        <li className="relative flex gap-4 md:gap-6 pb-8">
          <div
            className="z-10 relative flex justify-center items-center bg-primary rounded-full w-8 md:w-12 h-8 md:h-12 font-bold text-primary-foreground text-sm md:text-base shrink-0"
            aria-hidden="true"
          >
            2
          </div>
          <article className="flex-1 pt-1">
            <h3 className="font-semibold text-foreground paragraph-size">
              Definición de objetivos y KPIs de sostenibilidad
            </h3>
            <p className="mt-1 text-foreground/80">
              Objetivos claros y medibles, alineados con la estrategia
              empresarial y los marcos ESG relevantes.
            </p>
          </article>
        </li>

        <li className="relative flex gap-4 md:gap-6">
          <div
            className="z-10 relative flex justify-center items-center bg-primary rounded-full w-8 md:w-12 h-8 md:h-12 font-bold text-primary-foreground text-sm md:text-base shrink-0"
            aria-hidden="true"
          >
            3
          </div>
          <article className="flex-1 pt-1">
            <h3 className="font-semibold text-foreground paragraph-size">
              Implementación, seguimiento y mejora continua
            </h3>
            <p className="mt-1 text-foreground/80">
              Acompañamiento durante la implementación y el seguimiento,
              ajustando la estrategia según resultados y cambios del entorno.
            </p>
          </article>
        </li>
      </ol>
    </section>
  );
};

export default ProcesoConsultoria;
