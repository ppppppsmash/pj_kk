import { Hero } from '@/components/Hero';
import { HomeSection } from '@/components/Contents/Home';

export const revalidate = 60

export default function Home() {

  return (
    <div>
      <Hero />
      <HomeSection />
    </div>
  )
}
