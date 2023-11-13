import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className='mt-[10vh] lg:mt-[15vh] w-[80dvw] lg:w-[60dvw] flex flex-col items-center gap-4 relative'>
        <p role='definition' className='phrase-size text-center font-semibold md:w-[75%] font-title mb-4' >
            Transformamos habilidades en <span className='font-extrabold'>propósitos</span>, 
            intenciones en <span className=' font-extrabold'>acciones</span> , que ayuden a generar un 
            <span className='text-azul font-extrabold'> impacto</span> social positivo. 
        </p>
        <p role='definition' className='paragraph-size text-center font-semibold md:w-3/4'>
            Combinamos una impronta de negocios, con una impronta social, facilitando herramientas 
            prácticas de Innovación, Marketing, Responsabilidad social corporativa (RSC) y Sostenibilidad, 
            para lograr una entrega de valor combinado. 
        </p>
        <button role='button' className='btn-primary mt-4 '>
            Sobre Mimpronta
        </button>
    </section>
  )
}

export default AboutUs