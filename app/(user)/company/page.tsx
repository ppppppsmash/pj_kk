import { ContactCard } from '@/components/ContactCard'
import { CompanyTracing } from '@/components/CompanyTracing'

export default async function Company() {
  return (
    <div>
      <section className="pt-[70px] sm:pt-[120px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-500 delay-300 animate-slide-in-left"
          >
            COMPANY
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
            <h3 className="font-semibold leading-10 sm:leading-[27px] text-lg sm:text-[36px]">
              会社概要 歩み
            </h3>

            <div className="mt-14">
              <CompanyTracing />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white -mt-[30px] rounded-tl-[50px] rounded-tr-[50px] py-16">
        <div className="px-[10%]">
          <div className="flex sm:flex-row flex-col justify-around pt-20 sm:pt-[127px] gap-2">
            <h2 className="font-semibold leading-[30px] tracking-[.01em] text-[#545454]">
              CEO<br />MESSAGE
            </h2>

            <div>
              <img className="rounded-lg w-[300px]" src="/images/about/ceo.jpg" />
            </div>

            <div className="max-w-[604px]">
              <p className="leading-[27px] tracking-[.02em] text-[#545454] mb-[20px]">
                平素より格別のご高配を賜り、誠にありがとうございます。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                恒佳株式会社は、2012年（平成24年）7月24日に設立され、現在に至り、12年になりました。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                この12年間にわたり、当社は、「美」「健康」「ゆとり」「時代の空気」などの側面から、お客さまの暮らしの質的向上を応援するという目標を貫いており、日本の健康食品、漢方薬、化粧品を世界の方々にお求めやすい価格でお届けすることを実行します。​</p>
                
              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                2015年、当社は、東洋新薬株式会社と提携し、「金の青汁」シリーズ製品の販売を始め、数年間にわたって、社員達が一丸となって、努力を重ねてきた結果、現在、多くのビジネスパートナーができて、食品、健康食品から、漢方薬、化粧品まで、幅広く活躍しております。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                2021年には、「さらに甦る美と健康 伊段のサポート」を理念とした「伊段（いだん)」ブランドを創設しました。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                伊段シリーズ製品は、日本の専門チームにより開発され、GMP&ISO22000 食品安全管理認定を取得した百年の工場で生産されています。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                2022年から2024年まで、3年間にわたって、「伊段バターコーヒースリム」が「国際モンドセレクション」を連続受賞しました。その効果、品質、安全性が認められています。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                恒佳株式会社は、「伊段シリーズ」を中心に、日本の健康食品をより便利で効果的な方法で提供し続きます。そして、品質を中心に着実なステップで次の10年を進んでいきます
              </p>

              <p className="leading-[27px] tracking-[.02em] text-[#545454] mb-[25px]">
                <span className="font-bold text-sm">代表取締役</span> 梅原 鳳艶
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-[8%] bg-black">
        <div className="flex sm:flex-row flex-col gap-[8vw]">
          <h2 className="mt-5 font-semibold text-[32px] leading-[20px] tracking-[.01em] text-white">COMPANY</h2>

          <dl className="-mt-[27px] leading-[36px] tracking-[.01em] text-[#F5F5F5] flex flex-wrap max-w-[1200px]">
            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">会社名</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">恒佳 株式会社<br />
            Kouka Co., Ltd.
            </dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">本社</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">〒355-0006<br />埼玉県東松山市大字市ノ川199番地164</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">支社</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">〒332-0035<br />埼玉県川口市西青木2-4-3-1F</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">設立</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">平成24年7月24日</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">従業員人数</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">6人</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">薬剤師顧問</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">若松 一範</dd>
  
            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">主要取引銀行</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">
              みずほ銀行 / 武蔵野銀行
            </dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">従業員人数</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">
              （株）建林松鶴堂 / インフィニティー（株）/ 健康フーズ（株）/（株）ピーエス
            </dd>
          </dl>
        </div>
      </section>

      <ContactCard />
    </div>
  )
}