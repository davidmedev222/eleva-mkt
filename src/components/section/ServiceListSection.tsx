import { CategoryHeading, Heading, ServiceList } from '../index'

function ServiceListSection() {
  return (
    <section className='mx-auto max-w-4xl px-5 py-10 text-center sm:py-20'>
      <CategoryHeading>All-in-One Solutions</CategoryHeading>
      <Heading as='h2'>Comprehensive Online Marketing Services</Heading>
      <p className='text-gray-600 sm:text-lg'>Unlock Your Business Potential with Our Wide Range of Expertise</p>
      <ServiceList />
    </section>
  )
}

export default ServiceListSection
