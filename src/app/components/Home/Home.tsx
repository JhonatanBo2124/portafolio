'use client'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { RevealWrapper } from 'next-reveal'

export function Home() {

  const title = 'FullStack Web Developer'.split(' ')
    return (
      <>
        <div className='lg:h-screen w-screen max-lg:pt-28 flex flex-row max-lg:flex-col items-center gap-2'>
          <RevealWrapper>
            <div className='flex flex-col p-20 max-lg:p-10 gap-8 max-lg:mx-16 max-md:mx-6 max-sm:mx-2'>
              <div className='flex flex-row gap-3'>
                <img className='h-10 rounded-full' src="https://res.cloudinary.com/da3li8fso/image/upload/v1697205041/vxeykeb4gohziwtxmwye.jpg" alt="logo" />
                <div>
                  <p className='font-bold'>Jhonatan Bolivar</p>
                  <a href='mailto:jhonatanbolivar14@gmail.com?Subject=Interes%20en%20tu%20perfil&body=Hola%20Jhonatan,' className='text-slate-500 hover: decoration-1'>jhonatanbolivar14@gmail.com</a>
                </div>
              </div>
              <h1 className="min-w-[10ch] max-xl:min-w-[9ch] font-['Oswald'] text-9xl max-xl:text-8xl max-md:text-6xl drop-shadow-xl">
                {
                  title.map((word) => {
                    return(
                      <div className=''>
                        {
                          word.split('').map((letter) => {
                            if (letter === ' ') {
                              return(
                                <span> </span>
                              )
                            } else {
                              return(
                                <span className='inline-block hover:text-cyan-700 hover:-translate-y-4 transition-transform'>{letter}</span>
                              )
                            }
                          })
                        }
                      </div>
                    )
                  })
                }
              </h1>
              <div className='flex flex-row gap-7'>
                <a className='p-1 rounded-lg hover:scale-110 transition-all'
                href="https://github.com/JhonatanBo2124"
                target='_blank'>
                  <IconBrandGithub/>
                </a>
                <a className='p-1 rounded-lg hover:scale-110 transition-all'
                href="https://www.linkedin.com/in/jhonatan-bol%C3%ADvar-b49869230/"
                target='_blank'>
                  <IconBrandLinkedin/>
                </a>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={800} origin='right'>
            <div className='flex flex-col items-center gap-7 px-8 max-md:px-0'>
              <p className="font-['Poppins'] p-5 text-xl max-xl:text-lg max-md:text-base text-slate-700 dark:text-slate-400 max-w-3xl">¡Bienvenidos a mi portafolio! Soy <span className='font-bold scale-125 text-black dark:text-white'>Jhonatan Bolívar</span>, un apasionado
              <span className='font-bold scale-125 text-cyan-700 dark:text-white'> Desarrollador full stack</span>, y estoy emocionado de compartir mi viaje en el mundo de la programación. Aquí encontrarás 
              una muestra de mis proyectos y habilidades, así como mi compromiso constante de aprender y crecer en este apasionante campo. 
              ¡Espero que disfrutes explorando mi trabajo tanto como yo disfruto creándolo!</p>
              <div className='flex flex-col items-center gap-5'>
                {/* <a className="p-2.5 font-bold border-2 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:bg-white hover:text-black hover:scale-105 transition-all" href="#">Certificados</a> */}
                <svg className="animate-bounce w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                <a className="p-3.5 text-white bg-cyan-700 hover:bg-cyan-900 dark:bg-transparent active:animate-rebound font-bold dark:border-2 rounded-full dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#0E7490,0_0_15px_#0E7490,0_0_30px_#0E7490] dark:hover:bg-white dark:hover:text-black transition-all" href="./jhonatan bolivar cv.pdf" download="CV_Jhonatan_Bolivar">Descargar cv</a>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </>
    )
  }