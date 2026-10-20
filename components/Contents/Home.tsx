import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, ExternalLink, FlaskConical, Handshake, HeartPulse, Medal, ShieldCheck, Sparkles, Trophy } from 'lucide-react'

import { SectionHeading } from '@/components/SectionHeading'
import { PillLink } from '@/components/ui/pill-link'
import { Reveal } from '@/components/ui/reveal'
import { ProductSlider } from '@/components/swiper/ProductSlider'
import { ContactCard } from '@/components/ContactCard'
import { products } from '@/lib/products'

const AMAZON_STORE = 'https://www.amazon.co.jp/s?me=AJZHQW1IE0MDG&marketplaceID=A1VC38T7YXB528'

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

const brandPoints = [
  { Icon: FlaskConical, title: '日本の専門チームが開発', body: '原料の選定から処方まで、日本の専門チームが監修しています。' },
  { Icon: ShieldCheck, title: '認証工場で製造', body: 'GMP・ISO22000 食品安全管理認証を取得した、創業百年の工場で生産。' },
  { Icon: Medal, title: '国際的な評価', body: '「伊段バターコーヒースリム」は国際モンドセレクションを3年連続で受賞。' },
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

const awards = [
  { Icon: Medal, year: '2022 – 2024', title: '国際モンドセレクション', detail: '伊段バターコーヒースリムが3年連続で受賞' },
  { Icon: Trophy, year: '2023', title: '第6回アジア金星大賞 商品部門 金賞', detail: '伊段バターコーヒースリム' },
  { Icon: Award, year: '2023', title: '日本美容企業大賞', detail: '恒佳株式会社' },
]

export const HomeSection = () => {
  const pickup = products[0]
  const pickupFeatures = [pickup.feature_1, pickup.feature_2, pickup.feature_3].filter((f) => f && f !== pickup.description)
  const collage = products.slice(1, 5).map((p) => ({ src: p.product_detail?.[0]?.product_detail_img ?? p.imgThumb, href: p.link, title: p.title }))

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

      {/* BRAND */}
      <section className="mt-24 px-4 sm:mt-36 sm:px-6">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="grid grid-cols-2 gap-3 sm:gap-4">
            {collage.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.title}
                className={`group relative block overflow-hidden rounded-[24px] bg-gray ring-1 ring-black/5 transition-transform duration-200 ease-out-strong active:scale-[0.98] sm:rounded-[28px] ${i % 2 === 1 ? 'mt-8 sm:mt-12' : ''}`}
              >
                <span className="relative block aspect-square">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover transition-transform duration-[400ms] ease-out-strong group-hover:scale-[1.04]"
                  />
                  <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-white via-white/90 to-transparent" />
                </span>
              </Link>
            ))}
          </Reveal>

          <Reveal delay={60}>
            <SectionHeading en="BRAND" ja="自社ブランド「伊段」" />
            <p className="mt-6 text-lg font-bold leading-relaxed text-neutral-900 sm:text-xl">
              さらに甦る美と健康　伊段のサポート
            </p>
            <p className="mt-4 max-w-[34em] text-[15px] leading-[1.9] text-neutral-600 sm:text-base">
              2021年、この理念のもとに創設した自社ブランドです。バターコーヒーからサプリメント、フェイスマスクまで、日本の健康食品をより便利で効果的な方法でお届けします。
            </p>
            <ul className="mt-8 space-y-5">
              {brandPoints.map(({ Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kouka/10 text-kouka">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-neutral-900">{title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-neutral-600">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PillLink href="/about" variant="outline">ブランドストーリーを読む</PillLink>
            </div>
          </Reveal>
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

      {/* PICK UP */}
      <section className="mt-24 px-4 sm:mt-36 sm:px-6">
        <Reveal className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-gray sm:rounded-[44px]">
          <div className="grid items-center lg:grid-cols-[1fr_1.1fr]">
            <div className="p-4 pb-0 sm:p-6 sm:pb-0 lg:p-10 lg:pr-0">
              <Link href={pickup.link} className="group relative block aspect-[4/3] overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5 sm:rounded-[32px]">
                <Image
                  src={pickup.imgThumb}
                  alt={pickup.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[400ms] ease-out-strong group-hover:scale-[1.03]"
                />
              </Link>
            </div>
            <div className="p-7 sm:p-12 lg:p-16">
              <p className="font-normsEn text-sm tracking-[.25em] text-kouka">
                PICK UP<span className="ml-1" aria-hidden="true">■</span>
              </p>
              <h2 className="mt-4 text-[26px] font-bold leading-[1.3] tracking-tight text-neutral-900 sm:text-[36px]">{pickup.title}</h2>
              <p className="mt-3 text-base font-bold text-kouka sm:text-lg">{pickup.description}</p>
              <ul className="mt-8 space-y-4">
                {pickupFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[15px] leading-[1.9] text-neutral-600">
                    <span className="mt-[0.75em] h-1.5 w-1.5 shrink-0 rounded-full bg-kouka" aria-hidden="true" />
                    <span className="line-clamp-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <PillLink href={pickup.link} variant="dark">詳しく見る</PillLink>
                {pickup.amazon_shop_link && (
                  <PillLink href={pickup.amazon_shop_link} external icon={ExternalLink}>
                    Amazonで購入
                  </PillLink>
                )}
              </div>
            </div>
          </div>
        </Reveal>
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

      {/* AWARDS */}
      <section className="mt-24 px-4 sm:mt-36 sm:px-6">
        <div className="mx-auto max-w-[1400px] rounded-[32px] bg-neutral-950 px-6 py-14 text-white sm:rounded-[44px] sm:px-12 sm:py-20 lg:px-16">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal className="mb-10 lg:mb-0">
              <SectionHeading en="AWARDS" ja="受賞歴" light />
              <p className="mt-5 max-w-[22em] text-sm leading-[1.9] text-white/70">
                効果、品質、安全性が国際的に認められています。
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-3">
              {awards.map(({ Icon, year, title, detail }, i) => (
                <Reveal as="li" key={title} delay={i * 60} className="rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10">
                  <Icon className="h-7 w-7 text-kouka-light" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-6 font-normsEn text-sm tracking-[.15em] text-white/60">{year}</p>
                  <h3 className="mt-2 text-base font-bold leading-snug">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{detail}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AMAZON */}
      <section className="mt-6 px-4 sm:mt-8 sm:px-6">
        <Reveal className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 rounded-[28px] bg-gray px-7 py-8 sm:flex-row sm:items-center sm:rounded-[36px] sm:px-12 sm:py-10">
          <div>
            <p className="text-lg font-bold text-neutral-900 sm:text-xl">伊段シリーズは Amazon でご購入いただけます</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">公式ストアから全国へお届けします。</p>
          </div>
          <PillLink href={AMAZON_STORE} external icon={ExternalLink} variant="dark" className="shrink-0">
            Amazon ストアへ
          </PillLink>
        </Reveal>
      </section>

      <ContactCard />
    </div>
  )
}
