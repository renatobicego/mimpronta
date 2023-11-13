import Image from 'next/image'

const values = [
    {
        text: 'Una forma más armoniosa de habitar el planeta',
        image: 'world.png'
    },
    {
        text: 'Si el bien no es común, entonces no es bien',
        image: 'handHeart.png'
    },
    {
        text: 'Más colaboración, menos competencia',
        image: 'people.png'
    },
    {
        text: 'En ecosistemas organizacionales que generan impacto social positivo',
        image: 'plant.png'
    },
    {
        text: 'Que el valor económico y valor social pueden combinarse',
        image: 'hands.png'
    },
]

const Values = () => {
    return (
        <section className="w-full bg-celeste flex flex-col items-center">
            <Image 
                alt='papel blanco 3 decorativo'
                priority
                width={1000}
                height={1000}
                className='w-full z-10 -scale-x-100'
                src={'/papeles/papelBlanco.png'}
            />
            <h3 className="title-size text-white">
                ¿En qué creemos?
            </h3>
            <ul className="w-3/4">
                {
                    values.map((value, i) => (
                        <li key={i} className="flex items-center gap-4 py-4 px-8 text-white bg-azul bg-opacity-50 rounded-[20px]
                                        paragraph-size">
                            <Image 
                                src={'/icons/' + value.image}
                                width={40}
                                height={40}
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