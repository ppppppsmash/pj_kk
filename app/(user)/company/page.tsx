import { ContactCard } from '@/components/ContactCard'
import { CompanyTracing } from '@/components/CompanyTracing'

export default async function Company() {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-500 delay-300 animate-slide-in-left"
          >
            COMPANY
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
            <h3 className="font-semibold leading-[27px] text-[36px]">
              会社概要 歩み
            </h3>

            <div className="mt-14">
              <CompanyTracing />
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