import Image from 'next/image'
import Link from 'next/link'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import { ArrowRight, Award, Building2, Globe2, ShieldCheck } from 'lucide-react'

import { cn } from '@/lib/utils'
import { PillLink } from '@/components/ui/pill-link'
import { products } from '@/lib/products'

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
})

const facts = [
  { Icon: Award, value: '3年連続', label: '国際モンドセレクション受賞' },
  { Icon: ShieldCheck, value: 'GMP・ISO22000', label: '認証を取得した工場で製造' },
  { Icon: Globe2, value: '中国・香港・米国', label: '日本の品質を海外へ' },
  { Icon: Building2, value: '2012年', label: '東京にて設立' },
]

export const Hero = () => {
  const featured = products[0]
  const second = products[1]
  const featuredImage = featured.product_detail?.[0]?.product_detail_img ?? featured.imgThumb
  const secondImage = second.product_detail?.[0]?.product_detail_img ?? second.imgThumb

  return (
    <section className="relative overflow-clip pt-[72px] sm:pt-[88px]">
      {/* Backdrop: a brand-purple glow top-right and a warm glow bottom-left, so the white page gets some depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_88%_12%,rgba(144,52,148,0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_8%_95%,rgba(255,196,140,0.28),transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 pb-12 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-20 lg:pt-16">
        {/* Copy */}
        <div className="hero-in max-w-[600px]">
          <p className="hero-in-item font-normsEn text-sm tracking-[.25em] text-kouka sm:text-base">
            KOUKA CO., LTD.<span className="ml-1" aria-hidden="true">■</span>
          </p>

          <h1
            className={cn(
              'hero-in-item mt-5 text-[40px] font-bold leading-[1.2] tracking-tight text-foreground sm:text-[64px] sm:leading-[1.12] xl:text-[72px]',
              zenKakuGothicNew.className
            )}
          >
            <span className="inline-block">さらに甦る、</span>
            <span className="inline-block">美と健康。</span>
          </h1>

          <p className="hero-in-item mt-6 max-w-[30em] text-[15px] leading-[1.9] text-muted sm:text-lg">
            日本の専門チームが開発した「伊段」シリーズをはじめ、健康食品、漢方薬、化粧品を、日本国内と世界の方々へお届けしています。
          </p>

          <div className="hero-in-item mt-8 flex flex-wrap gap-3">
            <PillLink href="/product">PRODUCT</PillLink>
            <PillLink href="/about" variant="outline">ABOUT US</PillLink>
          </div>
        </div>

        {/* Visual: featured product with a second one tucked behind */}
        <div className="hero-visual relative mx-auto w-full max-w-[520px] pb-10 pl-6 sm:pb-12 sm:pl-10 lg:max-w-none">
          <div className="px-exit relative">
          <Link
            href={featured.link}
            className="group relative block aspect-square overflow-hidden rounded-[32px] bg-white shadow-[0_40px_90px_-30px_rgba(144,52,148,0.45)] ring-1 ring-line transition-transform duration-200 ease-out-strong active:scale-[0.99] sm:rounded-[40px]"
          >
            <Image
              src={featuredImage}
              alt={featured.title}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 520px, 100vw"
              className="object-cover transition-transform duration-[400ms] ease-out-strong group-hover:scale-[1.03]"
            />
            {/* the packshot has a price sticker baked in at the bottom; fade it into the white cloth */}
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-white via-white/90 to-transparent" />
            <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-kouka shadow-sm ring-1 ring-line backdrop-blur">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              モンドセレクション 3年連続受賞
            </span>
            <span
              className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition-[transform,background-color] duration-200 ease-out-strong group-hover:translate-x-0.5 group-hover:bg-kouka"
              aria-hidden="true"
            >
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>

          <Link
            href={second.link}
            aria-label={second.title}
            className="absolute -bottom-2 -left-1 block w-[42%] -rotate-3 sm:-left-4 overflow-hidden rounded-[24px] bg-white shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)] ring-1 ring-line transition-transform duration-200 ease-out-strong hover:-rotate-2 active:scale-[0.98] sm:rounded-[28px]"
          >
            <span className="relative block aspect-square">
              <Image src={secondImage} alt="" fill sizes="220px" className="object-cover" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-white via-white/90 to-transparent" />
            </span>
          </Link>
          </div>
        </div>
      </div>

      {/* Facts strip */}
      <div className="mx-auto max-w-[1280px] px-5 pb-8 sm:px-8 sm:pb-12">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-8 sm:grid-cols-4 sm:gap-6">
          {facts.map(({ Icon, value, label }) => (
            <li key={value} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kouka/10 text-kouka">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[15px] font-bold leading-tight text-foreground sm:text-base">{value}</span>
                <span className="mt-1 block text-xs leading-snug text-subtle">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
