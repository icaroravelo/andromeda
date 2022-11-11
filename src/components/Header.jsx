import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import React, { useState } from 'react'
import { navLinks } from './constants'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className='flex flex-1 items-center justify-between'>
            {/* Name & Navbar */}
            <div className='flex items-center space-x-4'>
                <h1
                    className='text-gold text-3xl font-bold justify-start'>
                    Andromeda
                </h1>

                <li
                className='list-none cursor-pointer hidden md:flex
                space-x-4 text-gold mt-2'
                >
                    {navLinks.map((link) => {
                        return (
                            <a
                            className='transition-all duration-1000 hover:font-semibold'
                                key={link.link}
                            >
                                {link.name}
                            </a>
                        )
                    })}
                </li>
            </div>

            {/* User Infos */}
            <div>
                <div className='items-center space-x-1 right-0 ml-36'>
                    <img src="" alt="User" />
                </div>
            </div>

            {/* Responsive Menu */}
            <div className='md:hidden flex flex-1 justify-end items-center'>
                <img 
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-[20px] h-[20px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} z-50 bg-black-gradient absolute top-20 right-0 mx-4 bg-zinc-900/90 rounded-xl min-h-[200px] min-w-[175px] my-4 items-center`}>
                    <li className='list-none flex flex-col flex-1'>
                        {navLinks.map((link) => {
                            return (
                                <a
                                key={link.link}
                                className={`cursor-pointer text-[16px] mr-10 text-gold hover:font-semibold text-center flex-1 justify-center`}
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                    </li>
                </div>
            </div>

        </div>
    )
}

export default Header