import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import NavLink from './nav-link'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='text-3xl font-bold text-cyan-700'>
            VK
          </Link>
        </div>
        <ul className='text-md flex items-center gap-6 font-normal text-muted-foreground sm:gap-10'>
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
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
