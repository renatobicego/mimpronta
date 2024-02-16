import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import Header from "./components/Header/Header";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "./components/Footer/Footer";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

const montserratAlt = Montserrat_Alternates({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montAlter",
});

export const metadata: Metadata = {
  title: "Mimpronta",
  description: "Acompañamos a personas y empresas que buscan combinar sus habilidades con las necesidades del mundo.",
  keywords: [
    "Next.js",
    "Mimpronta",
    "ambiental",
    "impacto",
    "consciencia",
    "empresa",
  ],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "MIMPRONTA - Consultoría de impacto",
    url: "https://mimpronta.com/",
    siteName: "Mimpronta",
    locale: "es_ES",
    type: "website",
    description:
      "Acompañamos a personas y empresas que buscan combinar sus habilidades con las necesidades del mundo.",
    images:
      "https://mimpronta.com/thumbnail.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIMPRONTA - Consultoría de impacto",
    description:
      "Acompañamos a personas y empresas que buscan combinar sus habilidades con las necesidades del mundo.",
    images: [
      "https://mimpronta.com/thumbnail.jpg",
    ], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://mimpronta.com/",
    url: "https://mimpronta.com/",
    name: "Mimpronta",
    image:
      ["https://mimpronta.com/thumbnail.jpg", "https://mimpronta.com/thumbnailBg.jpg"],
    description:
      "Acompañamos a personas y empresas que buscan combinar sus habilidades con las necesidades del mundo.",
  };
  return (
    <html lang="en" className="!overflow-x-hidden scroll-smooth">
      <body
        className={`${montserrat.variable} ${montserratAlt.variable} !bg-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={<Loading />}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
