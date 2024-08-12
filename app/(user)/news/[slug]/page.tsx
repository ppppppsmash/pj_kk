
export default function Page({ params } : { params: { slug: string }}) {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-10">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[30px] sm:text-[50px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-100 delay-100"
          >
            文章标题文章标题文章标题文章标题
          </h1>

          <div className="mt-[30px] mx-auto tracking-wide text-[#545454]">
            <h3 className="font-semibold leading-[27px] text-[30px]">
              你好你好你好你好
            </h3>

            <div className="flex justify-between items-center mt-6">
              <p>健康</p>
              <p>2024.03.27</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[900px] w-full mx-auto sm:mt-5 mb-7 sm:mb-16">
          <img className="sm:rounded-lg" src="/images/main-visual.jpg" />
        </div>

        <div className="max-w-[800px] w-full mx-auto mt-2 sm:mt-5 mb-16">
          <p className="mb-5 px-6">哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍
          </p>

          <h2
            className="w-[calc(100%_-_25px)] sm:w-[calc(100%_-_50px)] py-3 px-6 sm:p-5 sm:mt-10 sm:mb-5 bg-gray font-bold leading-[1.4]
              rounded-tr-[25px] rounded-br-[25px] sm:rounded-[25px] text-[24px]"
          >
            副標題副標題副標題
          </h2>

          <p className="my-5 px-6">哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍
          </p>

          <h2
            className="w-[calc(100%_-_25px)] sm:w-[calc(100%_-_50px)] py-3 px-6 sm:p-5 sm:mt-10 sm:mb-5 bg-gray font-bold leading-[1.4]
              rounded-tr-[25px] rounded-br-[25px] sm:rounded-[25px] text-[24px]"
          >
            副標題副標題副標題
          </h2>

          <p className="my-5 px-6">哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍<br />
          哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍
          </p>
        </div>
      </section>

    </div>
  )
}