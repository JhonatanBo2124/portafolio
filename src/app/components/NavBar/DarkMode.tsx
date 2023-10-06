"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IconSun, IconMoon } from '@tabler/icons-react'

export function DarkModeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className='p-1 rounded-full hover:bg-slate-400 hover:bg-opacity-30' onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {theme === 'dark' ? <IconMoon /> : <IconSun />}
    </button>
  )
}