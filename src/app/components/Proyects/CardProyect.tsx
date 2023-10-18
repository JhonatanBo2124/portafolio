'use client'
import { RevealWrapper } from 'next-reveal'
interface props {
    name: string,
    description: string,
    technologies: string,
    link: string,
    images: string[]
}

export function CardProyect({ name, description, technologies, link, images }:props) {
    return(
        <div className="flex max-lg:flex-col max-lg:items-center p-5 gap-40 max-xl:gap-20">
            <RevealWrapper origin='left'>
                <div className="flex flex-col gap-4">
                    <p className="font-['Oswald'] font-bold text-3xl uppercase">{name}</p>
                    <p className="font-['Poppins'] text-lg max-lg:text-base max-w-md max-lg:max-w-2xl max-sm:max-w-xs dark:text-slate-400">{description}</p>
                    <p className='max-w-xs'>Tecnologias: <span className='font-black'>{technologies}</span></p>
                    <div className='flex gap-5'>
                        <a className="p-3.5 text-white bg-blue-700 hover:bg-blue-900 font-bold rounded-full transition-all" href={link} target="_blank">Visitar Proyecto</a>
                    </div>
                </div>
            </RevealWrapper>
            <RevealWrapper origin='right'>
                <div className="flex gap-6 max-md:gap-3">
                    <div className="w-80 max-md:w-40 h-96 max-md:h-48 hover:scale-105 transition-all"><img className="w-80 max-md:w-40 h-96 max-md:h-48 object-cover border-2 rounded-2xl" src={images[0]} alt="" /></div>
                    <div className="w-80 max-md:w-40 h-96 max-md:h-48 flex flex-col gap-6 max-md:gap-3">
                        <div className="hover:scale-105 transition-all"><img className="object-contain border-2 rounded-2xl" src={images[1]} alt="" /></div>
                        <div className="hover:scale-105 transition-all"><img className="object-contain border-2 rounded-2xl" src={images[2]} alt="" /></div>
                    </div>
                </div>
            </RevealWrapper>
        </div>
    )
}