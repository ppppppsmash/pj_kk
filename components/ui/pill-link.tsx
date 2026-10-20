import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-kouka text-white hover:bg-[#7a2a7e]',
  dark: 'bg-neutral-900 text-white hover:bg-kouka',
  outline: 'border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white',
  light: 'bg-white text-neutral-900 hover:bg-neutral-100',
} as const

interface PillLinkProps {
  href: string
  children: React.ReactNode
  variant?: keyof typeof variants
  className?: string
  arrow?: boolean
}

export function PillLink({ href, children, variant = 'primary', className, arrow = true }: PillLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-bold tracking-[.15em]',
        'transition-[transform,background-color,color,border-color] duration-200 ease-out-strong active:scale-[0.97]',
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}
