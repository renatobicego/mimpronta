

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
    switch(marginTop){
        case('5'): 
            marginClass = 'lg:mt-5'
            break
        case('16'): 
            marginClass = 'lg:mt-16'
            break
        case('7'): 
            marginClass = 'lg:mt-7'
            break
        case('12'): 
            marginClass = 'lg:mt-12'
            break
    }

    return (
        <div className={`flex flex-col items-start pt-7 pl-9 pr-7 pb-7 lg:pb-44 gap-1
                    bg-celeste bg-opacity-50 text-white rounded-[20px]
                    ${marginClass} lg:hover:-translate-y-5 transition-all duration-300
                    ${colSpan}` }>
            <h6 className="font-title font-semibold text-lg lg:text-xl 2xl:text-2xl">
                {title}
            </h6>
            <ul className="flex flex-col items-start gap-4 list-disc list-inside mt-2">
                {description.map((item, i) => (
                    <li key={i} className="paragraph-size lg:text-sm xl:text-base text-white" >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceCard