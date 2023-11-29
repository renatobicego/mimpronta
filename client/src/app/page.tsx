
import Image from 'next/image'
import AboutUs from './components/Home/AboutUs'
import PhraseCollage from './components/Home/PhraseCollage'
import Services from './components/Home/Services/Services'
import Blog from './components/Home/Blog/Blog'
import Contact from './components/Home/Contact/Contact'

export default function Home() {
  return (
    <main id="inicio" className="main overflow-hidden">
      <Image 
        src={'/papeles/papelMarron4.png'} 
        alt='papel marron 2'
        width={500}
        height={1200} 
        className='absolute left-[83vw] sm:left-[85vw] top-10 lg:top-[85vh] 
                  rotate-[185deg] -scale-x-100 h-[90vh] xsm:h-[100vh] w-auto lg:h-auto
                  lg:rotate-0 lg:scale-x-100 z-30'
      />
      <section className='flex w-full h-full overflow-hidden flex-col items-center relative -mt-32'>
        <Image 
          alt='fondo'
          priority={true}
          width={1500}
          height={1500}
          className='absolute left-0 top-0 w-full object-cover h-[200vh] sm:h-[300vh] md:h-[200vh] lg:h-[320vh] opacity-50'
          src={'/papel.jpg'}
        />
        <PhraseCollage />
        <AboutUs />
        <div className='relative w-full'>
          <Image 
            src={'/papeles/flechaAzul.png'}
            alt='Flecha azul'
            priority
            width={200}
            height={400}
            className='h-auto w-[20%] lg:w-auto absolute left-0 bottom-1/3 md:bottom-1/2 lg:bottom-1/2'
          />
          <Image 
            src={'/papeles/papelMarron3.png'}
            alt='Papel roto quienes somos'
            priority
            width={200}
            height={400}
            className='h-auto w-[30%] sm:w-[25%] absolute left-[80vw] sm:left-[84vw] 
                      bottom-0
                      lg:hidden rotate-[195deg]  -scale-x-100 z-[49]'
          />
          <Image 
            src={'/papeles/papelAzulRoto.png'}
            alt='Papel roto azul'
            priority
            width={2000}
            height={500}
            className='w-full h-auto mt-[10vh] relative '
          />
        </div>
      </section>
      <Services />
      <Blog />
      <Contact />
    </main>
  )
}
