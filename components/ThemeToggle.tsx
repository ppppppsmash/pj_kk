'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'

/** Light / dark switch. Renders a neutral placeholder until mounted so server and client markup match. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
      aria-pressed={isDark}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center rounded-full text-foreground',
        'transition-[transform,background-color] duration-150 ease-out-strong hover:bg-foreground/[0.06] active:scale-[0.94]',
        className
      )}
    >
      {/* both icons are always rendered; they cross-rotate so the swap feels like one object turning */}
      <Sun
        className={cn(
          'absolute h-5 w-5 transition-[transform,opacity] duration-300 ease-out-strong',
          isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          'absolute h-5 w-5 transition-[transform,opacity] duration-300 ease-out-strong',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
        )}
        aria-hidden="true"
      />
    </button>
  )
}
