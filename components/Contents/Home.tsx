import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Handshake, HeartPulse, Sparkles } from 'lucide-react'

import { SectionHeading } from '@/components/SectionHeading'
import { PillLink } from '@/components/ui/pill-link'
import { Reveal } from '@/components/ui/reveal'
import { ProductSlider } from '@/components/swiper/ProductSlider'
import { ContactCard } from '@/components/ContactCard'

import { products } from '@/lib/products'

const introCards = [
  {
    en: 'ABOUT US',
    ja: '恒佳について',
    href: '/about',
    image: '/images/about.jpg',
    lead: '品質を中心に、着実なステップで次の10年へ。',
  },
  {
    en: 'COMPANY',
    ja: '会社情報',
    href: '/company',
    image: '/images/company.jpg',
    lead: '2012年設立。日本の健康食品、漢方薬、化粧品を国内外へ。',
  },
]

const businesses = [
  {
    no: '01',
    title: '国際貿易',
    Icon: Handshake,
    body: 'アジアを中心に伊段シリーズ製品を始め、高品質な日本製の漢方薬、健康食品、化粧品、日用雑貨及び日本食材等を輸出しています。現地の卸売会社や中国各地の大手スーパーと提携し、安心で安全な厳選された日本食材を卸しております。',
  },
  {
    no: '02',
    title: '商品製造',
    Icon: HeartPulse,
    body: '伊段シリーズ製品は、日本の専門チームにより開発され、GMP・ISO22000 食品安全管理認定を取得した百年の工場で生産されています。「伊段バターコーヒースリム」は2022年から3年連続で国際モンドセレクションを受賞し、その効果、品質、安全性が認められています。',
  },
  {
    no: '03',
    title: '美と健康',
    Icon: Sparkles,
    body: '「美」「健康」「ゆとり」「時代の空気」などの側面から、お客さまの暮らしの質的向上を応援するという目標を貫き、日本の健康食品、漢方薬、化粧品を世界の方々にお求めやすい価格でお届けします。',
  },
]

export const HomeSection = () => {
  return (
    <div className="pt-10 sm:pt-20">
      {/* ABOUT / COMPANY */}
      <section className="relative">
        <p
          aria-hidden="true"
          className="select-none text-center font-normsEn text-[clamp(3rem,13vw,12rem)] leading-[0.8] tracking-[-.04em] text-neutral-200"
        >
          Kouka Co., Ltd.
        </p>

        <div className="relative -mt-[0.35em] grid gap-4 px-4 sm:-mt-[1.5em] sm:grid-cols-2 sm:gap-6 sm:px-6 lg:mx-auto lg:max-w-[1400px]">
          {introCards.map((card, i) => (
            <Reveal key={card.href} delay={i * 60}>
              <Link
                href={card.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[28px] bg-neutral-900 transition-transform duration-200 ease-out-strong active:scale-[0.99] sm:aspect-[16/10] sm:rounded-[36px]"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-[400ms] ease-out-strong group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                <div className="relative flex h-full flex-col justify-between p-6 sm:p-10">
                  <SectionHeading as="h2" en={card.en} ja={card.ja} light />
                  <div className="flex items-end justify-between gap-6">
                    <p className="max-w-[26em] text-sm leading-relaxed text-white/85 sm:text-base">{card.lead}</p>
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 transition-[transform,background-color,color] duration-200 ease-out-strong group-hover:translate-x-1 group-hover:bg-kouka group-hover:text-white"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BUSINESS */}
      <section className="mt-24 px-4 sm:mt-36 sm:px-6">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionHeading en="BUSINESS" ja="事業内容" />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {businesses.map(({ no, title, Icon, body }, i) => (
              <Reveal as="li" key={no} delay={i * 60} className="rounded-[28px] bg-gray p-7 sm:rounded-[36px] sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-normsEn text-3xl text-kouka">{no}</span>
                  <Icon className="h-7 w-7 text-neutral-400" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-wide text-neutral-900">{title}</h3>
                <p className="mt-4 text-sm leading-[1.9] text-neutral-600">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="mt-24 overflow-hidden sm:mt-36">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionHeading en="PRODUCT" ja="プロダクト" />
              <p className="mt-5 max-w-[34em] text-sm leading-[1.9] text-neutral-600 sm:text-base">
                日本国内の厳しい品質管理のもとで製造された、伊段シリーズの製品をご紹介します。
              </p>
            </div>
            <PillLink href="/product" variant="dark" className="hidden sm:inline-flex">
              VIEW ALL
            </PillLink>
          </Reveal>

          <Reveal className="mt-10 sm:mt-14" delay={60}>
            <ProductSlider slides={products} />
          </Reveal>

          <div className="mt-8 sm:hidden">
            <PillLink href="/product" variant="dark">VIEW ALL</PillLink>
          </div>
        </div>
      </section>

      <ContactCard />
    </div>
  )
}
