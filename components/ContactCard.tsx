import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ContactCard() {
  return (
    <section className="mt-24 sm:mt-36">
      <Link
        href="/contact"
        className="group relative block h-[380px] overflow-hidden sm:h-[500px]"
      >
        <Image
          src="/images/contact.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[400ms] ease-out-strong group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-white/10" />

        <div className="relative flex h-full items-center px-6 sm:px-14">
          <p className="flex items-end gap-4 sm:gap-8">
            <span className="font-normsEn text-[40px] leading-[0.95] text-neutral-900 sm:text-[110px]">
              CONTACT US
              <span className="ml-2 align-middle text-[0.3em] text-kouka" aria-hidden="true">■</span>
              <span className="mt-2 block font-sans text-base font-medium tracking-wider text-neutral-600 sm:text-2xl">
                お問い合わせ
              </span>
            </span>
            <span
              className="mb-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-[transform,background-color] duration-200 ease-out-strong group-hover:translate-x-1 group-hover:bg-kouka sm:h-16 sm:w-16"
              aria-hidden="true"
            >
              <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
            </span>
          </p>
        </div>
      </Link>
    </section>
  )
}
