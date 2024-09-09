import Link from 'next/link'

import { ContactCard } from '@/components/ContactCard'

import productList from './product.json'

interface Product {
  imgSrc: string
  link: string
  title: string
  date: string
}

interface ProductList {
  productList: Product[]
}

export default async function Service() {
  const product_list = productList;

  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px]
              tracking-[.01em] duration-500 delay-300 animate-slide-in-left"
          >
            Product
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
            <h3 className="font-semibold leading-[27px] text-[36px]">
              日本の品質、世界へ届ける安心
            </h3>

            <p className="mt-[33px] leading-[31px]">
              日本国内の厳しい品質管理のもとで製造されています。安心・安全を最優先に、国内外の皆様にご提供しています。
            </p>

            <p className="mt-[33px] leading-[31px]">
            国内外のお客様に寄り添い、真心を込めた製品をお届けします。私たちと一緒に、健康的な毎日を手に入れましょう。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-[2%] bg-white">
        <div className="sm:flex sm:flex-wrap justify-between max-w-[1400px] w-[calc(100%_-_50px)]
          mx-auto sm:gap-x-6 after:content-[''] after:w-[calc(100%_/_3_-_3.5%)] after:h-0 after:block"
        >

        {product_list.map((product, index) => (
          <div
            key={index}
            className="md:w-[calc(100%_/_3_-_3.5%)] sm:w-[calc(100%_/_2_-_2.5%)] w-auto relative
              h-[500px] rounded-[50px] overflow-hidden shadow-[6px_4px_15px_0_rgba(51,51,51,.19)]
              mb-8 sm:mb-20"
          >
          <Link href={product.link} className="block h-full pb-6 bg-white overflow-hidden relative z-10">
            <div className="h-full sm:mb-4 overflow-hidden rounded-[50px]">
              <img
                src={product.imgSrc}
                className="w-full h-full object-cover duration-300 hover:scale-[1.2]"
              />
            </div>

            <h3 className="text-white absolute right-0 bottom-0 w-[calc(100%_-30px)] bg-[rgba(32,24,1,.5)] rounded-tl-[50px] p-6">
              <span className="text-[18px] mb-4 block leading-[1.5] font-semibold">{product.title}</span>
              <span className="text-[12px] block leading-[1]">{product.title}</span>
              
            </h3>
          </Link>
        </div>
        ))}
        </div>
      </section>

      <ContactCard />
    </div>
  )
}