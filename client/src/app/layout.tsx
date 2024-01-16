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
  description: "Ayudamos a combinar habilidades con las necesidades del mundo.",
  keywords: [
    "Next.js",
    "Mimpronta",
    "ambiental",
    "impacto",
    "consciencia",
    "empresa",
  ],
  openGraph: {
    title: "MIMPRONTA - Formación y Consultoría de impacto",
    url: "https://mimpronta.com/",
    type: "website",
    description:
      "Ayudamos a combinar habilidades con las necesidades del mundo.",
    images:
      "/thumbnail.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIMPRONTA - Formación y Consultoría de impacto",
    description:
      "Ayudamos a combinar habilidades con las necesidades del mundo.",
    images: [
      "/thumbnail.jpg",
    ], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Mimpronta",
    image:
      "/thumbnail.jpg",
    description:
      "Ayudamos a combinar habilidades con las necesidades del mundo.",
  };
  return (
    <html lang="en" className="!overflow-x-hidden scroll-smooth">
      <body
        className={`${montserrat.variable} ${montserratAlt.variable} bg-white`}
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
