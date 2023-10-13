import Image from 'next/image'
import { Home } from '../app/components/Home/Home'
import { About } from './components/About/About'
import { Studies } from './components/Studies/Studies'
import { Proyects } from './components/Proyects/Proyects'
import { Contact } from './components/Contact/Contact'

export default function Page() {
  return (
    <>
      <section id='home'>
        <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='studies'>
        <Studies/>
      </section>
      <section id='proyects'>
        <Proyects/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </>
  )
}
