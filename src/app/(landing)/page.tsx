import {
  BrandMarquee,
  CustomerSection,
  FaqSection,
  Hero,
  PricingSection,
  ServiceListSection,
  ServiceSection
} from '@/components'

function HomePage() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <BrandMarquee />
      <ServiceListSection />
      <ServiceSection
        service='SEO Mastery'
        heading='Expert Search Engine Optimization'
        description="Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence."
        image='/assets/service.webp'
        direction='rtl'
      />
      <ServiceSection
        service='Content Kings'
        heading='High-Quality Content Creation'
        description='Engage your audience and build brand loyalty with our top-notch content creation services. From blog posts to social media updates, our skilled copywriters craft compelling and share worthy content tailored to your target audience and aligned with your marketing goals.'
        image='/assets/service2.webp'
        direction='ltr'
      />
      <ServiceSection
        service='Social Gurus'
        heading='Powerful Social Media Marketing'
        description="Amplify your brand's voice and foster meaningful connections with your audience through strategic social media marketing. Our team of social media specialists creates targeted campaigns that generate leads, increase engagement, and grow your online community."
        image='/assets/service3.webp'
        direction='rtl'
      />
      <CustomerSection />
      <PricingSection />
      <FaqSection />
    </main>
  )
}

export default HomePage
