'use client'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import NavLink from './nav-link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle menu item clicks
  const handleMenuItemClick = () => {
    setIsOpen(false)
  }

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = '/vineet_katiyar_fullStack_developer_resume.pdf'
    link.download = 'vineet_katiyar_Resume.pdf' // You can customize the downloaded filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        {/* Mobile menu button (only visible on small screens) */}
        <div className='md:hidden'>
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className='flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-cyan-700 focus:outline-none'
                aria-label='Toggle menu'
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='start'
              className='mt-2 w-56 bg-popover text-popover-foreground md:hidden'
            >
              <DropdownMenuItem 
                className='cursor-pointer hover:bg-accent focus:bg-accent'
                onClick={handleMenuItemClick}
              >
                <Link href='/' className='block w-full'>
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer hover:bg-accent focus:bg-accent'
                onClick={handleMenuItemClick}
              >
                <Link href='/posts' className='block w-full'>
                  Posts
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer hover:bg-accent focus:bg-accent'
                onClick={handleMenuItemClick}
              >
                <Link href='/projects' className='block w-full'>
                  Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer hover:bg-accent focus:bg-accent'
                onClick={handleMenuItemClick}
              >
                <Link href='/contact' className='block w-full'>
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer hover:bg-accent focus:bg-accent md:hidden'
                onClick={handleResumeDownload}
              >
                <span className='block w-full'>Resume</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Link
            href='/'
            className='text-3xl font-bold hidden md:block '
          >
            VK
          </Link>
        </div>

        {/* Desktop navigation (hidden on mobile) */}
        <ul className='text-md hidden items-center gap-6 font-normal text-muted-foreground sm:gap-10 md:flex'>
          <li className='transition-colors hover:text-cyan-700'>
            <NavLink href='/posts'>Posts</NavLink>
          </li>
          <li className='transition-colors hover:text-cyan-700'>
            <NavLink href='/projects'>Projects</NavLink>
          </li>
          <li className='transition-colors hover:text-cyan-700'>
            <NavLink href='/contact'>Contact</NavLink>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          {/* Resume button for desktop */}
          <button
            onClick={handleResumeDownload}
            className='hidden md:flex items-center px-4 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
          >
            Resume
          </button>
          
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}