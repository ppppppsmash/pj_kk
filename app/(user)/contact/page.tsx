import { ContactForm } from "@/components/ContactForm";

export default async function Contact() {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="animate-slide-in-left font-black text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-500 delay-300"
          >
            CONTACT
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
            <p className="mt-[33px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </p>

            <p className="mt-[20px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
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