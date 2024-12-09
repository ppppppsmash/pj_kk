'use client'

import { useEffect } from 'react';

export const Hero = () => {

  return (
    <div className="w-full max-w-full items-end flex-nowrap flex-row h-[540px] justify-start mb-[80px]
      overflow-x-visible overflow-y-visible"
    >
      <div className="w-full max-w-full flex justify-center items-end h-[380px] sm:h-[540px] m-0">
        <div className="w-[1024px] max-w-full flex items-center justify-center p-0">
          <div className="w-full sm:w-[630px] p-4 flex-col z-10 justify-center items-center">
            <h1 className="flex-start text-lg sm:text-4xl leading-normal font-semibold sm:font-normal
              h-auto"
            >お客様の暮らしの質的向上を応援するという目標を貫いており、美と健康を提供しております。</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
