import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import Link from "next/link"
import { IconMenu2 } from '@tabler/icons-react'
import { DarkModeButton } from './DarkMode'
import { links } from '../links'

interface props {
    toggleOpen: () => void
}

export function NavBar ({toggleOpen}: props) {

    let { theme } = useTheme()

    return(
        <header className="h-scren w-screen p-3 fixed z-50">
            <div className="mx-8 max-md:mx-3 py-2 px-4 bg-white bg-opacity-0 backdrop-blur-lg rounded-lg flex items-center justify-between">
                <div>
                    <a className='flex items-center hover:text-sky-400 gap-3' href="/">
                        {theme === 'dark' ? <img className='h-10' src="https://res.cloudinary.com/da3li8fso/image/upload/v1697205240/sabdzujlg9ocxdivnqub.png" alt="logo" /> :
                        <img className='h-10' src="https://res.cloudinary.com/da3li8fso/image/upload/v1697205240/bcwzcklu9k7y8x8jy0e1.png" alt="logo" />}
                        {/* <img className='h-10 rounded-full' src="https://i.ibb.co/cct4y5x/Imagen-de-Whats-App-2023-07-20-a-las-14-47-04.jpg" alt="logo" /> */}
                        {/* <p className="font-['Oswald'] text-lg">JHONATAN BOLIVAR</p> */}
                    </a>
                </div>
                <div>
                    <nav className='flex gap-4'>
                        <ul className='flex items-center gap-8 list-none max-lg:hidden'>
                            {links.map(({ label, route }) => {
                                return(
                                    <li className='block font-bold hover:text-sky-400' key={route}>
                                        <Link href={route}>
                                            {label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                            <DarkModeButton/>
                            <button onClick={() => toggleOpen()} className='hidden max-lg:list-item'><IconMenu2/></button>
                    </nav>

                </div>
            </div>
        </header>
    )
}