import React from 'react'
import { BsFillXCircleFill } from 'react-icons/bs';

function Menu({ closeMenu, menu }) {
    return (
        <>
            <section className={`block lg:hidden menu absolute flex-col items-start justify-center pl-16 top-0 ${menu ? '' : '-right-full'} h-screen w-full bg-gradient-to-br from-lime-500 via-green-500 to-teal-500 z-20`}>
                <BsFillXCircleFill className='absolute cursor-pointer top-12 right-14 z-10 w-8 h-8 text-black hover:text-white duration-500' onClick={closeMenu} />
                <div className="flex flex-col items-start space-y-8 mt-24">
                    <a href="/" className="uppercase font-semibold">HOME</a>
                    <a href="/" className="uppercase font-normal hover:text-white duration-500">ABOUT</a>
                    <a href="/" className="uppercase font-normal hover:text-white duration-500">SERVICES</a>
                    <a href="/" className="uppercase font-normal hover:text-white duration-500">SHOWCASE</a>
                    <a href="/" className="uppercase font-normal hover:text-white duration-500">BLOG</a>
                    <a href="/" className="uppercase font-normal hover:text-white duration-500">CONTACT</a>
                </div>
            </section>
        </>
    )
}

export default Menu