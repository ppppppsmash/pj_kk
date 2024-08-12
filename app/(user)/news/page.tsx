import Link from 'next/link'

import { ContactCard } from '@/components/ContactCard'

interface News {
  imgSrc: string
  link: string
  title: string
  date: string
}

interface NewsList {
  newsList: News[]
}

const news_list = [
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/1',
    title: '記事タイトル1',
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

export default async function News() {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-500 delay-300 animate-slide-in-left"
          >
            News
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
            <h3 className="font-semibold leading-[27px] text-[36px]">
              你好你好你好你好
            </h3>

            <p className="mt-[33px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </p>

            <p className="mt-[33px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-[8%] bg-white">
        <div className="flex flex-wrap justify-start max-w-[1300px] w-[calc(100%_-_50px)] mx-auto gap-x-6">

        {news_list.map((news, index) => (
          <div
            key={index}
            className="md:w-[calc(100%_/_3_-_3%)] sm:w-[calc(100%_/_2_-_2.5%)] mb-8 sm:mb-20 relative h-full rounded-[50px]
              overflow-hidden shadow-[6px_4px_15px_0_rgba(51,51,51,.19)]"
          >
            <Link href="/" className="block h-full pb-6 bg-white overflow-hidden relative z-10">
              <div className="mb-4 overflow-hidden rounded-tl-[50px] rounded-tr-[50px]">
                <img
                  src={news.imgSrc}
                  className="w-full h-full object-cover duration-300 hover:scale-[1.2]"
                />
              </div>

              <h3 className="sm:mb-[7px] sm:min-h-[44px] leading-[1.5] px-6">{news.title}</h3>

              <div className="text-[#BCBCBC] tracking-[.1em] overflow-hidden px-6">
                <span>
                  {news.date}
                </span>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </section>

      <ContactCard />
    </div>
  )
}