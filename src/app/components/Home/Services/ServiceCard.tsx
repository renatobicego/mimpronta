import Image from "next/image"
import Link from "next/link"


const ServiceCard = ({
    title, 
    description, 
    marginTop,
    colSpan
}: {
    title: string,
    description: Array<string> ,
    marginTop: string,
    colSpan: string
}) => {
    let marginClass = ''
    let pBottom = ''
    switch(marginTop){
        case('5'): 
            marginClass = 'lg:mt-5'
            pBottom = 'pb-24'
            break
        case('16'): 
            marginClass = 'lg:mt-16'
            pBottom = 'pb-20'
            break
        case('7'): 
            marginClass = 'lg:mt-7'
            pBottom = 'pb-20'
            break
    }

    return (
        <div className={`flex flex-col items-start pt-7 pl-9 pr-7 pb-7 lg:pr-10 lg:pb-32 gap-1
                    bg-celeste bg-opacity-50 text-white rounded-[20px] relative
                    ${marginClass} lg:hover:-translate-y-5 transition-all duration-300
                    ${colSpan} lg:[&>a]:hover:visible` }>
            
            <Link href={'/#contact-form'} 
                    className={`absolute -left-2 -top-2 w-[105%] h-[110%] invisible paragraph-size font-semibold 
                            text-white  flex justify-center items-center lg:hover:backdrop-blur-sm 
                            z-10 rounded-[20px]`}>
                <button className={`flex items-center gap-2 ${pBottom}`}>
                        Me interesa
                        <Image 
                            src="/icons/flecha.png"
                            className="mt-[1px]"
                            width={22}
                            height={22} 
                            alt="Icono flecha" />  
                </button>
            </Link>
            <h6 className="font-title font-semibold text-lg lg:text-xl 2xl:text-2xl">
                {title}
            </h6>
            <ul className="flex flex-col items-start gap-2  mt-2">
                {description.map((item, i) => (
                    <li key={i} className="paragraph-size lg:text-sm xl:text-base text-white text-justify" >
                        - {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceCard