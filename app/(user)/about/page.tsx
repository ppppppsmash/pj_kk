import type { Metadata } from 'next'
import Image from 'next/image'

import { PageHeader } from '@/components/PageHeader'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/ui/reveal'
import { PillLink } from '@/components/ui/pill-link'
import { ContactCard } from '@/components/ContactCard'

export const metadata: Metadata = {
  title: '恒佳について',
  description: '恒佳株式会社の代表メッセージ。「美」「健康」「ゆとり」「時代の空気」の側面から、お客様の暮らしの質的向上を応援します。',
}

const message = [
  '平素より格別のご高配を賜り、誠にありがとうございます。',
  '恒佳株式会社は、2012年（平成24年）7月24日に設立され、現在に至り、12年になりました。',
  'この12年間にわたり、当社は、「美」「健康」「ゆとり」「時代の空気」などの側面から、お客さまの暮らしの質的向上を応援するという目標を貫いており、日本の健康食品、漢方薬、化粧品を世界の方々にお求めやすい価格でお届けすることを実行します。',
  '2015年、当社は、東洋新薬株式会社と提携し、「金の青汁」シリーズ製品の販売を始め、数年間にわたって、社員達が一丸となって、努力を重ねてきた結果、現在、多くのビジネスパートナーができて、食品、健康食品から、漢方薬、化粧品まで、幅広く活躍しております。',
  '2021年には、「さらに甦る美と健康 伊段のサポート」を理念とした「伊段（いだん）」ブランドを創設しました。',
  '伊段シリーズ製品は、日本の専門チームにより開発され、GMP&ISO22000 食品安全管理認定を取得した百年の工場で生産されています。',
  '2022年から2024年まで、3年間にわたって、「伊段バターコーヒースリム」が「国際モンドセレクション」を連続受賞しました。その効果、品質、安全性が認められています。',
  '恒佳株式会社は、「伊段シリーズ」を中心に、日本の健康食品をより便利で効果的な方法で提供し続けます。そして、品質を中心に着実なステップで次の10年を進んでいきます。',
]

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        en="ABOUT US"
        ja="恒佳について"
        lead={
          <>
            <p className="text-lg font-bold text-foreground sm:text-2xl">さらに甦る美と健康　伊段のサポート</p>
            <p>「美」「健康」「ゆとり」「時代の空気」の側面から、お客様の暮らしの質的向上を応援する。それが、恒佳株式会社の変わらない目標です。</p>
          </>
        }
      />

      <section className="-mt-8 rounded-t-[36px] bg-background px-4 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1400px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-[120px]">
              <Reveal>
                <SectionHeading en="MESSAGE" ja="代表メッセージ" />
              </Reveal>
              <Reveal delay={60} className="relative mt-10 aspect-[4/5] max-w-[320px] overflow-hidden rounded-[28px] bg-gray">
                <Image src="/images/about/ceo.jpg" alt="代表取締役 梅原 美鳳" fill sizes="320px" className="object-cover" />
              </Reveal>
            </div>
          </div>

          <Reveal delay={120} className="max-w-[40em]">
            <div className="space-y-6 text-[15px] leading-[2] text-muted sm:text-base">
              {message.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-12 flex items-baseline gap-3">
              <span className="text-sm text-subtle">代表取締役</span>
              <span className="text-xl font-bold tracking-wider text-foreground">梅原 美鳳</span>
            </p>
            <div className="mt-12">
              <PillLink href="/company" variant="dark">会社情報を見る</PillLink>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCard />
    </div>
  )
}
