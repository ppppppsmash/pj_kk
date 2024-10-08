import { IconShoppingBag } from '@tabler/icons-react';
import { Logo } from './Logo'

export function Footer() {
  return (
    <div className="flex justify-between flex-wrap ml-5 items-center">
      {/* ↓ w-[calc(100%_-_80px)] */}
      <div
        className="w-full flex sm:flex-wrap justify-between items-center sm:px-7 h-[150px] overflow-hidden
          rounded-tl-[30px] bg-gray"
      >
          <div className="flex items-center gap-x-4 ml-4">
            <a
              className="flex gap-x-2 hover:scale-95 transition-all hover:text-kouka"
              href="https://www.amazon.co.jp/s?me=AJZHQW1IE0MDG&marketplaceID=A1VC38T7YXB528"
              target="_blank"
            >
              <IconShoppingBag className="w-6 h-6" stroke={2} />
              <span>amazonショップへ</span>
            </a>
          </div>

          <div className="mr-5">
            <Logo style={"w-[80px] pt-3 mb-2"} />
          </div>
        </div>


        <div className="w-full text-center bg-gray">
          <small className="text-xs">© Kouka Co., Ltd. All Rights Reserved.</small>
        </div>
    </div>
  )
}