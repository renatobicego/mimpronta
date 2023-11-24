import Image from 'next/image'
import React from 'react'

const PhraseCollage = () => {
  return (
    <>
        <Image 
            src={'/papeles/papelMarron1.png'} 
            alt='papel marron 1'
            width={250}
            height={700} 
            className='absolute -left-2 lg:left-0 top-[5%] 
                        rotate-180 -scale-x-100 h-[35%] xsm:h-[40%] w-auto lg:h-auto
                        lg:rotate-0 lg:scale-x-100'
            />
        <h3 role='heading' className='phrase-size leading-phrase text-center font-semibold 
            size-section sm:w-[80%] lg:w-[65%] 2xl:w-[60%] relative z-10
            mt-48 xsm:mt-52 md:mt-[30vh] lg:mt-40 lg:mb-4 3xl:mt-72'>
            El mundo atraviesa momentos 
            desafiantes, y con tu
            <span className='font-extrabold'> impronta </span> puedes transformarte
            en <span className='font-extrabold text-rosaOscuro'> agente de cambio</span>
        </h3>
        <Image 
            role='img'
            src={'/collages/mundo.png'}
            alt='Collage mundo'
            priority
            width={1000}
            height={800}
            className='scale-[1.35] mt-[20vh] xsm:mt-[15vh] sm:mt-[15vh] lg:mt-6 lg:w-auto overflow-auto lg:scale-100
                        relative z-40 3xl:w-[60%]'
            />
    </>
  )
}

export default PhraseCollage