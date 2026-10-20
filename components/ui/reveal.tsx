'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface RevealProps {
  as?: ElementType
  className?: string
  /** extra delay in ms, used to stagger siblings (keep it 30-80ms apart) */
  delay?: number
  children: ReactNode
}

/**
 * Fades + lifts content in once when it scrolls into view. Marketing surfaces only.
 * Styles live in globals.css (.reveal) so the motion runs as a CSS transition.
 */
export function Reveal({ as: Tag = 'div', className, delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.setAttribute('data-visible', '')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', '')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as any}
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
