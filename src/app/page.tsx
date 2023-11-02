
import Image from 'next/image'
import AboutUs from './components/Home/AboutUs'
import PhraseCollage from './components/Home/PhraseCollage'
import Services from './components/Home/Services/Services'
import Blog from './components/Home/Blog/Blog'

export default function Home() {
  return (
    <main className="flex w-full overflow-hidden min-h-screen flex-col items-center pt-28 relative">
      <Image 
        src={'/papeles/papelMarron4.png'} 
        alt='papel marron 2'
        width={500}
        height={1200} 
        className='absolute left-[85dvw] top-0 lg:top-[30%] 
                  rotate-[185deg] -scale-x-100 h-[35%] xsm:h-[40%] w-auto lg:h-auto
                  lg:rotate-0 lg:scale-x-100 z-30'
      />
      <Image 
        src={'/papeles/papelMarron3.png'}
        alt='Papel roto quienes somos'
        priority
        width={200}
        height={400}
        className='h-auto w-[30%] sm:w-[20%] absolute left-[80vw] sm:left-[87vw] 
                  top-[37%] xsm:top-[40%] md:top-[47%]
                  lg:hidden rotate-[195deg]  -scale-x-100 z-20'
      />
      <section className='flex w-full h-full overflow-hidden flex-col items-center relative -mt-32'>
        <Image 
          alt='fondo'
          priority
          width={3000}
          height={3000}
          className='absolute left-0 top-0 w-full object-cover -z-10 h-[200vh] sm:h-[300vh] md:h-[200vh] lg:h-[320vh] opacity-50'
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
            className='h-auto w-[20%] -z-10 lg:w-auto absolute left-0 md:-top-1/2 lg:-top-full'
          />
          <Image 
            src={'/papeles/papelAzulRoto.png'}
            alt='Papel roto azul'
            priority
            width={2000}
            height={500}
            className='w-full h-auto mt-[10vh] relative -z-10 '
          />
        </div>
      </section>
      <Services />
      <Blog />
    </main>
  )
}
