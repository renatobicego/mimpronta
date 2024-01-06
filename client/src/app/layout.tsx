import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'
import Header from './components/Header/Header'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from './components/Footer/Footer'
import { Providers } from './providers'
import { SpeedInsights } from "@vercel/speed-insights/next"
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont',
})

const montserratAlt = Montserrat_Alternates({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montAlter',
})

export const metadata: Metadata = {
  title: 'MIMPRONTA - Formación y Consultoría de impacto',
  description: '"Nunca dudes que un pequeño número de ciudadanos comprometidos puedan cambiar el mundo. De hecho, es lo único que lo ha logrado"',
  openGraph: {
    title: "MIMPRONTA - Formación y Consultoría de impacto",
    description: '"Nunca dudes que un pequeño número de ciudadanos comprometidos puedan cambiar el mundo. De hecho, es lo único que lo ha logrado"',
    images: [{
      url: 'https://firebasestorage.googleapis.com/v0/b/mimpronta-6fa99.appspot.com/o/weeeb.jpg?alt=media&token=150c556a-b34b-453c-ba21-3c9fef9d7291'
    }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!overflow-x-hidden scroll-smooth'>
      <body className={`${montserrat.variable} ${montserratAlt.variable} bg-white`}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Header />
              {children}
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
