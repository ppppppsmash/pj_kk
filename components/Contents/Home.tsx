import Image from 'next/image'
import Link from 'next/link'

import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { ModelBrand } from '@/components/model/ModelBrand'

import { Handshake, HeartPulse, Barcode } from 'lucide-react'
import { SwiperNewsWrap } from '../swiper/SwiperNewsWrap'
import { SwiperServiceWrap } from '../swiper/SwiperServiceWrap'
import { ContactCard } from '../ContactCard'

import productList from '@/app/(user)/product/product.json'

interface TopDoc {
  children: {
    text: string
  }[]
}

interface Top {
  title: string
  description: string
  order: string
  image: any
  body: TopDoc[]
}

const query = groq`
  *[_type == 'top'] {
    title,
    description,
    order,
    image,
    body
  } | order(order asc)
`

const slides = [
  {
    imgSrc: '/images/products/product_1_thumb.jpg',
    link: '/product/1',
    title: '伊段 バターコーヒースリム',
    date: '2024.03.21',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/2',
    title: '記事タイトル2',
    date: '2024.03.22',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/3',
    title: '記事タイトル3',
    date: '2024.03.23',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/3',
    title: '記事タイトル3',
    date: '2024.03.23',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/3',
    title: '記事タイトル3',
    date: '2024.03.23',
  },
];


export const HomeSection = async () => {
  const data: Top[] = await client.fetch(query)

  console.log(data)

  return (
    <div className="pt-[50px] sm:pt-[100px]">
      {/* 3D Model Layout */}
      {/* <ModelBrand /> */}

      <div>
        {/* ABOUT */}
        <section className="pt-12">
          <h2 className="font-normsEn leading-[0.6] text-center text-[3.1em] sm:text-[12.2em] tracking-[-.04em]">Kouka Co., Ltd.</h2>

          <div className="relative hover:opacity-90 duration-500 delay-100">
            <div className="relative overflow-hidden pt-[80%] sm:pt-[36%]">
              <img
                className="absolute inset-0 m-auto w-full h-full object-cover"
                src="/images/about.jpg"
                alt=""
              />
            </div>
            <Link
              className="bg-black bg-opacity-70 absolute inset-0 py-8 sm:py-12 px-4 sm:px-16 flex flex-wrap justify-between"
              href="/about"
            >
              <p className="text-white">
                <span className="font-normsEn block w-full text-[28px] sm:text-[80px] leading-[1]">ABOUT US<strong className="text-kouka text-[20px] pl-2">■</strong></span>
                <span className="text-[14px] sm:text-[34px] tracking-wide">恒佳について</span>
              </p>
              <p className="mt-auto w-full block sm:flex flex-wrap justify-between text-white tracking-widest">
                <span className="w-[46%] text-sm sm:text-lg">
                  恒佳株式会社は品質を中心に着実なステップで次の10年を進んでいきます
                </span>
                
                <span className="block text-right">
                  →
                </span>
              </p>
            </Link>
          </div>

          <div className="relative hover:opacity-90 duration-500 delay-100">
            <div className="relative overflow-hidden pt-[80%] sm:pt-[36%]">
              <img
                className="absolute inset-0 m-auto w-full h-full object-cover"
                src="/images/company.jpg"
                alt=""
              />
            </div>
            <Link
              className="bg-black bg-opacity-70 absolute inset-0 py-8 sm:py-12 px-4 sm:px-16 flex flex-wrap justify-between"
              href="/company"
            >
              <p className="text-white">
                <span className="font-normsEn block w-full text-[28px] sm:text-[80px] leading-[1]">COMPANY<strong className="text-kouka text-[20px] pl-2">■</strong></span>
                <span className="text-[14px] sm:text-[34px] tracking-wide">会社情報</span>
              </p>
              <p className="mt-auto w-full block sm:flex flex-wrap justify-between text-white tracking-widest">
                <span className="w-[46%] text-lg">
                  
                </span>
                
                <span className="block text-right">
                  →
                </span>
              </p>
            </Link>
          </div>
        </section>


        {/* PROFILE */}
        <section className="bg-white pt-16 pb-10 -mt-8 mb-10 rounded-[50px]">
          <div className="mx-auto w-[90%] sm:max-w-[1200px] text-sm">
            <h3 className="text-xl font-bold tracking-[.2em] mb-5">{data[1]?.title}</h3>
            <p className="text-sm tracking-widest">{data[1]?.description}</p>
          </div>

          <div className="mt-6 mx-auto w-[90%] sm:max-w-[1200px] leading-6 text-sm tracking-widest">
            {data[1]?.body?.map((block, index) => (
              <div key={index}>
                {block.children.map((child, childIndex) => (
                  <p key={childIndex}>{child.text}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="block sm:flex sm:justify-center mx-auto my-10 px-5 sm:px-0">
            <div
              className="px-7 sm:pl-7 sm:pr-16 py-14 w-full sm:max-w-[calc(400px_+_90px)] sm:w-[calc(100%_/_3_+_50px)] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px]
                sm:rounded-tr-none sm:rounded-br-none bg-gray z-10"
            >
              <h3 className="text-center mb-8">
                <span className="block text-[24px] tracking-[.2em] mb-4 font-extrabold">
                  [01]
                </span>
                <span className="block text-sm tracking-[.2em] font-bold mb-8">
                  国際貿易
                </span>

                <Handshake className="w-28 h-28 mx-auto" />
              </h3>
              <p className="leading-7 text-sm tracking-wide text-justify">
                アジアを中心に伊段シリーズ製品を始め、高品質な日本製の漢方薬、健康食品、化粧品、日用雑貨及び日本食材等を輸出しています。すでに、現地の卸売会社及び中国の各地に約XX店舗以上ある大手スーパーと提携し、安心で安全な厳選された日本食材を約XX種類以上卸しております。
              </p>
            </div>

            <div
              className="px-7 sm:pl-7 sm:pr-16 py-14 w-full sm:max-w-[calc(400px_+_90px)] sm:w-[calc(100%_/_3_+_50px)] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px]
                sm:rounded-tr-none sm:rounded-br-none bg-white z-20 sm:-ml-[50px]">
              <h3 className="text-center mb-8">
                <span className="block text-[24px] tracking-[.2em] mb-4 font-extrabold">
                  [02]
                </span>
                <span className="block text-sm tracking-[.2em] font-bold mb-8">
                  商品製造
                </span>
                <HeartPulse className="w-28 h-28 mx-auto" />

              </h3>
              <p className="leading-7 text-sm tracking-wide text-justify">
                伊段シリーズ製品は、日本の専門チームにより開発され、GMP&ISO22000食品安全管理認定を取得した百年の工場で生産されています。
                2022年から2024年まで、3年間にわたって、「伊段バターコーヒースリム」が「国際モンドセレクション」を連続受賞しました。その効果、品質、安全性が認められています。
                恒佳株式会社は、「伊段シリーズ」を中心に、日本の健康食品をより便利で効果的な方法で提供し続きます。そして、品質を中心に着実なステップで次の１０年を進んでいきます。​
              </p>
            </div>

            <div className="px-7 py-14 sm:-ml-[50px] w-full sm:max-w-[440px] sm:w-[calc(100%_/_3_+_50px)] rounded-[50px] bg-gray z-30">
              <h3 className="text-center mb-8">
                <span className="block text-[24px] tracking-[.2em] mb-4 font-extrabold">
                  [03]
                </span>
                <span className="block text-sm tracking-[.2em] font-bold mb-8">
                  美と健康
                </span>

                <Barcode className="w-28 h-28 mx-auto" />
              </h3>
              <p className="leading-7 text-sm tracking-wide text-justify">
                さらに甦る美と健康 伊段のサポート、​
                当社は、「美」「健康」「ゆとり」「時代の空気」などの側面から、お客さまの暮らしの質的向上を応援するという目標を貫いており、日本の健康食品、漢方薬、化粧品を世界の方々にお求めやすい価格でお届けすることを実行します。​
              </p>
            </div>
          </div>

          { data[1]?.image && (
            <Image
              src={urlForImage(data[1]?.image)}
              alt='test'
              width={100}
              height={100}
            />
          )}
        </section>

        {/* <section
          className="pt-5 relative mx-auto pb-16"
        >
          <div className="w-[100vw] text-sm overflow-hidden sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:mb-14">
            <h3 className="text-center text-[30px] tracking-[.2em] sm:max-w-[280px] sm:w-1/4 sm:pl-5 relative z-20 font-bold">
              {data[2]?.title}
            </h3>

            <div
              className="max-w-full w-full pl-5 sm:pl-0 sm:max-w-[calc(50%_+_750px_/_2_-_80px] sm:w-3/4 relative mb-[50px] after:bg-[#F2F2F2] sm:after:w-[calc(100%_+_80px)]
                after:h-[180px] after:absolute after:right-0 after:-bottom-[30px] sm:after:-bottom-[50px] sm:after:rounded-tl-[50px] sm:after:rounded-bl-[50px]
                after:w-[calc(100%_-_80px)] after:rounded-tl-[40px] after:rounded-bl-[40px]"
            >
              <SwiperNewsWrap slides={productList} />
            </div>
          </div>

          <div className="w-full sm:w-[220px] sm:mx-auto overflow-hidden mt-3 sm:mt-6 flex justify-end">
            <span className="block overflow-hidden sm:mx-auto">
              <Link
                className="sm:h-[55px] w-[200px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                  flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]
                  rounded-tl-[30px] rounded-bl-[30px] h-[55px]"
                href="/news"
              >
                NEWS
              </Link>
            </span>
          </div>
        </section> */}

        <section
          className="sm:mt-16 pt-5 relative mx-auto"
        >
          <div className="w-[100vw] text-sm overflow-hidden sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:mb-14">
            <h3 className="text-center text-[30px] tracking-[.2em] sm:max-w-[280px] sm:w-1/4 sm:pl-5 relative z-20 font-bold">
              プロダクト
            </h3>
            <div
              className="max-w-full w-full pl-5 sm:pl-0 sm:max-w-[calc(50%_+_750px_/_2_-_80px] sm:w-3/4 relative mb-[50px] after:bg-[#F2F2F2] sm:after:w-[calc(100%_+_80px)]
                after:h-[180px] after:absolute after:right-0 after:-bottom-[30px] sm:after:-bottom-[50px] sm:after:rounded-tl-[50px] sm:after:rounded-bl-[50px]
                after:w-[calc(100%_-_80px)] after:rounded-tl-[40px] after:rounded-bl-[40px]"
            >
              <SwiperServiceWrap slides={productList} />
            </div>
          </div>

          <div className="w-full sm:w-[220px] sm:mx-auto overflow-hidden mt-3 sm:mt-6 flex justify-end">
            <span className="block overflow-hidden sm:mx-auto">
              <Link
                className="sm:h-[55px] w-[200px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                  flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]
                  rounded-tl-[30px] rounded-bl-[30px] h-[55px]"
                href="/product"
              >
                PRODUCT
              </Link>
            </span>
          </div>
        </section>

        <ContactCard />
      </div>
    </div>
  )
}