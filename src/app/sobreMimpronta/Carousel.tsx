"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Carousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const y = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className='h-[300vh] relative flex flex-col items-center w-full'>
            <div
                className="sticky top-[10vh] md:top-[12vh] lg:top-[12vh] flex h-[90vh] md:h-[95vh] lg:h-screen items-center overflow-x-clip self-start w-full">
                <Image 
                    alt='fondo'
                    priority
                    width={3000}
                    height={3000}
                    className='absolute left-0 top-0 w-full object-cover -z-10 h-[90vh] md:h-[95vh] lg:h-screen'
                    src={'/papeles/fondoSobreNosotros.png'}
                />
                <Image 
                    alt='papel blanco decorativo'
                    priority
                    width={1000}
                    height={1000}
                    className='absolute left-0 top-0 w-full z-10'
                    src={'/papeles/papelBlanco.png'}
                />
                <Image 
                    alt='regadera decorativa'
                    priority
                    width={200}
                    height={200}
                    className='absolute left-0 top-0 z-10 w-1/3 sm:w-auto 3xl:w-1/5'
                    src={'/collages/regadera.png'}
                />
                <Image 
                    alt='garabato decorativo'
                    priority
                    width={1000}
                    height={1000}
                    className='absolute left-12 lg:left-4 top-0 lg:-top-16 scale-125 lg:scale-100 3xl:scale-150 3xl:top-[12vh] 3xl:left-[15vw]'
                    src={'/collages/garabatoRosa.png'}
                />
                <Image 
                    alt='lineas decorativas'
                    priority
                    width={200}
                    height={200}
                    className='absolute left-[65%] top-4 md:left-[80%] md:top-16 -rotate-[25deg] lg:rotate-0 w-1/3 sm:w-auto 3xl:w-1/5'
                    src={'/collages/lineasRosa.png'}
                />
                <motion.div 
                    style={{ y }}
                    className="text-negro flex flex-col items-center gap-[50vh] w-full absolute text-center top-[25%] lg:top-[20%]"
                    >
                        <div className= "w-[90%] sm:w-4/5 lg:w-1/2">
                            <h3 className="title-size mb-6">¿Quiénes so<span className="-scale-x-100 inline-block text-rosa">m</span>os?</h3>
                            <h5 className="phrase-size leading-relaxed"> 
                                <span className="font-text">N</span>os lo preguntamos todos los días.
                                El mundo cambia y nosotros junto a él. 
                            </h5>
                        </div>
                        <p
                            className="phrase-size font-normal font-text text-negro relative 
                                        z-10 w-[80%] sm:w-3/5 lg:w-1/2 2xl:w-3/5 text-justify leading-phrase"
                            >
                                <span className="font-bold font-title">
                                    mi<span className="-scale-x-100 inline-block text-rosa">m</span>pronta 
                                </span> 
                                {' '}nace de un genuino deseo por ayudar y acompañar 
                                a personas y empresas que quieran emprender el camino de 
                                <span className="font-semibold"> combinar sus habilidades con las necesidades del mundo.</span> 

                        </p>
                        <div className= "w-[90%] sm:w-4/5 lg:w-3/5 2xl:w-1/2 flex flex-col items-center">
                            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-normal font-text text-negro relative z-10  text-justify">
                            A través del desarrollo de <span className="font-semibold">negocios con propósito </span> 
                            o a través de la <span className="font-semibold">integración y visibilización </span>  
                            de valores y compromisos de  responsabilidad social.  
                            <span className="font-semibold"> Nuestro propósito es transformar intenciones en verdadero impacto social.</span> 
                            </p>
                        </div>
                        <h4
                            className="phrase-size text-negro relative z-10 w-[90%] sm:w-4/5 lg:w-3/5 
                                        leading-relaxed text-center font-semibold italic"
                            >
                                {'"'}<span className="font-text">N</span>unca dudes que un pequeño número de ciudadanos 
                                compro<span className="font-bold text-rosa">m</span>etidos 
                                puedan cambiar el mundo. De hecho, es lo único que lo ha logrado{'"'}.
                        </h4>
                </motion.div>
                <Image 
                    alt='collages personas'
                    width={1000}
                    height={1000}
                    className='z-10  md:w-full lg:w-3/4 2xl:w-3/5  absolute bottom-0 right-0'
                    src={'/collages/personas.png'}
                />
                <Image 
                    alt='papel blanco 2 decorativo'
                    priority
                    width={1000}
                    height={1000}
                    className='absolute left-0 bottom-0 w-full z-10'
                    src={'/papeles/papelBlanco2.png'}
                />
            </div>
        </section>
    )
}

export default Carousel