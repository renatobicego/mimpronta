import Image from "next/image"
import ServiceCard from "./ServiceCard"

const services = [
  {
    title: 'Inspirar',
    description: ['Acompañamiento para generar impacto social sostenible dentro de un modelo de negocio viable.',
                  'Guía para integrar y visibilizar valores y compromisos de responsabilidad social.'],
    marginTop: '5'
  },
  {
    title: 'Manifestar',
    description: ['Desarrollo de Plan de Marketing responsable.', 'Transición empresarial hacia nuevos modelos de negocio de impacto.'],
    marginTop: '16'
  },
  {
    title: 'Crear',
    description: ['Generación de programas de impacto y laboratorios de innovación social.', 
                  'Creación de contenido formativo a medida para la implementación de estrategias de RSC y Sostenibilidad.'],
    marginTop: '7'
  },
]

const Services = () => {
  return (
    <section className="w-full bg-azul px-[5%] md:px-[8.335%] pt-4 lg:pt-0 pb-20 xsm:pb-24 flex flex-col gap-4 items-start relative">
      <div id="services" className='invisible absolute -top-20 xsm:-top-32 md:-top-44' ></div>
      <h4 className="title-size text-white">
        <span className="font-text">N</span>uestros servicios para:
      </h4>
      {/* <p className="paragraph-size text-white lg:w-4/5"> 
          Cada negocio tiene su impronta, por lo tanto nuestros servicios serán a medida 
          de tu personalidad para ayudarte en la entrega de valor combinado.
      </p> */}
      <div className="w-[98%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
        {services.map((service, i) => 
          <ServiceCard 
            key={i}
            title={service.title} 
            description={service.description}
            colSpan={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''} 
            marginTop={service.marginTop}/>)}
      </div>
      <button className="paragraph-size font-semibold text-white bg-negro bg-opacity-40 flex items-center 
                          gap-2 absolute z-40 bottom-0 left-1/2 -translate-x-1/2 lg:hidden
                          py-3 px-4 sm:py-4 sm:px-6 rounded-3xl w-max">
        Cuéntanos qué necesitas 
        <Image 
          src="/icons/flecha.png"
          className="mt-[1px]"
          width={22}
          height={22} 
          alt="Icono flecha" /> 
      </button>
      <Image 
        src={'/collages/arboles.png'}
        width={1500}
        height={1500}
        alt="collage árboles"
        className="absolute z-[11] top-[92%] md:top-[87%] lg:top-[52%] scale-150 
                  translate-x-1/4 md:scale-100 md:translate-x-0  left-0 w-full"
      />
    </section>
  )
}

export default Services