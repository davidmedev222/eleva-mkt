import { BrandMarquee, Hero, ServiceListSection } from '@/components'

function HomePage() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <BrandMarquee />
      <ServiceListSection />
    </main>
  )
}

export default HomePage
