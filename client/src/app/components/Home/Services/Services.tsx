import Image from "next/image"
import ServiceCard from "./ServiceCard"
import Link from "next/link"

const services = [
  {
    title: 'Inspiramos',
    description: ['Acompañamiento para generar impacto social sostenible dentro de un modelo de negocio viable.',
                  'Guía para integrar y visibilizar valores y compromisos de responsabilidad social.'],
    marginTop: '5'
  },
  {
    title: 'Manifestamos',
    description: ['Desarrollo de Plan de Marketing responsable.', 'Transición empresarial hacia nuevos modelos de negocio de impacto.'],
    marginTop: '16'
  },
  {
    title: 'Co creamos',
    description: ['Generación de programas de impacto y laboratorios de innovación social.', 
                  'Creación de contenido formativo a medida para la implementación de estrategias de RSC y Sostenibilidad.'],
    marginTop: '7'
  },
]

const Services = () => {
  return (
    <section className="w-full bg-azul px-[5%] md:px-[8.335%] pt-4 lg:pt-0 pb-20 xsm:pb-24 flex flex-col gap-4 items-start relative -mt-0.5">
      <div id='servicios' className='invisible absolute -top-32 3xl:-top-44' ></div>
      <h4 className="title-size text-white">
        <span className="font-text">N</span>uestros servicios
      </h4>
      <div className="w-[98%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
        {services.map((service, i) => 
          <ServiceCard 
            key={i}
            title={service.title} 
            description={service.description}
            colSpan={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''} 
            marginTop={service.marginTop}/>)}
      </div>
      <Link href={'/#contacto'} className="self-center">
        <button className="paragraph-size font-semibold text-white flex items-center 
                            gap-2 lg:hidden py-3 px-4 sm:py-4 sm:px-6 rounded-3xl w-max mb-4">
          Cuéntanos qué necesitas 
          <Image 
            src="/icons/flecha.png"
            className="mt-[1px]"
            width={22}
            height={22} 
            alt="Icono flecha" /> 
        </button>
      
      </Link>
      <Image 
        src={'/collages/arboless.png'}
        width={1500}
        priority
        height={1500}
        alt="collage árboles"
        className="absolute z-[11] top-[92%] md:top-[87%] lg:top-[54%] 2xl:top-[56%] 3xl:top-[48%] scale-150 
                  translate-x-1/4 md:scale-100 md:translate-x-0  left-0 w-full"
      />
    </section>
  )
}

export default Services