"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    id: "1",
    question: "¿Qué es la innovación social aplicada a la empresa?",
    answer:
      "Es el desarrollo de soluciones innovadoras que responden a retos sociales y, al mismo tiempo, aportan valor estratégico a la organización.",
  },
  {
    id: "2",
    question: "¿Qué empresas pueden beneficiarse de la innovación social?",
    answer:
      "Cualquier empresa que quiera reforzar su impacto social, su reputación y su estrategia a largo plazo.",
  },
  {
    id: "3",
    question: "¿Cómo se mide el impacto de la innovación social?",
    answer:
      "Mediante indicadores sociales definidos desde el inicio y adaptados a cada proyecto, revisados de forma periódica.",
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
