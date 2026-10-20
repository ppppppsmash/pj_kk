import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "商品、健康相談、ビジネスパートナーのご希望など、恒佳株式会社へのお問い合わせはこちらから。",
};

export default async function Contact() {
  return (
    <div>
      <PageHeader
        en="CONTACT"
        ja="お問い合わせ"
        lead={
          <>
            <p>商品について、健康相談、ビジネスパートナーのご希望、WEBサイトについてなど、ご意見ご要望がございましたら、ぜひご連絡ください。</p>
          </>
        }
      />

      <div className="-mt-8 rounded-t-[36px] bg-white px-4 py-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[760px]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
