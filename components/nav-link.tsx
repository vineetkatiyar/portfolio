'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function NavLink({ href, children }: any) {
  const pathname = usePathname()
  const isActive = pathname === href

  const linkClasses = cn(
    'transition-colors hover:text-cyan-700',
    isActive ? 'underline decoration-cyan-700 font-semibold' : 'text-muted-foreground'
  )
  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  )
}
