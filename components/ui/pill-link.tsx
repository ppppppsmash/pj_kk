import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-kouka text-white hover:bg-[#7a2a7e]',
  dark: 'bg-foreground text-background hover:bg-kouka hover:text-white',
  outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-background',
  light: 'bg-background text-foreground hover:bg-surface',
} as const

interface PillLinkProps {
  href: string
  children: React.ReactNode
  variant?: keyof typeof variants
  className?: string
  /** false hides the trailing icon */
  arrow?: boolean
  /** replaces the default arrow */
  icon?: LucideIcon
  /** opens in a new tab with rel="noopener noreferrer" */
  external?: boolean
}

export function PillLink({ href, children, variant = 'primary', className, arrow = true, icon, external }: PillLinkProps) {
  const Icon = icon ?? ArrowRight
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-bold tracking-[.15em]',
        'transition-[transform,background-color,color,border-color] duration-200 ease-out-strong active:scale-[0.97]',
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      {arrow && (
        <Icon
          className={cn('h-4 w-4 transition-transform duration-200 ease-out-strong', !icon && 'group-hover:translate-x-0.5')}
          aria-hidden="true"
        />
      )}
    </Link>
  )
}
