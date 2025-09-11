'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { IoMdMoon } from 'react-icons/io'
import { IoSunnySharp } from 'react-icons/io5'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <IoSunnySharp color='#ffffff' className='size-4 text-white' />
      ) : (
        <IoMdMoon color='#000000' className='size-4 text-black' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
