import { Reveal } from '@/components/ui/reveal'

interface TimelineItem {
  year: string
  badge: string
  body: string[]
}

const history: TimelineItem[] = [
  { year: '2012年', badge: '発足', body: ['恒佳株式会社が発足。'] },
  { year: '2015年', badge: '発展', body: ['東洋新薬株式会社と提携し、「金の青汁」シリーズ製品の販売を開始。'] },
  { year: '2016年', badge: '発展', body: ['インフィニティ株式会社と提携し、「230酵素」などの健康食品や健康補助食品を販売。'] },
  {
    year: '2017年',
    badge: '発展',
    body: ['百年の漢方薬メーカーである建林松鶴堂の漢方薬シリーズを販売し、数多くの漢方薬イベントを主催。日中展示会にも多数出展。'],
  },
  { year: '2020年', badge: '発展', body: ['建林松鶴堂の正規特約店に認定。'] },
  {
    year: '2021年',
    badge: '変革',
    body: ['「さらに甦る美と健康 伊段のサポート」を理念とした「伊段」ブランドを創設。製品は日本の専門チームにより開発され、GMP・ISO22000 食品安全管理認証を取得した百年の工場で生産。'],
  },
  {
    year: '2022年〜2024年',
    badge: 'モンドセレクション',
    body: ['「伊段バターコーヒースリム」が3年連続で国際モンドセレクションを受賞。'],
  },
  {
    year: '2023年',
    badge: 'アジア金星大賞',
    body: ['伊段バターコーヒースリムが「第6回アジア金星大賞 商品部門」で金賞を受賞。', '恒佳株式会社が日本美容企業大賞を受賞。'],
  },
]

/** Vertical company history. Pure CSS line + dots; items reveal once on scroll. */
export function Timeline() {
  return (
    <ol className="relative border-l border-neutral-300 pl-8 sm:pl-12">
      {history.map((item, i) => (
        <Reveal as="li" key={item.year} delay={Math.min(i, 3) * 60} className="relative pb-12 last:pb-0">
          <span
            className="absolute -left-8 top-[0.45em] h-3 w-3 -translate-x-1/2 rounded-full bg-kouka ring-4 ring-gray sm:-left-12"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <time className="font-normsEn text-2xl tracking-tight text-neutral-900 sm:text-3xl">{item.year}</time>
            <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium tracking-wider text-white">{item.badge}</span>
          </div>
          <div className="mt-3 max-w-[40em] space-y-2 text-[15px] leading-[1.9] text-neutral-600 sm:text-base">
            {item.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
