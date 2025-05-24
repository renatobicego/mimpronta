import Image from 'next/image'

const values = [
    {
        text: 'Una forma más armoniosa de habitar el planeta',
        image: 'world.svg',
        imageSize: 60,
        textWidth: 'w-full md:w-[49.5%] lg:w-[32.7%]',
        gap: 'gap-6 md:gap-8 '
    },
    {
        text: 'Más colaboración, menos competencia',
        image: 'people.svg',
        imageSize: 60,
        textWidth: 'w-full md:w-[49.5%] lg:w-[32.7%]',
        gap: 'gap-6 md:gap-8'
    },
    {
        text: 'Si el bien no es común, entonces no es bien',
        image: 'handHeart.svg',
        imageSize: 60,
        textWidth: 'w-full md:w-[49.5%] lg:w-[32.7%]',
        gap: 'gap-6 md:gap-8'
    },
    {
        text: 'Ecosistemas organizacionales que generan impacto social positivo',
        image: 'plant.svg',
        imageSize: 60,
        textWidth: ' w-full md:w-[49.5%] lg:w-[59%]',
        gap: 'gap-6 md:gap-8'
    },
    {
        text: 'Valor económico y valor social pueden combinarse',
        image: 'hands.svg',
        imageSize: 84,
        textWidth: 'w-full mx-auto md:w-[49.5%] lg:w-[39%]',
        gap: 'gap-6 md:gap-8 ' 
    },
]

const Values = () => {
    return (
        <section className="w-full bg-celeste flex flex-col items-center relative z-20 pb-20">
            <Image
                alt='papel blanco decorativo'
                priority
                width={1000}
                height={1000}
                className='w-full z-10 -mt-1 -scale-x-100'
                src={'/papeles/papelBlanco3.png'}
            />
            <Image
                alt='garabato decorativo'
                priority
                width={400}
                height={400}
                className='absolute left-0 top-1/3'
                src={'/collages/garabatoValores.png'}
            />
            <Image
                alt='garabato decorativo 2'
                priority
                width={200}
                height={200}
                className='absolute right-0 top-1/2'
                src={'/collages/flechaValores.png'}
            />
            <div className='relative w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/4 text-center mt-12 lg:mt-0'>
                <Image
                    alt='garabato decorativo 2'
                    priority
                    width={430}
                    height={430}
                    className='absolute w-full h-auto -top-[150%]  z-0'
                    src={'/collages/garabatoValores2.png'}
                />
                <h3 className="title-size text-white">
                    Creemos en
                </h3>
            </div>
            <ul className="w-4/5 sm:w-[65%] mt-8 flex justify-between flex-wrap relative z-10">
                {
                    values.map((value, i) => (
                        <li key={i} 
                            className={`flex flex-col items-center py-8 px-6 lg:px-10 text-white bg-azul 
                                        bg-opacity-50 rounded-[20px] paragraph-size ${value.textWidth} mb-2 ${value.gap} 
                                        lg:justify-start hover:scale-[1.02] transition text-center`}
                            style={{}}>
                            <Image 
                                src={'/icons/' + value.image}
                                className={``}
                                width={value.imageSize}
                                height={value.imageSize}
                                alt="Icono mundo" />
                            {value.text}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Values