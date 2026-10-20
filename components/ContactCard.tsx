import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Mail, Phone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'
import { Spotlight } from '@/components/ui/spotlight'

const AMAZON_STORE = 'https://www.amazon.co.jp/s?me=AJZHQW1IE0MDG&marketplaceID=A1VC38T7YXB528'

const secondary = cn(
  'inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold text-white',
  'transition-[transform,background-color,border-color] duration-200 ease-out-strong',
  'hover:border-white/60 hover:bg-white/10 active:scale-[0.97]'
)

/** Closing call-to-action on every page. One decorative element (the glow), everything else is the message. */
export function ContactCard() {
  return (
    <section className="mt-24 px-4 sm:mt-36 sm:px-6" aria-labelledby="contact-cta-title">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-panel text-white ring-1 ring-white/10 sm:rounded-[48px]">
          {/* ambient brand glow + pointer-following spotlight */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(144,52,148,0.35),transparent_70%)]" />
          <Spotlight className="-z-10" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_40%)]"
          />

          <div className="grid gap-10 px-7 py-14 sm:px-12 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:px-16 lg:py-24">
            <div>
              <p className="font-normsEn text-sm tracking-[.25em] text-kouka-light">
                CONTACT<span className="ml-1" aria-hidden="true">■</span>
              </p>
              <h2
                id="contact-cta-title"
                className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[56px] lg:text-[64px]"
              >
                <span className="inline-block">お気軽に、</span>
                <span className="inline-block">ご相談ください。</span>
              </h2>
              <p className="mt-6 max-w-[32em] text-[15px] leading-[1.9] text-white/70 sm:text-base">
                商品について、健康相談、ビジネスパートナーのご希望、WEBサイトについてなど。内容を確認のうえ、担当者よりご連絡いたします。
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className={cn(
                  'group inline-flex items-center justify-between gap-6 rounded-full bg-white py-2 pl-7 pr-2 text-neutral-950',
                  'transition-[transform,background-color] duration-200 ease-out-strong hover:bg-kouka-light/90 active:scale-[0.97]'
                )}
              >
                <span className="text-base font-bold tracking-wider sm:text-lg">お問い合わせフォーム</span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition-[transform,background-color] duration-200 ease-out-strong group-hover:bg-kouka group-hover:rotate-45 sm:h-14 sm:w-14">
                  {/* arrow points up-right at rest; rotating 45° on hover turns it into "go" */}
                  <ArrowUpRight className="h-6 w-6 transition-transform duration-200 ease-out-strong" aria-hidden="true" />
                </span>
              </Link>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="tel:0343333211" className={secondary}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  03-4333-3211
                </a>
                <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className={secondary}>
                  Amazon ストア
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="flex items-center gap-2 text-xs text-white/50 lg:text-right">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                フォーム送信後、確認メールを自動でお送りします
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
