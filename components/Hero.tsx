'use client'

import { Zen_Kaku_Gothic_New } from 'next/font/google';

import { cn } from '@/lib/utils';

import { Globe } from '@/components/ui/global-earth';
import { MarqueePanel } from '@/components/MarqueePanel';

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['700'],
});

export const Hero = () => {
  return (
    <div className="w-full max-w-full items-end flex-nowrap flex-row h-[400px] sm:h-[540px] justify-start mb-[60px] sm:mb-[80px]
      overflow-x-visible overflow-y-visible"
    >
      <div className="w-full max-w-full flex justify-center items-end h-[400px] sm:h-[540px] m-0">
        <div className="w-[1024px] max-w-full flex items-center justify-center sm:justify-start p-0">
          <div className="w-[340px] sm:w-[600px] p-4 flex-col z-10 justify-center items-center text-justify">
            <h1 className={cn(
              'flex-start text-xl sm:text-4xl leading-normal sm:leading-relaxed font-semibold sm:font-normal h-auto',
              'bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent',
              zenKakuGothicNew.className
            )}
            >お客様の暮らしの質的向上を応援するという目標を貫いており、美と健康を提供しております</h1>
          </div>
        </div>

        <div>
          <Globe />
        </div>
      </div>

      <MarqueePanel />
    </div>
  )
}
