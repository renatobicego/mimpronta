"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID as string;

export default function GoogleAnalyticsConsent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (!GA_ID) return;
    const url = pathname + searchParams.toString();
    window.gtag?.("config", GA_ID, { page_path: url });
  }, [pathname, searchParams]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });

            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
