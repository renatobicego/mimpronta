"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent, CookieConsent } from "@/lib/cookieConsentContext";

interface ToggleProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  disabled?: boolean;
}

function Toggle({ checked, onChange, disabled }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none
        ${checked ? "bg-amarillo" : "bg-gray-400"}
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200
          ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

const categories = [
  {
    key: "necessary",
    label: "Necesarias",
    description:
      "Imprescindibles para el funcionamiento del sitio. No pueden desactivarse.",
    disabled: true,
  },
  {
    key: "analytics",
    label: "Analíticas",
    description:
      "Nos ayudan a entender cómo interactúas con el sitio (Google Analytics). La información es anónima.",
    disabled: false,
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Permiten mostrar anuncios relevantes según tus intereses en otras plataformas.",
    disabled: false,
  },
] as const;

export default function CookieBanner() {
  const { consent, saveConsent, acceptAll, rejectAll } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  const handleSavePreferences = () => {
    const newConsent: CookieConsent = {
      analytics: preferences.analytics ? "granted" : "denied",
      marketing: preferences.marketing ? "granted" : "denied",
    };
    saveConsent(newConsent);
  };

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          className="right-4 bottom-4 z-50 fixed flex justify-end w-full max-w-sm sm:max-w-md pointer-events-none"
          style={{ right: "1rem", left: "auto", width: "auto" }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="bg-negro shadow-2xl rounded-2xl w-[min(360px,90vw)] overflow-hidden font-text text-white pointer-events-auto">
            {/* Main banner */}
            <div className="p-5">
              <p className="text-sm leading-relaxed">
                Usamos{" "}
                <span className="font-semibold text-amarillo">cookies</span>{" "}
                para mejorar tu experiencia. Puedes aceptar todas, rechazarlas o{" "}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="hover:opacity-80 text-amarillo underline transition-opacity"
                >
                  personalizar
                </button>
                . Ver{" "}
                <Link
                  href="/politica-cookies"
                  className="hover:text-amarillo underline transition-colors"
                >
                  Política de Cookies
                </Link>
                .
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={rejectAll}
                  className="border-white hover:border-amarillo text-white text-xs btn-secondary"
                >
                  Rechazar
                </button>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="border-white hover:border-amarillo text-white text-xs btn-secondary"
                >
                  {showDetails ? "Ocultar" : "Personalizar"}
                </button>
                <button
                  onClick={acceptAll}
                  className="hover:text-white text-xs btn-primary"
                >
                  Aceptar todas
                </button>
              </div>
            </div>

            {/* Granular options — animated expand */}
            <AnimatePresence initial={false}>
              {showDetails && (
                <motion.div
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 px-5 pt-4 pb-5 border-gray-700 border-t">
                    {categories.map((cat) => (
                      <div
                        key={cat.key}
                        className="flex justify-between items-start gap-4"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{cat.label}</p>
                          <p className="mt-0.5 text-gray-400 text-xs leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                        <div className="pt-0.5 shrink-0">
                          <Toggle
                            checked={
                              cat.disabled
                                ? true
                                : preferences[
                                    cat.key as keyof typeof preferences
                                  ]
                            }
                            onChange={(val) =>
                              !cat.disabled &&
                              setPreferences((prev) => ({
                                ...prev,
                                [cat.key]: val,
                              }))
                            }
                            disabled={cat.disabled}
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      onClick={handleSavePreferences}
                      className="mt-2 w-full hover:text-white text-xs btn-primary"
                    >
                      Guardar preferencias
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
