"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    id: "1",
    question: "¿Qué es una consultoría de sostenibilidad empresarial?",
    answer:
      "Es un servicio especializado que ayuda a las empresas a integrar la sostenibilidad y los criterios ESG en su estrategia, operaciones y toma de decisiones.",
  },
  {
    id: "2",
    question: "¿Qué empresas necesitan consultoría ESG?",
    answer:
      "Cualquier empresa que quiera generar un impacto positivo en el mundo, anticiparse a la regulación, mejorar su competitividad o responder a las expectativas de inversores y clientes.",
  },
  {
    id: "3",
    question: "¿Cuánto tiempo lleva implantar una estrategia sostenible?",
    answer:
      "Depende del tamaño y complejidad de la empresa, se analizará cada caso en particular y se validarán los plazos desde el inicio.",
  },
];

const AccordionFaq = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(faqItems.map((i) => i.id)),
  );

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="flex flex-col w-full font-text text-white">
      {faqItems.map((item, i) => (
        <div key={item.id}>
          <button
            onClick={() => toggle(item.id)}
            aria-expanded={openIds.has(item.id)}
            className="flex justify-between items-center gap-4 py-4 w-full text-left"
          >
            <p className="font-semibold text-white paragraph-size">
              {item.question}
            </p>
            <motion.span
              animate={{ rotate: openIds.has(item.id) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIds.has(item.id) && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-4">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {i < faqItems.length - 1 && <hr className="border-white/20" />}
        </div>
      ))}
    </div>
  );
};

export default AccordionFaq;
