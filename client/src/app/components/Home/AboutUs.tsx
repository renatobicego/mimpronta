import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <section className='mt-0 sm:mt-[10vh] w-[80dvw] lg:w-[75dvw] flex flex-col items-center gap-4 relative'>
        <h2 role='definition' className='phrase-size text-center leading-phrase font-semibold md:w-[75%] font-title mb-4' >
            Transformamos habilidades en <span className='font-extrabold'>propósitos</span> e
            intenciones en <span className=' font-extrabold'>acciones</span>, ayudando a generar un 
            <span className='text-azul font-extrabold'> impacto</span> social positivo. 
        </h2>
        <p role='definition' className='paragraph-size leading-8 lg:leading-10 text-center font-semibold md:w-3/4 list-none'>
          Combinamos una impronta de negocios con una impronta social, facilitando 
          herramientas prácticas de 
          <span className='font-extrabold'> Innovación, Marketing Responsable y Sostenibilidad, </span>
          para lograr una entrega de valor combinado. 
        </p>
        <Link href={'/sobreMimpronta'}>
          <button role='button' className='btn-primary mt-4 '>
              Sobre mimpronta
          </button>
        </Link>
    </section>
  )
}

export default AboutUs