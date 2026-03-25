import { Link } from "@nextui-org/react";

const CtaFinal = () => {
  return (
    <section className="relative flex flex-col items-start gap-3 w-full h-full overflow-hidden space-section">
      <h2 className="subtitle-size-2">
        ¿Necesitas asesoramiento en sostenibilidad empresarial en Madrid?
      </h2>
      <p>
        Si tu empresa busca integrar la sostenibilidad de forma estratégica y
        alineada con sus objetivos de negocio, la consultoría especializada es
        el primer paso para avanzar con rigor y visión a largo plazo.
      </p>
      <Link href={"/#contacto"}>
        <button role="button" className="mt-4 btn-primary">
          Hablemos
        </button>
      </Link>
    </section>
  );
};

export default CtaFinal;
