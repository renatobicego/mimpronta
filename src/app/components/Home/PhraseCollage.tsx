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
            size-section lg:w-[65%] 2xl:w-[55%] 
            mt-48 xsm:mt-52 md:mt-[30vh] lg:mt-40 lg:mb-4'>
            El mundo atraviesa momentos 
            desafiantes, y cada persona con
            su <span className='font-extrabold'> impronta </span> puede transformarse
            en <span className='font-extrabold'> agente de cambio</span>
        </h3>
        <Image 
            role='img'
            src={'/collages/mundo.png'}
            alt='Collage mundo'
            priority
            width={1000}
            height={800}
            className='scale-[1.35] mt-[13vh] xsm:mt-[27vh] lg:mt-0 lg:w-auto overflow-auto lg:scale-100
                        relative z-40'
            />
    </>
  )
}

export default PhraseCollage