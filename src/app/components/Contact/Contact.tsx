import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandThreads, IconMail } from '@tabler/icons-react'

export function Contact() {
    return(
        <div className="w-screen pt-10 flex flex-col gap-8 items-center justify-end bg-gradient-to-r from-slate-800 to-black">
            <h1 className="w-4/5 text-6xl max-sm:text-4xl font-['Oswald'] text-white px-20 max-md:px-5">¡Escríbeme!</h1>
            <div className='w-1/2 flex max-lg:flex-col items-center justify-between'>
                <div className='flex flex-col gap-6'>
                    <p className="font-['Poppins'] text-lg text-slate-400 max-w-sm max-xl:max-w-xs">Full stack developer apacionado por crear soluciones digitales y experiencias</p>
                    <a href='mailto:jhonatanbolivar14@gmail.com?Subject=Interes%20en%20tu%20perfil&body=Hola%20Jhonatan,' className='flex gap-2 font-bold text-white bg-black hover:bg-blue-900 p-3 rounded-lg'><IconMail color='white'/>jhonatanbolivar14@gmail.com</a>
                </div>
                <div className='flex flex-col gap-3 py-20'>
                    <p className='font-black text-white text-xl'>Enlaces</p>
                    <a href='https://github.com/JhonatanBo2124' target='_blank' className='flex gap-2 font-bold text-white hover:text-blue-600'><IconBrandGithub color='white'/>GitHub</a>                
                    <a href='https://www.linkedin.com/in/jhonatan-bol%C3%ADvar-b49869230/' target='_blank' className='flex gap-2 font-bold text-white hover:text-blue-600'><IconBrandLinkedin color='white'/>LinkedIn</a>
                    <a href='https://www.instagram.com/jhonatan212.4/' target='_blank' className='flex gap-2 font-bold text-white hover:text-blue-600'><IconBrandInstagram color='white'/>Instagram</a>
                </div>
            </div>
            <div className='w-4/5 max-md:w-full flex items-center justify-between p-5 border-t-2 border-slate-400'>
                <p className='text-slate-400 max-md:text-sm'>Made with ❤️</p>
                <p className="text-slate-400 max-md:text-sm">© 2023 - Jhonatan Bolivar</p>
            </div>
        </div>
    )
}