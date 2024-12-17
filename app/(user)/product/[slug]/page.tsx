import { SwiperProduct } from '@/components/swiper/SwiperProduct';

import productList from '@/app/(user)/product/product.json';

interface Product {
  id: number;
  imgThumb: string;
  productImg: string[];
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

export default function ProductPage({ params } : { params: { slug: string }}) {
  const product_list: Product[] = productList;
  const product = product_list.find(p => p.id === parseInt(params.slug))

  if (!product) {
    return <div>製品が見つかりません</div>;
  }

  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-10">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[30px] sm:text-[50px] leading-[50px] sm:leading-[70px] tracking-[.01em] duration-100 delay-100"
          >
            {product.title}
          </h1>

          <div className="mt-[30px] mx-auto tracking-wide text-[#545454]">
            <h3 className="font-semibold leading-[27px] text-[30px]">
              ブランド名： {product.brand}
            </h3>

            <div className="flex justify-between items-center mt-6">
              <p>カテゴリー： {product.category}</p>
              <p>2024.03.27</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-[100px]">
        <div className="flex justify-center items-top">
          <div className="w-[300px]">
            <SwiperProduct slides={product.productImg} />
          </div>
          <h2 className="sm:w-[calc(100%_-_50px)] text-[24px]">
            {product.title}について
          </h2>
        </div>

        <div className="max-w-[800px] w-full mx-auto mt-5 mb-16">

          <p className="mb-5 px-6">{product.feature_1}</p>
          <p className="mb-5 px-6">{product.feature_2}</p>
          <p className="mb-5 px-6">{product.feature_3}</p>
        </div>
      </section>

    </div>
  )
}