import NextImage from "next/image";

const Ventajas = () => {
  return (
    <section className="z-20 relative flex flex-col items-center mt-16 pt-16 md:pt-32 lg:pt-64 3xl:pt-[450px] xl:pt-96 pb-10 w-full space-section">
      <h2 className="subtitle-size-2 font-bold text-foreground text-center">
        Ventajas de trabajar en innovación social para tu organización
      </h2>
      <p className="mt-3 text-center">
        La innovación social bien planteada aporta beneficios claros para la
        organización.
      </p>

      <ul className="gap-3 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 mt-8 xl:w-5/6">
        <li className="relative flex flex-col items-center gap-4 bg-azul px-5 py-6 rounded-[20px] w-full text-white text-center hover:scale-[1.02] transition">
          <NextImage
            src="/icons/world.svg"
            loading="lazy"
            width={44}
            height={44}
            alt=""
            aria-hidden="true"
          />
          <h3 className="font-semibold text-white paragraph-size">
            Mejora del impacto social y reputación corporativa
          </h3>
          <p className="text-white/80">
            Las empresas refuerzan su credibilidad y la confianza de clientes,
            empleados e inversores.
          </p>
        </li>

        <li className="relative flex flex-col items-center gap-4 bg-azul px-5 py-6 rounded-[20px] w-full text-white text-center hover:scale-[1.02] transition">
          <NextImage
            src="/icons/plant.svg"
            loading="lazy"
            width={44}
            height={44}
            alt=""
            aria-hidden="true"
          />
          <h3 className="font-semibold text-white paragraph-size">
            Fortalece la cultura organizacional
          </h3>
          <p className="text-white/80">
            La participación en proyectos de impacto social mejora el compromiso
            interno y alinea a los equipos con un propósito compartido.
          </p>
        </li>

        <li className="relative flex flex-col items-center gap-4 bg-azul px-5 py-6 rounded-[20px] w-full text-white text-center hover:scale-[1.02] transition">
          <NextImage
            src="/icons/hands.svg"
            loading="lazy"
            width={44}
            height={44}
            alt=""
            aria-hidden="true"
          />
          <h3 className="font-semibold text-white paragraph-size">
            Aporta diferenciación en el mercado
          </h3>
          <p className="text-white/80">
            La innovación social permite diferenciarse, anticiparse a
            expectativas sociales y responder mejor a los retos del entorno.
          </p>
        </li>

        <li className="relative flex flex-col items-center gap-4 bg-azul px-5 py-6 rounded-[20px] w-full text-white text-center hover:scale-[1.02] transition">
          <NextImage
            src="/icons/handHeart.svg"
            loading="lazy"
            width={44}
            height={44}
            alt=""
            aria-hidden="true"
          />
          <h3 className="font-semibold text-white paragraph-size">
            Generación de impacto positivo y propósito organizacional
          </h3>
          <p className="text-white/80">
            La actividad de la organización se convierte en una oportunidad para
            generar un impacto positivo real, construyendo un propósito que deja
            una huella responsable y duradera.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Ventajas;
