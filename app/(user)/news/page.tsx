import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ニュース',
  description: '恒佳株式会社からのお知らせ。',
}

import { ContactCard } from '@/components/ContactCard'
import { PageHeader } from '@/components/PageHeader'


export default function NewsPage() {
  return (
    <div>
      <PageHeader en="NEWS" ja="ニュース" />

      <section className="-mt-8 rounded-t-[36px] bg-background px-4 py-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:py-24">
        <p className="mx-auto max-w-[1400px] text-subtle">現在、ニュースページは準備中です。</p>
      </section>

      <ContactCard />
    </div>
  )
}
