import productList from '@/app/(user)/product/product.json'

export interface ProductDetail {
  product_detail_img: string
  product_detail_feature: string
}

export interface Product {
  id: number
  title: string
  imgThumb: string
  product_detail?: ProductDetail[]
  link: string
  prev?: string
  next?: string
  description: string
  amazon_shop_link?: string
  brand: string
  category: string
  feature_1: string
  feature_2: string
  feature_3: string
  date: string
}

export const products: Product[] = productList as Product[]

export function getProduct(slug: string) {
  const id = Number.parseInt(slug, 10)
  return products.find((p) => p.id === id)
}

export function getAdjacentProducts(product: Product) {
  return {
    prev: product.prev ? products.find((p) => p.link === product.prev) : undefined,
    next: product.next ? products.find((p) => p.link === product.next) : undefined,
  }
}
