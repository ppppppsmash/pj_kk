import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'

import { cn } from '@/lib/utils'
import { getAdjacentProducts, getProduct, products, type Product } from '@/lib/products'
import { ProductGallery } from '@/components/product/ProductGallery'
import { PillLink } from '@/components/ui/pill-link'
import { ContactCard } from '@/components/ContactCard'

export function generateStaticParams() {
  return products.map((p) => ({ slug: String(p.id) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug)
  if (!product) return { title: '製品が見つかりません' }
  return {
    title: product.title,
    description: product.description || product.feature_1,
  }
}

function AdjacentCard({ product, direction }: { product: Product; direction: 'prev' | 'next' }) {
  const isNext = direction === 'next'
  return (
    <Link
      href={product.link}
      className={cn(
        'group flex items-center gap-4 rounded-[24px] bg-gray p-4 transition-[transform,background-color] duration-200 ease-out-strong',
        'hover:bg-foreground/[0.08] active:scale-[0.98]',
        isNext && 'flex-row-reverse text-right'
      )}
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-line">
        <Image src={product.imgThumb} alt="" fill sizes="80px" className="object-cover" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1 font-normsEn text-xs tracking-[.2em] text-subtle">
          {!isNext && <ArrowLeft className="h-3 w-3 transition-transform duration-200 ease-out-strong group-hover:-translate-x-0.5" aria-hidden="true" />}
          <span className={cn(isNext && 'ml-auto')}>{isNext ? 'NEXT' : 'PREV'}</span>
          {isNext && <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5" aria-hidden="true" />}
        </span>
        <span className="mt-1 line-clamp-2 block text-sm font-bold leading-snug text-foreground">{product.title}</span>
      </span>
    </Link>
  )
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)
  if (!product) notFound()

  const { prev, next } = getAdjacentProducts(product)
  const features = [product.feature_1, product.feature_2, product.feature_3].filter(
    (f) => f && f !== product.description
  )

  return (
    <div className="pt-[72px] sm:pt-[88px]">
      <div className="hero-in mx-auto max-w-[1400px] px-4 pt-6 sm:px-6 sm:pt-10">
        <Link
          href="/product"
          className="hero-in-item inline-flex h-10 items-center gap-2 text-sm font-bold tracking-wider text-subtle transition-colors duration-200 hover:text-kouka"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          PRODUCT 一覧へ
        </Link>

        <div className="hero-in-item mt-6 grid gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-16">
          {product.product_detail && product.product_detail.length > 0 ? (
            <ProductGallery items={product.product_detail} title={product.title} />
          ) : (
            <div className="relative aspect-square overflow-hidden rounded-[28px] bg-gray sm:rounded-[36px]">
              <Image src={product.imgThumb} alt={product.title} fill sizes="(min-width: 1024px) 50vw, 100vw" priority className="object-cover" />
            </div>
          )}

          <div className="lg:py-4">
            <p className="flex flex-wrap gap-2">
              {[product.brand, product.category].filter(Boolean).map((label) => (
                <span key={label} className="rounded-full bg-gray px-3 py-1 text-xs font-medium tracking-wider text-muted">
                  {label}
                </span>
              ))}
            </p>

            <h1 className="mt-5 text-[28px] font-bold leading-[1.3] tracking-tight text-foreground sm:text-[40px]">
              {product.title}
            </h1>

            {product.description && (
              <p className="mt-4 text-base font-bold leading-relaxed text-kouka sm:text-lg">{product.description}</p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {product.amazon_shop_link ? (
                <PillLink href={product.amazon_shop_link} external icon={ExternalLink}>
                  Amazonで購入する
                </PillLink>
              ) : (
                <PillLink href="/contact" variant="outline">
                  お問い合わせ
                </PillLink>
              )}
            </div>

            {features.length > 0 && (
              <ul className="mt-10 space-y-5 border-t border-line pt-8">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[15px] leading-[1.9] text-muted">
                    <span className="mt-[0.75em] h-1.5 w-1.5 shrink-0 rounded-full bg-kouka" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {(prev || next) && (
        <nav aria-label="前後の商品" className="mx-auto mt-20 max-w-[1400px] px-4 sm:mt-28 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? <AdjacentCard product={prev} direction="prev" /> : <div className="hidden sm:block" />}
            {next && <AdjacentCard product={next} direction="next" />}
          </div>
        </nav>
      )}

      <ContactCard />
    </div>
  )
}
