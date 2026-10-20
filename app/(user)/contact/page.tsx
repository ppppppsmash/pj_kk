import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "商品、健康相談、ビジネスパートナーのご希望など、恒佳株式会社へのお問い合わせはこちらから。",
};

export default async function Contact() {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-full overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="animate-slide-in-left font-black text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-500 delay-300"
          >
            CONTACT
          </h1>

          <div className="mt-[40px] sm:mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
            <p className="mt-[33px] leading-[31px]">
              商品について<br />
              健康相談をしたい<br />
              ビジネスパートナー希望<br />
              WEBサイトについて<br />
              ご意見ご要望​がございましたら、ぜひご連絡ください。
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white -mt-[30px] rounded-tl-[50px] rounded-tr-[50px] py-16">
        <div className="max-w-[750px] w-[calc(100%_-_50px)] mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}