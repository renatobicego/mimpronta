import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
    {
        href: '/sobreMimpronta',
        text: 'Sobre Mimpronta'
    },
    {
        href: '/blog',
        text: 'Blog'
    },
    {
        href: '/#services',
        text: 'Servicios'
    },
    {
        href: '/#contact-form',
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
    <footer className='w-full bg-negro text-white py-16 space-section flex justify-between  font-text 
                        flex-wrap-reverse gap-6 items-start md:flex-nowrap md:items-end'>
        <div className='flex flex-col items-start gap-6 w-full sm:w-3/4 md:w-3/5'>
            <nav className='flex flex-col gap-6 xsm:gap-3 xsm:justify-between xsm:flex-row sm:gap-12 sm:justify-start w-full
                            text-sm md:text-base'>
                <ul className='flex flex-col gap-3'>
                    {
                        links.map((link, i) => (
                            <a key={i} href={link.href}>
                                <li >{link.text}</li>   
                            </a>
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