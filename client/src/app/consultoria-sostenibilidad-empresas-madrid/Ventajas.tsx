import NextImage from "next/image";

const Ventajas = () => {
  return (
    <section className="z-20 relative flex flex-col items-center mt-16 pb-10 w-full space-section">
      <h2 className="subtitle-size-2 font-bold text-foreground text-center">
        Ventajas de implantar una estrategia de sostenibilidad en tu empresa
      </h2>
      <p className="mt-3 text-center">
        La sostenibilidad bien gestionada aporta beneficios que van más allá del
        cumplimiento normativo.
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
            Mejora de la competitividad y reputación corporativa
          </h3>
          <p className="text-white/80">
            Una estrategia sólida refuerza la confianza de clientes, socios e
            inversores, diferenciando a la empresa en su sector.
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
            Optimización de costes y eficiencia operativa
          </h3>
          <p className="text-white/80">
            La gestión eficiente de recursos y procesos reduce costes operativos
            y mejora el rendimiento a medio y largo plazo.
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
            Atracción de inversión y acceso a financiación sostenible
          </h3>
          <p className="text-white/80">
            Las empresas con criterios ESG integrados tienen mayor acceso a
            financiación responsable y mejores condiciones de inversión.
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
            Generación de impacto positivo y propósito empresarial
          </h3>
          <p className="text-white/80">
            La actividad de la empresa se convierte en una oportunidad para
            generar un impacto positivo en el mundo, construyendo un propósito
            que deja una huella responsable y duradera para las próximas
            generaciones.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Ventajas;
