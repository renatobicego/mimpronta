import React from 'react'

const AboutUs = () => {
  return (
    <section className='mt-[10vh] lg:mt-[15vh] w-[80dvw] lg:w-[60dvw] flex flex-col items-center gap-4'>
        <p role='definition' className='paragraph-size text-center font-semibold md:w-[70%]'>
            Transformamos habilidades en propósitos, intenciones en acciones, que ayuden a generar un impacto social positivo. 
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