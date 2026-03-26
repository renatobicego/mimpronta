const ProcesoAsesoria = () => {
  return (
    <section className="relative flex flex-col items-start gap-3 lg:mt-16 w-full h-full overflow-hidden space-section">
      <h2 className="font-bold text-foreground text-2xl md:text-3xl">
        ¿Cómo lo hago?
      </h2>
      <p className="lg:w-3/4 3xl:w-2/3 text-foreground/80">
        La metodología combina trabajo colaborativo, análisis y participación,
        siempre con foco en generar resultados útiles y aplicables para la
        organización.
      </p>

      <ol
        className="relative mt-6 w-full lg:w-3/4 3xl:w-2/3"
        aria-label="Pasos del proceso de asesoría en innovación social"
      >
        <div
          className="top-0 bottom-0 left-4 md:left-6 absolute bg-rosa w-0.5"
          aria-hidden="true"
        />

        <li className="relative flex gap-4 md:gap-6 pb-8">
          <div
            className="z-10 relative flex justify-center items-center bg-rosaOscuro rounded-full w-8 md:w-12 h-8 md:h-12 font-bold text-primary-foreground text-sm md:text-base shrink-0"
            aria-hidden="true"
          >
            1
          </div>
          <article className="flex-1 pt-1">
            <h3 className="font-semibold text-foreground paragraph-size">
              Identificación de retos sociales y oportunidades
            </h3>
            <p className="mt-1 text-foreground/80">
              Se analiza el contexto interno y externo para detectar los retos
              sociales más relevantes y las oportunidades donde la organización
              puede generar un impacto positivo real.
            </p>
          </article>
        </li>

        <li className="relative flex gap-4 md:gap-6 pb-8">
          <div
            className="z-10 relative flex justify-center items-center bg-rosaOscuro rounded-full w-8 md:w-12 h-8 md:h-12 font-bold text-primary-foreground text-sm md:text-base shrink-0"
            aria-hidden="true"
          >
            2
          </div>
          <article className="flex-1 pt-1">
            <h3 className="font-semibold text-foreground paragraph-size">
              Co-creación de soluciones con grupos de interés
            </h3>
            <p className="mt-1 text-foreground/80">
              Las soluciones se diseñan de forma colaborativa, implicando a los
              actores clave para asegurar que sean viables, útiles y bien
              acogidas por las personas y comunidades a las que van dirigidas.
            </p>
          </article>
        </li>

        <li className="relative flex gap-4 md:gap-6">
          <div
            className="z-10 relative flex justify-center items-center bg-rosaOscuro rounded-full w-8 md:w-12 h-8 md:h-12 font-bold text-primary-foreground text-sm md:text-base shrink-0"
            aria-hidden="true"
          >
            3
          </div>
          <article className="flex-1 pt-1">
            <h3 className="font-semibold text-foreground paragraph-size">
              Implementación, seguimiento y escalado de proyectos
            </h3>
            <p className="mt-1 text-foreground/80">
              Se acompaña la puesta en marcha de las iniciativas, realizando
              seguimiento y facilitando el aprendizaje continuo para mejorar los
              proyectos y ampliar aquellas soluciones que demuestran mayor
              impacto.
            </p>
          </article>
        </li>
      </ol>
    </section>
  );
};

export default ProcesoAsesoria;
