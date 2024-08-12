import { HomeSection } from '@/components/Contents/Home'
import MotionAnimate from '@/components/Motion/MotionAnimate'
import { Hero } from '@/components/Hero'
import { ModelBrand } from '@/components/model/ModelBrand'

export const revalidate = 60

export default function Home() {

  return (
    <div>
      <Hero />
      {/* <MotionAnimate /> */}
      <ModelBrand />
      <HomeSection />
    </div>
  )
}
