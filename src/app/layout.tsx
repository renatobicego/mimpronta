import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'
import Header from './components/Header/Header'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from './components/Footer/Footer'

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
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!overflow-x-hidden scroll-smooth'>
      <body className={`${montserrat.variable} ${montserratAlt.variable} touch-pan-up bg-white`}>
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
      </body>
    </html>
  )
}
