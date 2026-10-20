'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationMenu } from '@base-ui-components/react/navigation-menu'
import { ArrowRight, ChevronDown, ExternalLink, Mail, Phone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { products } from '@/lib/products'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'COMPANY', href: '/company' },
  { label: 'PRODUCT', href: '/product', menu: true },
  { label: 'NEWS', href: '/news' },
] as const

const AMAZON_STORE = 'https://www.amazon.co.jp/s?me=AJZHQW1IE0MDG&marketplaceID=A1VC38T7YXB528'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/** Floating, translucent header: transparent at the top of the page, a frosted capsule once scrolled. */
export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll state (boolean, so re-renders only on change)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever navigation happens
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

  // --- Sliding hover pill behind the desktop links ---------------------------------
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLElement | null>>({})
  const [pill, setPill] = useState<{ x: number; w: number; visible: boolean }>({ x: 0, w: 0, visible: false })

  const moveTo = useCallback((href: string | null) => {
    const list = listRef.current
    const el = href ? itemRefs.current[href] : null
    if (!list || !el) {
      setPill((p) => ({ ...p, visible: false }))
      return
    }
    const lr = list.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    setPill({ x: r.left - lr.left, w: r.width, visible: true })
  }, [])

  const activeHref = NAV_ITEMS.find((item) => isActive(pathname, item.href))?.href ?? null

  // Rest on the active item; recompute on route change and resize
  useIsomorphicLayoutEffect(() => {
    moveTo(activeHref)
    const onResize = () => moveTo(activeHref)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeHref, moveTo])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-[calc(env(safe-area-inset-top)+10px)] sm:px-6 sm:pt-[calc(env(safe-area-inset-top)+14px)]">
      {/* The bar. It carries the blur; the mobile overlay is a sibling so `fixed inset-0` stays viewport-relative. */}
      <div
        data-scrolled={scrolled && !isOpen}
        className={cn(
          'relative z-10 mx-auto flex h-14 max-w-[1400px] items-center justify-between rounded-full border border-transparent pl-4 pr-2 sm:h-16 sm:pl-5 sm:pr-2.5',
          'transition-[background-color,border-color,box-shadow] duration-300',
          'data-[scrolled=true]:border-white/70 dark:data-[scrolled=true]:border-white/10 data-[scrolled=true]:bg-background/75 data-[scrolled=true]:shadow-[0_12px_40px_-16px_rgba(20,10,30,0.25)]',
          'data-[scrolled=true]:backdrop-blur-xl data-[scrolled=true]:backdrop-saturate-150',
          'motion-reduce:transition-none'
        )}
      >
        <div
          className={cn(
            'origin-left transition-transform duration-300 ease-out-strong motion-reduce:transition-none',
            scrolled && !isOpen && 'scale-[0.85]'
          )}
        >
          <Logo style="w-[96px] sm:w-[116px]" />
        </div>

        {/* Desktop navigation */}
        <NavigationMenu.Root className="hidden sm:block" delay={80} closeDelay={120}>
          <NavigationMenu.List ref={listRef} className="relative flex items-center gap-0.5">
            {/* hover pill: transform + width on an absolutely positioned element, nothing else reflows */}
            <span
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute top-1/2 left-0 h-9 -translate-y-1/2 rounded-full bg-foreground/[0.06]',
                'transition-[transform,width,opacity] duration-200 ease-out-strong motion-reduce:transition-none'
              )}
              style={{ transform: `translate(${pill.x}px, -50%)`, width: pill.w, opacity: pill.visible ? 1 : 0 }}
            />

            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href)
              const linkClass = cn(
                'relative inline-flex h-9 items-center gap-1 rounded-full px-4 text-[14px] font-bold tracking-wider',
                'transition-colors duration-150 hover:text-kouka focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kouka/40',
                active ? 'text-kouka' : 'text-foreground'
              )
              return (
                <NavigationMenu.Item
                  key={item.href}
                  ref={(el) => {
                    itemRefs.current[item.href] = el
                  }}
                  onPointerEnter={() => moveTo(item.href)}
                  onPointerLeave={() => moveTo(activeHref)}
                >
                  {'menu' in item ? (
                    <>
                      <NavigationMenu.Trigger className={cn(linkClass, 'group')}>
                        {item.label}
                        <NavigationMenu.Icon
                          className="transition-transform duration-200 ease-out-strong group-data-[popup-open]:rotate-180"
                        >
                          <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                        </NavigationMenu.Icon>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="w-[760px] p-3 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150">
                        <ProductMenu />
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    <NavigationMenu.Link
                      render={<Link href={item.href} />}
                      active={active}
                      className={linkClass}
                    >
                      {item.label}
                    </NavigationMenu.Link>
                  )}
                </NavigationMenu.Item>
              )
            })}
          </NavigationMenu.List>

          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              className="z-50 transition-[top,left,right,bottom] duration-200 ease-out-strong data-[instant]:transition-none"
              side="bottom"
              align="center"
              sideOffset={14}
              collisionPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
            >
              <NavigationMenu.Popup
                className={cn(
                  'relative origin-[var(--transform-origin)] overflow-hidden rounded-[28px] bg-background/95 shadow-[0_30px_80px_-20px_rgba(20,10,30,0.35)] ring-1 ring-line backdrop-blur-xl',
                  'transition-[opacity,transform] duration-150 ease-out-strong',
                  'data-[starting-style]:scale-[0.97] data-[starting-style]:opacity-0',
                  'data-[ending-style]:scale-[0.97] data-[ending-style]:opacity-0',
                  'motion-reduce:transition-opacity'
                )}
              >
                <NavigationMenu.Viewport className="relative" />
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </NavigationMenu.Root>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(
              'hidden h-10 items-center gap-2 rounded-full bg-kouka pl-4 pr-5 text-[14px] font-bold text-white sm:inline-flex',
              'transition-[transform,background-color] duration-200 ease-out-strong hover:bg-[#7a2a7e] active:scale-[0.97]'
            )}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            CONTACT
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-150 ease-out-strong active:scale-[0.94] sm:hidden"
          >
            <span
              aria-hidden="true"
              className={cn(
                'relative block h-[2px] w-5 bg-foreground transition-[background-color] duration-150',
                'before:absolute before:left-0 before:h-[2px] before:w-5 before:bg-foreground before:transition-[transform] before:duration-250 before:ease-in-out-strong',
                'after:absolute after:left-0 after:h-[2px] after:w-5 after:bg-foreground after:transition-[transform] after:duration-250 after:ease-in-out-strong',
                isOpen
                  ? 'bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45'
                  : 'before:-translate-y-1.5 after:translate-y-1.5'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay: a circle that grows from the toggle button */}
      <nav
        id="mobile-nav"
        aria-label="メインナビゲーション"
        aria-hidden={!isOpen}
        className={cn(
          'fixed inset-0 z-0 flex flex-col bg-gray px-6 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+96px)] sm:hidden',
          // Enter slower than exit: the reveal is the deliberate moment, the dismissal is a system response
          'transition-[clip-path] ease-out-strong motion-reduce:transition-opacity motion-reduce:duration-200',
          isOpen
            ? 'duration-[400ms] [clip-path:circle(150%_at_calc(100%_-_44px)_44px)] motion-reduce:opacity-100'
            : 'duration-250 [clip-path:circle(0px_at_calc(100%_-_44px)_44px)] pointer-events-none motion-reduce:opacity-0'
        )}
      >
        <ul className="flex-1">
          {NAV_ITEMS.map((item, i) => {
            const active = isActive(pathname, item.href)
            return (
              <li
                key={item.href}
                style={{ transitionDelay: isOpen ? `${100 + i * 40}ms` : '0ms' }}
                className={cn(
                  'transition-[opacity,transform] ease-out-strong',
                  isOpen ? 'duration-300 translate-y-0 opacity-100' : 'duration-150 translate-y-3 opacity-0'
                )}
              >
                <Link
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between border-b border-line py-4 text-[28px] font-bold tracking-wider text-foreground',
                    'transition-transform duration-150 ease-out-strong active:scale-[0.98]',
                    active && 'text-kouka'
                  )}
                >
                  {item.label}
                  <ArrowRight className="h-5 w-5 text-subtle" aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ul>

        <div
          style={{ transitionDelay: isOpen ? `${100 + NAV_ITEMS.length * 40}ms` : '0ms' }}
          className={cn(
            'space-y-3 transition-[opacity,transform] ease-out-strong',
            isOpen ? 'duration-300 translate-y-0 opacity-100' : 'duration-150 translate-y-3 opacity-0'
          )}
        >
          <Link
            href="/contact"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-14 items-center justify-center gap-2 rounded-full bg-kouka text-base font-bold tracking-wider text-white transition-transform duration-150 ease-out-strong active:scale-[0.97]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            CONTACT
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={AMAZON_STORE}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-foreground text-sm font-bold text-foreground transition-transform duration-150 ease-out-strong active:scale-[0.97]"
            >
              Amazon
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="tel:0343333211"
              tabIndex={isOpen ? 0 : -1}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-foreground text-sm font-bold text-foreground transition-transform duration-150 ease-out-strong active:scale-[0.97]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              03-4333-3211
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

/** PRODUCT mega menu: every product with its thumbnail, plus a link to the full list. */
function ProductMenu() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-1">
        {products.map((product) => (
          <li key={product.id}>
            <NavigationMenu.Link
              render={<Link href={product.link} />}
              className="group flex items-center gap-3 rounded-2xl p-2 pr-4 transition-colors duration-150 hover:bg-foreground/[0.06] focus-visible:bg-foreground/[0.06] focus-visible:outline-none"
            >
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray ring-1 ring-line">
                <Image src={product.imgThumb} alt="" fill sizes="56px" className="object-cover" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-bold text-foreground">{product.title}</span>
                <span className="block truncate text-xs text-subtle">{product.description}</span>
              </span>
            </NavigationMenu.Link>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex items-center justify-between border-t border-line px-3 pb-1 pt-3">
        <span className="text-xs text-subtle">日本国内の認証工場で製造した、伊段シリーズの製品</span>
        <NavigationMenu.Link
          render={<Link href="/product" />}
          className="group inline-flex items-center gap-1 text-sm font-bold text-kouka"
        >
          VIEW ALL
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5" aria-hidden="true" />
        </NavigationMenu.Link>
      </div>
    </div>
  )
}
