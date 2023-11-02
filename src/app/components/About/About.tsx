'use client'
import { RevealWrapper } from 'next-reveal'

export function About() {
    return(
        <div className="w-screen pt-24 px-44 max-xl:px-20 max-md:px-5 flex flex-row-reverse max-lg:flex-col gap-10 items-center justify-between">

            <RevealWrapper origin='left'>
                <img className="max-w-lg rounded-xl max-xl:max-w-sm" src="https://res.cloudinary.com/da3li8fso/image/upload/v1698112231/ijgdjpy2bhhlaxxk3hym.png" alt="" />
            </RevealWrapper>
            
            <RevealWrapper origin='right'>
                <div className="flex flex-col gap-5 font-['Poppins'] text-xl max-sm:text-base max-w-xl px-7 max-sm:px-0 text-slate-700 dark:text-slate-400">
                    <p>
                        Soy un apasionado <span className='font-black text-black dark:text-white'>desarrollador full stack</span> con experiencia en la creación 
                        de soluciones web. Mi conjunto de habilidades abarca tanto el
                        desarrollo <span className='font-black text-black dark:text-white'>frontend</span> como <span className='font-black text-black dark:text-white'>backend</span>
                        , lo que me permite diseñar y construir aplicaciones web altamente funcionales y atractivas.
                    </p>
                    <p>
                        Estoy constantemente <span className='font-black text-black dark:text-white'>actualizándome </span>
                         y adoptando las <span className='font-black text-black dark:text-white'>últimas tecnologías</span>, lo que me permite mantenerme al día con las tendencias
                        de desarrollo y ofrecer soluciones innovadoras. 
                    </p>
                    <p>
                        Además, mi capacidad para <span className='font-black text-black dark:text-white'>trabajar de manera
                        colaborativa</span> en equipos multidisciplinarios me permite abordar desafíos de manera efectiva y
                        entregar resultados excepcionales
                    </p>
                </div>
            </RevealWrapper>
        </div>
    )
}