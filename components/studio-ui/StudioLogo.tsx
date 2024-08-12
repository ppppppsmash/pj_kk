import React from 'react'
import { SquareTerminal } from 'lucide-react'

export function StudioLogo(props: any) {
  const { renderDefault, title} = props

  return (
    <div>
      <div
        className='flex items-center space-x-2 h-26 w-26'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <SquareTerminal
          className='text-[#93E6B4] block'
          style={{ color: '#93E6B4', display: 'block' }}
        />
        {/* title */}
        <div
          className='w-[200px]'
          style={{ width: '200px' }}
        >{renderDefault(props)}</div>
      </div>
      
    </div>
  )
}