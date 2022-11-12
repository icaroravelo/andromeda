import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import React, { useState } from 'react'
import image from '../assets/Ravelo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex flex-1 items-center justify-between'>
            {/* Name & Navbar */}
            <div className='flex items-center space-x-4'>
                <Link to="/">
                    <h1
                        className='text-gold text-3xl font-bold justify-start'>
                        Andromeda
                    </h1>
                </Link>

                <li
                    className='list-none cursor-pointer hidden md:flex
                space-x-4 text-gold mt-2'
                >
                    <Link to="/">
                        <p>Início</p>
                    </Link>

                    <Link to="/search">
                        <p>Pesquisar</p>
                    </Link>

                    <Link to="/recomendations">
                        <p>Recomendados</p>
                    </Link>

                    <Link to="/history">
                        <p>Histórico</p>
                    </Link>
                </li>
            </div>

            {/* User Infos */}
            <div>
                <div className='items-center space-x-1 right-0 ml-36 flex'>
                    <span className='text-gold'>Ravelo</span>
                    <img src={image} alt="User" className='h-[30px] rounded-full' />
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
                    <li className='list-none flex flex-col flex-1 cursor-pointer text-[16px] mr-10 text-gold text-center justify-center'>
                        <Link to="/">
                            <p className='hover:font-semibold'>Início</p>
                        </Link>

                        <Link to="/search">
                            <p className='hover:font-semibold'>Pesquisar</p>
                        </Link>

                        <Link to="/recomendations">
                            <p className='hover:font-semibold'>Recomendados</p>
                        </Link>

                        <Link to="/history">
                            <p className='hover:font-semibold'>Histórico</p>
                        </Link>
                    </li>
                </div>
            </div>

        </div>
    )
}

export default Header