import { ContactCard } from '@/components/ContactCard'

export default async function About() {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-500 delay-300 animate-slide-in-left"
          >
            ABOUT
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
            <h3 className="font-semibold leading-[27px] text-[36px]">
              你好你好你好你好
            </h3>

            <p className="mt-[33px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </p>

            <p className="mt-[33px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </p>
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
              <img className="rounded-lg" src="/images/image-1.png" />
            </div>

            <div className="max-w-[604px]">
              <p className="leading-[27px] tracking-[.02em] text-[#545454] mb-[20px]">
              大家好，我是黃惠玲angela。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
              日本恒佳株式会社的誕生，是我人生中重要的目標之一，在這裡，我將集結一生所學、所識，毫無保留，並且扎根研究、國際專家接軌，淺顯易懂的教給相信我們的您，一起敬愛生命，享受旅程。</p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                過去穿梭醫學領域，也深耕商業戰場，深知身外之物的一切，在遇見體內抗議時，一切皆不足一提，因此我深入找尋國際實驗室，日本、英國、德國、法國、瑞典⋯⋯認識各國權威，接軌世界頂尖的研究，最終從嚴謹的日本實驗室、優質的日本當地原料，作爲國際級的健康研究整合。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                並且經過層層審核，成為日本乳酸菌学会榮譽會員，協會會員居多是醫生背景在定期研討會中獲得廣大臨床經驗及數據，益生菌在未來趨勢可以逆轉疾病對抗微生物、病毒對全球人類的傷害，專業醫師組成的日本乳酸菌協會，不放過拯救疾病根本的每一個細節。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                日本恒佳株式会社同時溝通機能食品與高階護膚的重要性，因為兩者相輔相成，內服及外用延續細胞生命力，藉由日本嚴謹的規格及制度，找出當地最權威實驗室由專業科學研究人員，除了找尋透過天然原型食物營養素補充身體機能，取代藥物作用同時讓肌膚達到全能抗老、延續青春秘方。
              </p>

              <p className="leading-[27px] tracking-[.04em] text-[#545454] mb-[25px]">
                因此每一項產品的誕生，都擁有同樣的初衷「投資美麗加碼健康」，
                我們從不停下任何腳步學習與研究，因為每一步都要走的有效率、有效果，請一起跟我們攜手接軌國際與科技，站在每一個時代的健康尖端吧！
              </p>

              <p className="leading-[27px] tracking-[.02em] text-[#545454] mb-[25px]">
                <span className="font-bold text-sm">代表取締役</span> 黃惠玲angela
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCard />
    </div>
  )
}