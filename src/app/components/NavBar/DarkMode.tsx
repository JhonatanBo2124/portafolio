"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IconSun, IconMoon } from '@tabler/icons-react'

export function DarkModeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleChangeTheme = () => {
      if(theme === 'dark'){
        setTheme('light')
        document.querySelector('html')?.classList.remove('dark')
      } else {
        setTheme('dark')
        document.querySelector('html')?.classList.add('dark')
      }
  }

  useEffect(() => {
    setMounted(true)
    if(window.matchMedia('prefers-color-sheme: dark').matches) {
      setTheme('dark')
    }
    else setTheme('light')
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className='p-1 rounded-full hover:bg-slate-400 hover:bg-opacity-30' onClick={handleChangeTheme}>
        {theme === 'dark' ? <IconMoon /> : <IconSun />}
    </button>
  )
}