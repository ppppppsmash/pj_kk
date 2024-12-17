'use client';

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Vortex } from "@/components/ui/vortex";

import productList from '@/app/(user)/product/product.json';

interface Product {
  id: number;
  imgThumb: string;
  product_detail?: ProductDetail[];
  link: string;
  title: string;
  description: string;
  amazon_shop_link: string;
  brand: string;
  category: string;
  feature_1: string;
  feature_2: string;
  feature_3: string;
  date: string;
}

interface ProductDetail {
  product_detail_img: string;
  product_detail_feature: string;
}

export default function ProductPage({ params } : { params: { slug: string }}) {
  const product_list: Product[] = productList;
  const product = product_list.find(p => p.id === parseInt(params.slug))

  if (!product) {
    return <div>製品が見つかりません</div>;
  }

  return (
    <div>
      <section className="px-4 pb-10 sm:px-[100px] pt-[40svh]">
        <div className="absolute -top-[65svh] left-0 overflow-hidden -z-10">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          ></Vortex>
        </div>
        <h1
          className="font-bold text-[30px] sm:text-[50px] leading-[50px] sm:leading-[70px] tracking-[.01em] duration-100 delay-100"
        >
          {product.title}
        </h1>

        <div className="mt-[30px] mx-auto tracking-wide text-[#545454]">
          <div className="flex justify-between items-center">
            <p>カテゴリー： {product.category}</p>
          </div>
        </div>

        {product.product_detail && <AnimatedTestimonials testimonials={product.product_detail} />}

        <div className="max-w-[800px] w-full mx-auto mt-5 mb-16">

          <p className="mb-5 px-6">{product.feature_1}</p>
          <p className="mb-5 px-6">{product.feature_2}</p>
          <p className="mb-5 px-6">{product.feature_3}</p>
        </div>
      </section>

    </div>
  )
}