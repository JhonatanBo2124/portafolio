import Image from 'next/image'
import { Home } from '../app/components/Home/Home'
import { About } from './components/About/About'
import { Studies } from './components/Studies/Studies'
import { Proyects } from './components/Proyects/Proyects'
import { Contact } from './components/Contact/Contact'

export default function Page() {
  return (
    <main className='w-screen dark:bg-[#1B1925]'>
      <div className='w-full h-2 bg-cyan-600 rounded-e fixed z-30 animate-progress-grow timeline-scroll'></div>
      <section id='home'>
        <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='proyects'>
        <Proyects/>
      </section>
      <section id='studies'>
        <Studies/>
      </section>
      <footer id='contact'>
        <Contact/>
      </footer>
    </main>
  )
}
