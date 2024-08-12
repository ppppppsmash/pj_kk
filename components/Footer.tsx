import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  return (
    <div className="flex justify-between flex-wrap ml-5 items-center">
      {/* ↓ w-[calc(100%_-_80px)] */}
      <div
        className="w-full flex sm:flex-wrap justify-between items-center sm:px-7 h-[100px] overflow-hidden rounded-tl-[40px]
          bg-gray"
      >
        <div className="flex items-center gap-x-4 ml-4">
          <a href="">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        <div className="mr-5">
          <Logo style={"w-[80px] pt-3 mb-2"} />
          <small className="text-xs">© Kubo All Rights Reserved.</small>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}