"use client";

import { useCookieConsent } from "@/lib/cookieConsentContext";

export default function ManageCookiesBtn() {
  const { resetConsent } = useCookieConsent();
  return (
    <button
      onClick={resetConsent}
      className="text-gray-400 hover:text-white text-xs transition-colors"
    >
      Gestionar cookies
    </button>
  );
}
