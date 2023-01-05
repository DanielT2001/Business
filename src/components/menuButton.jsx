import React from 'react'
import { BsList } from 'react-icons/bs';

function MenuButton({ openMenu }) {
    return (
        <>
            <div className="block lg:hidden">
                <BsList className='w-7 h-7 hover:text-emerald-400 duration-500 cursor-pointer' onClick={openMenu} />
            </div>
        </>
    )
}

export default MenuButton