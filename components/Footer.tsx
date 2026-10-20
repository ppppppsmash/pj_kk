import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

import { Logo } from './Logo'

const siteLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'COMPANY', href: '/company' },
  { label: 'PRODUCT', href: '/product' },
  { label: 'NEWS', href: '/news' },
  { label: 'CONTACT', href: '/contact' },
]

const AMAZON_STORE = 'https://www.amazon.co.jp/s?me=AJZHQW1IE0MDG&marketplaceID=A1VC38T7YXB528'

export function Footer() {
  return (
    <footer className="mt-20 rounded-t-[36px] bg-gray sm:mt-28 sm:rounded-t-[50px]">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo style="w-[120px] sm:w-[140px]" />
            <p className="mt-6 max-w-[24em] text-sm leading-[1.9] text-muted">
              さらに甦る美と健康。日本の健康食品、漢方薬、化粧品を、国内外のお客様へお届けします。
            </p>
            <a
              href={AMAZON_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-foreground px-5 text-sm font-bold tracking-wider text-foreground transition-[transform,background-color,color] duration-200 ease-out-strong hover:bg-foreground hover:text-background active:scale-[0.97]"
            >
              Amazon ストア
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="フッターナビゲーション">
            <h2 className="font-normsEn text-sm tracking-[.2em] text-subtle">SITE MAP</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm font-bold tracking-wider text-foreground transition-colors duration-200 hover:text-kouka"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-normsEn text-sm tracking-[.2em] text-subtle">COMPANY</h2>
            <address className="mt-5 space-y-3 text-sm not-italic leading-[1.8] text-muted">
              <p className="font-bold text-foreground">恒佳株式会社</p>
              <p>〒103-0004<br />東京都中央区東日本橋1-1-9-2F<br />備広東日本橋ビルIII</p>
              <p>
                TEL <a className="hover:text-kouka" href="tel:0343333211">03-4333-3211</a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <small className="text-xs">© Kouka Co., Ltd. All Rights Reserved.</small>
          <span className="font-normsEn tracking-[.2em]">KOUKA CO., LTD. ■</span>
        </div>
      </div>
    </footer>
  )
}
