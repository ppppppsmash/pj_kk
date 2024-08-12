import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

export function ContactCard() {
  return (
    <section className="border-t-[#1F2023] border-t-[1px] mt-[140px] overflow-hidden">
      <Link
        className="cursor-pointer text-[#1F2023] transition-all hover:opacity-70 duration-500"
        href="/contact"
      >
        <div className="flex items-center box-border bg-[url('/images/contact.png')] w-full
          h-[500px] px-[50px] bg-cover transition-all hover:scale-105"
        >
          <p className="relative font-black leading-[1] flex items-end">
            <span className="font-normsEn sm:text-[110px] text-[30px]">CONTACT US<strong className="text-blue-400 text-[20px] pl-2">■</strong><br />
              <small className="sm:text-[50px] text-[20px]">聯繫我們</small>
            </span>
            <ArrowRight className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
          </p>
        </div>
      </Link>
    </section>
  )
}
