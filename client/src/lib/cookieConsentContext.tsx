"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./storageHelper";

export type ConsentValue = "granted" | "denied";

export interface CookieConsent {
  analytics: ConsentValue;
  marketing: ConsentValue;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  saveConsent: (consent: CookieConsent) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(
  null,
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const stored = getLocalStorage(
      "cookie_consent",
      null,
    ) as CookieConsent | null;
    setConsent(stored);
  }, []);

  useEffect(() => {
    if (consent === null) return;
    window.gtag?.("consent", "update", {
      analytics_storage: consent.analytics,
      ad_storage: consent.marketing,
    });
  }, [consent]);

  const saveConsent = (newConsent: CookieConsent) => {
    setLocalStorage("cookie_consent", newConsent);
    setConsent(newConsent);
  };

  const acceptAll = () =>
    saveConsent({ analytics: "granted", marketing: "granted" });

  const rejectAll = () =>
    saveConsent({ analytics: "denied", marketing: "denied" });

  const resetConsent = () => {
    localStorage.removeItem("cookie_consent");
    setConsent(null);
  };

  return (
    <CookieConsentContext.Provider
      value={{ consent, saveConsent, acceptAll, rejectAll, resetConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx)
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider",
    );
  return ctx;
}
