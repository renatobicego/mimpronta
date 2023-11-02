
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
const PostCard = ({
    title,
    subtitle,

} : {
    title: string,
    subtitle: string
}) => {
  return (
    <SwiperSlide className='flex !w-[45%] flex-col items-start'>
        <h6 className='font-text text-lg lg:text-xl 2xl:text-2xl mb-4'>{title}</h6>
        <p className='line-clamp-3 text-base 2xl:text-lg mb-4'>
            {subtitle}
        </p>
        <Link href={''}>
            <button className='border-2 border-negro px-6 pb-0.5 font-medium rounded-[10px] text-lg'>
                Leer post
            </button>
        </Link>
    </SwiperSlide>
  )
}

export default PostCard