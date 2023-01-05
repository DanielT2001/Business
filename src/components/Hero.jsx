import React, { useState } from 'react'
import { gsap } from 'gsap/all';
import Menu from './menu';
import MenuButton from './menuButton';

function Hero() {
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        gsap.fromTo('.menu', { x: 1800, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.easeOut' })
        setMenu(true)
    }
    const closeMenu = () => {
        setMenu(false)
    }
    return (
        <>
            <Menu closeMenu={closeMenu} menu={menu} />
            <section className="bg-zinc-50">
                <header className='header flex justify-between shadow-md px-2 md:px-4 lg:px-12 items-center md:shadow-2xl z-10 w-full bg-white'>
                    <div className="flex items-center w-56 scale-75 sm:scale-100">
                        <img src="logo192.png" alt="" className="w-2/5 scale-50" />
                        <div className="font-semibold">DLUX BUSINESS</div>
                    </div>
                    <div className="hidden lg:flex space-x-5">
                        <a href="/" className="uppercase font-semibold">HOME</a>
                        <a href="/" className="uppercase font-normal hover:text-emerald-400 duration-500">ABOUT</a>
                        <a href="/" className="uppercase font-normal hover:text-emerald-400 duration-500">SERVICES</a>
                        <a href="/" className="uppercase font-normal hover:text-emerald-400 duration-500">SHOWCASE</a>
                        <a href="/" className="uppercase font-normal hover:text-emerald-400 duration-500">BLOG</a>
                        <a href="/" className="uppercase font-normal hover:text-emerald-400 duration-500">CONTACT</a>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-0 mr-4 lg:mr-0">
                        {
                            /* <button className='bg-emerald-400 px-8 py-3 rounded-full text-white font-normal shadow-green hover:bg-gradient-to-br hover:bg-gray-700 hover:shadow-xl duration-500 '>
                            PURCHASE
                            </button> */
                        }
                        <button className='rounded-full text-sm font-light px-10 py-4 gradient-button transition-colors scale-75 sm:scale-100 duration-500'>PURCHASE</button>
                        {
                            /* <img src="Phlox/buy.svg" alt="" className="hidden md:block scale-150" /> */
                        }
                        <MenuButton openMenu={openMenu} />
                    </div>
                </header>
            </section>
        </>);
}

export default Hero