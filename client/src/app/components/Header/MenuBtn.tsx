"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const links = [
    {
        href: '/',
        text: 'Inicio'
    },
    {
        href: '/#servicios',
        text: 'Servicios'
    },
    {
        href: '/blog',
        text: 'Blog'
    },
    {
        href: '/sobreMimpronta',
        text: 'Sobre Mimpronta'
    },
]

const MenuBtn = () => {
    const [open, setOpen] = useState(false)
    const [animationOpenComplete, setAnimationOpenComplete] = useState(false);
    const [shrinkNav, setShrinkNav] = useState(false);

    // useEffect(() => {
    //     if(!open && shrinkNav){
    //         setShrinkNav(false)
    //     }
    // }, [shrinkNav, open])

    const handleAnimationEnd = () => {
        // Esta función se ejecutará al finalizar la animación
        setAnimationOpenComplete(true);
    };

    const handleOpen = () => {
        setOpen(true)
        setAnimationOpenComplete(false)
    }

    const handleClose = () => {
        setShrinkNav(true);
        
        setTimeout(() => {
            setOpen(false);
            setShrinkNav(false);
            setAnimationOpenComplete(false)
        }, 200);
    }


    if(open){
        return (
            <>
                <nav role="navigation" className={`hidden lg:flex-between py-1 px-3 xsm:py-1.5 xsm:px-4 lg:pl-12 lg:pr-6 
                    border-2 border-negro rounded-[10px] lg:rounded-2xl 
                    gap-2 lg:gap-10 font-semibold text-sm xsm:text-base
                    ${shrinkNav ? 'menu-animation-close' : 'menu-animation-open'}`}
                    onAnimationEnd={handleAnimationEnd}>
                    {links.map((link, i) => {
                        return (
                            <li onClick={handleClose} key={i} className={`opacity-0 list-none ${animationOpenComplete && !shrinkNav ? 'animate-opacity' : ''}`}>
                                <a href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
                    <Image 
                        src={'/icons/close.png'} 
                        alt="icono menú" 
                        onClick={handleClose}
                        className="w-3 h-3 xsm:w-4 xsm:h-4 cursor-pointer mr-1 menu-animation-open"
                        width={50} 
                        height={50}/>
                </nav>
                <div className="w-screen h-screen absolute left-0 top-0 backdrop-blur-sm lg:hidden"></div>
                <nav 
                    className={`h-screen w-screen xsm:w-[60vw] sm:w-[40vw] absolute top-0 left-0 xsm:left-[40vw] sm:left-[60vw] 
                                flex lg:hidden flex-col bg-negro text-white
                                pt-[4vh] sm:pt-[5.8vh] pl-10 pr-[9vw] xsm:px-[9vw] sm:px-[7vw]  gap-4
                                ${shrinkNav ? 'hg-menu-animation-close' : 'hg-menu-animation-open'} `}
                    onAnimationEnd={handleAnimationEnd}>
                    <Image 
                        src={'/icons/closeWhite.png'} 
                        alt="icono menú" 
                        onClick={handleClose}
                        className="w-3 h-3 xsm:w-4 xsm:h-4 cursor-pointer mr-1 self-end"
                        width={50} 
                        height={50}/>
                    {links.map((link, i) => {
                        return (
                            <li onClick={handleClose} key={i} className={`list-none font-semibold`}>
                                <a href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
                </nav>
            </>
        )
    }
    return (
        <button className={`flex-between py-1 px-3 xsm:py-1.5 xsm:px-4 xl:px-6 border-2 
            border-negro rounded-[10px] lg:rounded-2xl 
            gap-2 lg:gap-4 font-semibold text-sm xsm:text-base`}
            onClick={handleOpen}>
            <span className={`pb-0.5 lg:pb-0`}>
                Menú
            </span>
            <Image 
                src={'/icons/hgMenu.png'} 
                alt="icono menú" 
                className="w-5 h-5 xsm:w-6 xsm:h-6"
                width={50} 
                height={50}/>
        </button>
    )
}

export default MenuBtn