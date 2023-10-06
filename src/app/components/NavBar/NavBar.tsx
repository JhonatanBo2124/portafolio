'use client'
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import { IconSun, IconMoon, IconMenu2 } from '@tabler/icons-react'

interface props {
    toggleOpen: () => void
}

export function NavBar ({toggleOpen}: props) {
    const links = [
        {
          label: 'Inicio',
          route: '/'
        },
        {
          label: 'Sobre mí',
          route: '/about'
        },
        {
          label: 'Estudios',
          route: '/studies'
        },
        {
          label: 'Proyectos',
          route: '/proyects'
        },
        {
          label: 'Contacto',
          route: '/contact'
        }
      ]

      let [ theme, setTheme ] = useState(() => {
        // if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        //     return 'dark'
        // }
        return 'light'
      })

      const displayMenu = () => {
          const boton = document.querySelector('#boton')
          const menu = document.querySelector('#menu')
          
          boton?.addEventListener('click', () => {
            menu?.classList.toggle('max-lg:hidden')
          })
      }


      const iconsColor = theme === 'light' ? 'white' : 'white'
      const icon = theme === 'light' ? <IconMoon color={iconsColor}/> : <IconSun color={iconsColor}/>

      const handleChangeTheme = () => {
          setTheme( prevTheme => prevTheme === 'light' ? 'dark' : 'light')
      }
  
      useEffect(() => {
          if(theme === 'dark'){
              document.querySelector('html')?.classList.add('dark')
          } else {
              document.querySelector('html')?.classList.remove('dark')
          }
      }, [theme])
    return(
        <header className="h-scren w-screen p-3 fixed z-50">
            <div className="mx-8 py-2 px-4 bg-white bg-opacity-0 backdrop-blur-lg drop-shadow-lg rounded-lg flex items-center justify-between">
                <div>
                    <a className='flex items-center hover:text-sky-400 gap-3' href="#">
                        <img className='h-10' src="https://i.ibb.co/hWvVcG4/logo2.png" alt="logo" />
                        {/* <img className='h-10 rounded-full' src="https://i.ibb.co/cct4y5x/Imagen-de-Whats-App-2023-07-20-a-las-14-47-04.jpg" alt="logo" /> */}
                        {/* <p className="font-['Oswald'] text-lg">JHONATAN BOLIVAR</p> */}
                    </a>
                </div>
                <div>
                    <nav>
                        <button onClick={() => toggleOpen()} className='hidden max-lg:list-item'><IconMenu2/></button>
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
                            <a className='p-1 rounded-full hover:bg-slate-400 hover:bg-opacity-30' onClick={handleChangeTheme}>
                                {icon}
                            </a>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    )
}