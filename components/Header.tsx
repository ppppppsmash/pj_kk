"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Logo } from './Logo'

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'COMPANY', href: '/company' },
  { label: 'NEWS', href: '/news' },
  { label: 'PRODUCT', href: '/product' },
] as const

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close the drawer whenever navigation happens
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Lock page scroll while the mobile menu is open, close on Escape
  useEffect(() => {
    if (!isOpen) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* The bar carries the blur; the mobile nav is a sibling so `fixed inset-0` stays viewport-relative */}
      <div
        className={cn(
          'relative z-10 flex items-center justify-between h-[72px] sm:h-[88px] px-4 sm:px-6 pt-[env(safe-area-inset-top)]',
          'transition-[background-color] duration-300',
          isOpen ? 'bg-transparent' : 'bg-white/85 backdrop-blur-md'
        )}
      >
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="メインナビゲーション" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group relative inline-flex h-10 items-center px-4 text-[15px] font-bold tracking-wide text-neutral-900',
                      'transition-colors duration-200 hover:text-kouka',
                      'after:absolute after:left-4 after:right-4 after:bottom-0 after:h-[2px] after:rounded-full after:bg-kouka',
                      'after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out-strong',
                      'hover:after:scale-x-100',
                      active && 'text-kouka after:scale-x-100'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="pl-3">
              <Link
                href="/contact"
                className={cn(
                  'inline-flex h-11 items-center rounded-full bg-kouka px-7 text-[15px] font-bold text-white',
                  'transition-[transform,background-color] duration-200 ease-out-strong',
                  'hover:bg-[#7a2a7e] active:scale-[0.97]'
                )}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((v) => !v)}
          className="sm:hidden -mr-2 flex h-12 w-12 items-center justify-center rounded-full active:scale-[0.94] transition-transform duration-150 ease-out-strong"
        >
          <span
            aria-hidden="true"
            className={cn(
              'relative block h-[2px] w-6 bg-black transition-[background-color] duration-150',
              'before:absolute before:left-0 before:h-[2px] before:w-6 before:bg-black before:transition-[transform] before:duration-300 before:ease-in-out-strong',
              'after:absolute after:left-0 after:h-[2px] after:w-6 after:bg-black after:transition-[transform] after:duration-300 after:ease-in-out-strong',
              isOpen
                ? 'bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45'
                : 'before:-translate-y-2 after:translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Mobile nav: a circle that grows from the toggle button */}
      <nav
        id="mobile-nav"
        aria-label="メインナビゲーション"
        aria-hidden={!isOpen}
        className={cn(
          'sm:hidden fixed inset-0 z-0 bg-gray flex items-center justify-center',
          'transition-[clip-path] duration-500 ease-in-out-strong motion-reduce:transition-opacity motion-reduce:duration-200',
          isOpen
            ? '[clip-path:circle(150%_at_calc(100%_-_40px)_40px)] motion-reduce:opacity-100'
            : '[clip-path:circle(0px_at_calc(100%_-_40px)_40px)] pointer-events-none motion-reduce:opacity-0'
        )}
      >
        <ul className="text-center">
          {[...NAV_ITEMS, { label: 'CONTACT', href: '/contact' }].map((item, i) => {
            const active = isActive(pathname, item.href)
            return (
              <li
                key={item.href}
                style={{ transitionDelay: isOpen ? `${120 + i * 40}ms` : '0ms' }}
                className={cn(
                  'transition-[opacity,transform] duration-300 ease-out-strong',
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                )}
              >
                <Link
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'block px-6 py-4 text-[28px] font-bold tracking-wider text-black',
                    'active:scale-[0.97] transition-transform duration-150 ease-out-strong',
                    active && 'text-kouka'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
