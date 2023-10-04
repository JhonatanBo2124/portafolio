import Image from 'next/image'
import { Home } from '../app/components/Home/Home'
import { About } from './components/About/About'

export default function Page() {
  return (
    <>
      <Home/>
      <About/>
    </>
  )
}
