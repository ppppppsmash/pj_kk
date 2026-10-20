import type { Metadata } from 'next'

import { PageHeader } from '@/components/PageHeader'
import { ProductCard } from '@/components/product/ProductCard'
import { Reveal } from '@/components/ui/reveal'
import { ContactCard } from '@/components/ContactCard'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'プロダクト',
  description: '伊段シリーズをはじめとする、恒佳株式会社の製品一覧。日本国内の厳しい品質管理のもとで製造された健康食品をお届けします。',
}

export default function ProductListPage() {
  return (
    <div>
      <PageHeader
        en="PRODUCT"
        ja="プロダクト"
        lead={
          <>
            <p className="text-lg font-bold text-neutral-900 sm:text-2xl">日本の品質、世界へ届ける安心</p>
            <p>日本国内の厳しい品質管理のもとで製造されています。安心・安全を最優先に、国内外の皆様にご提供しています。</p>
            <p>国内外のお客様に寄り添い、真心を込めた製品をお届けします。私たちと一緒に、健康的な毎日を手に入れましょう。</p>
          </>
        }
      />

      <section className="-mt-8 rounded-t-[36px] bg-white px-4 py-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:py-24">
        <ul className="mx-auto grid max-w-[1400px] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal as="li" key={product.id} delay={(i % 3) * 60}>
              <ProductCard product={product} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </Reveal>
          ))}
        </ul>
      </section>

      <ContactCard />
    </div>
  )
}
