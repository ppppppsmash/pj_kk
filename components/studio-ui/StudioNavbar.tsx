import Link from 'next/link'
import { Undo2 } from 'lucide-react'


export function StudioNavbar(props: any) {
  return (
    <div>
      <div
        className='flex items-center justify-between p-5'
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', height: '50px' }}
      >
        <Link
          href='/'
          className='text-[#93E6B4] flex items-center'
          style={{ color: '#93E6B4', display: 'flex', alignItems: 'center' }}
        >
          <Undo2
            className='h-6 w-6 text-[#93E6B4] mr-2'
            style={{ height: '24px', width: '24', color: '#93E6B4', marginRight: '8px' }}
          />
          ページに戻る
        </Link>

        <div
          className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#93E6B4]'
          style={{ display: 'flex', padding: '2px', justifyContent: 'center' }}
        >
          <h1
            className='font-bold text-white'
            style={{ fontWeight: 'bold', color: 'white', fontSize: '20px', lineHeight: '10px' }}
          >
            恒佳株式会社
          </h1>
        </div>
      </div>
      {/* sanityのデフォルト検索欄 */}
      <>{props.renderDefault(props)}</>
    </div>
  )
}