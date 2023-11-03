import Image from 'next/image'
import React from 'react'

const links = [
    {
        href: '',
        text: 'Sobre Mimpronta'
    },
    {
        href: '',
        text: 'Blog'
    },
    {
        href: '',
        text: 'Servicios'
    },
    {
        href: '',
        text: 'Contacto'
    },
]

const legalLinks = [
    {
        href: '',
        text: 'Cookies'
    },
    {
        href: '',
        text: 'Términos y condiciones'
    },
    {
        href: '',
        text: 'Política de privacidad'
    },
]

const Footer = () => {
  return (
    <footer className='w-full bg-negro text-white py-16 px-[5%] lg:px-[8.335%] flex justify-between items-end font-text'>
        <div className='flex flex-col items-start gap-6'>
            <nav className='flex gap-12'>
                <ul className='flex flex-col gap-3'>
                    {
                        links.map((link, i) => (
                            <li key={i}>{link.text}</li>
                        ))
                    }
                </ul>
                <ul className='flex flex-col gap-3'>
                    {   
                        legalLinks.map((link, i) => (
                            <li key={i}>{link.text}</li>
                        ))
                    }
                </ul>
            </nav>
            <Image 
                src={'/icons/Linkedin.png'}
                alt='link profile linkedin'
                width={40}
                height={40} />
        </div>
        
        <Image 
            src={'/logoBlanco.png'}
            alt='logo footer'
            width={150}
            height={150}
        />
    </footer>
  )
}

export default Footer