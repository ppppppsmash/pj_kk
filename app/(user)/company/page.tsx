import type { Metadata } from 'next'

import { PageHeader } from '@/components/PageHeader'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/ui/reveal'
import { PillLink } from '@/components/ui/pill-link'
import { Timeline } from '@/components/company/Timeline'
import { ContactCard } from '@/components/ContactCard'

export const metadata: Metadata = {
  title: '会社情報',
  description: '恒佳株式会社の沿革と会社概要。2012年設立、東京都中央区。自社ブランド「伊段」シリーズをはじめ、日本製の健康食品、漢方薬、化粧品を国内外へ販売しています。',
}

const profile: { label: string; value: React.ReactNode }[] = [
  { label: '会社名', value: <>恒佳株式会社<br />Kouka Co., Ltd.</> },
  { label: '設立', value: '2012年（平成24年）7月24日' },
  { label: '資本金', value: '500万円' },
  { label: '代表取締役', value: '梅原 美鳳' },
  { label: '薬剤師顧問', value: '菊地 音羽' },
  { label: '事務所', value: <>〒103-0004<br />東京都中央区東日本橋1-1-9-2F 備広東日本橋ビルIII</> },
  { label: '倉庫', value: <>〒355-0006<br />埼玉県東松山市大字市ノ川199番地164</> },
  { label: '電話番号', value: <><a className="hover:text-kouka" href="tel:0493275122">0493-27-5122</a><br /><a className="hover:text-kouka" href="tel:0343333211">03-4333-3211</a></> },
  { label: '業務内容', value: '自社ブランド「伊段」シリーズ、日本製の漢方薬、健康食品、化粧品、日用雑貨、日本食材などを日本国内および海外にて販売' },
  { label: '主要取引国', value: '中国、中国香港、アメリカ' },
  { label: '主要取引銀行', value: 'みずほ銀行 / 武蔵野銀行' },
  { label: '仕入先', value: '（株）建林松鶴堂 / インフィニティー（株）/（株）ピーエス' },
]

export default function CompanyPage() {
  return (
    <div>
      <PageHeader
        en="COMPANY"
        ja="会社情報"
        lead={<p>2012年の設立以来、日本の健康食品、漢方薬、化粧品を国内外へお届けしてきました。恒佳株式会社の歩みと会社概要をご紹介します。</p>}
      >
        <PillLink href="/about" variant="outline">代表メッセージを読む</PillLink>
      </PageHeader>

      {/* HISTORY */}
      <section className="bg-gray px-4 pb-24 sm:px-6 sm:pb-36">
        <div className="mx-auto max-w-[1400px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal className="mb-12 lg:mb-0">
            <SectionHeading en="HISTORY" ja="歩み" className="lg:sticky lg:top-[120px]" />
          </Reveal>
          <Timeline />
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="-mt-8 rounded-t-[36px] bg-panel px-4 py-20 text-white sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1400px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal className="mb-12 lg:mb-0">
            <SectionHeading en="PROFILE" ja="会社概要" light className="lg:sticky lg:top-[120px]" />
          </Reveal>
          <Reveal as="dl" delay={60} className="divide-y divide-white/15 border-y border-white/15">
            {profile.map(({ label, value }) => (
              <div key={label} className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:py-6">
                <dt className="text-sm font-medium tracking-wider text-white/60">{label}</dt>
                <dd className="text-[15px] leading-[1.9] sm:text-base">{value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactCard />
    </div>
  )
}
