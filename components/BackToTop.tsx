'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

import { cn } from '@/lib/utils'

/** Appears after one viewport of scrolling; scrolls back to the top (instantly under reduced motion). */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページの先頭へ戻る"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        'fixed right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)] ring-1 ring-background/20',
        'bottom-[calc(env(safe-area-inset-bottom)+16px)] sm:right-6 sm:bottom-[calc(env(safe-area-inset-bottom)+24px)]',
        'transition-[opacity,transform,background-color] duration-200 ease-out-strong',
        'hover:bg-kouka active:scale-[0.94]',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
