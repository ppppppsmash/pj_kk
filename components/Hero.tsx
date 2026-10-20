import { Zen_Kaku_Gothic_New } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Globe } from '@/components/ui/global-earth'
import { PillLink } from '@/components/ui/pill-link'
import { MarqueePanel } from '@/components/MarqueePanel'

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
})

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[72px] sm:pt-[88px]">
      <div className="relative mx-auto flex min-h-[480px] max-w-[1280px] items-center px-5 sm:min-h-[600px] sm:px-8">
        <div className="hero-in max-w-[640px] py-14 sm:py-20">
          <p className="hero-in-item font-normsEn text-sm tracking-[.25em] text-kouka sm:text-base">
            KOUKA CO., LTD.<span className="ml-1" aria-hidden="true">■</span>
          </p>

          <h1
            className={cn(
              'hero-in-item mt-5 text-[38px] font-bold leading-[1.25] tracking-tight text-neutral-900 sm:text-[64px] sm:leading-[1.15]',
              zenKakuGothicNew.className
            )}
          >
            <span className="inline-block">さらに甦る、</span>
            <span className="inline-block">美と健康。</span>
          </h1>

          <p className="hero-in-item mt-6 max-w-[520px] text-[15px] leading-[1.9] text-neutral-600 sm:text-lg">
            お客様の暮らしの質的向上を応援するという目標を貫き、日本の健康食品、漢方薬、化粧品を世界の方々へお届けしています。
          </p>

          <div className="hero-in-item mt-8 flex flex-wrap gap-3">
            <PillLink href="/product">PRODUCT</PillLink>
            <PillLink href="/company" variant="outline">COMPANY</PillLink>
          </div>
        </div>

        <div aria-hidden="true">
          <Globe className="-top-[60px] left-auto -right-[140px] translate-x-0 max-w-[320px] opacity-80 sm:-right-[140px] sm:-top-[20px] sm:max-w-[760px] sm:opacity-100" />
        </div>
      </div>

      <MarqueePanel />
    </section>
  )
}
