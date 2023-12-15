import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'
import Header from './components/Header/Header'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from './components/Footer/Footer'
import { Providers } from './providers'

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
  title: 'Mimpronta',
  description: 'Transformamos habilidades en propósitos e intenciones en acciones, ayudando a generar un impacto social positivo.',
  openGraph: {
    title: "Mimpronta - Consultora de Impacto",
    description: 'Transformamos habilidades en propósitos e intenciones en acciones, ayudando a generar un impacto social positivo.',
    images: [{
      url: 'https://firebasestorage.googleapis.com/v0/b/mimpronta-6fa99.appspot.com/o/logo.png?alt=media&token=0ffc813c-1469-4852-8259-874279cb6d11'
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
