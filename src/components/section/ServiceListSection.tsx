import { ServiceList } from '../index'

function ServiceListSection() {
  return (
    <section className='mx-auto max-w-4xl px-5 py-10 text-center sm:py-20'>
      <span className='text-sm font-bold uppercase text-pink-500 sm:text-lg'>All-in-One Solutions</span>
      <h1 className='text-[28px] font-bold sm:text-[42px]'>Comprehensive Online Marketing Services</h1>
      <p className='text-gray-600 sm:text-lg'>Unlock Your Business Potential with Our Wide Range of Expertise</p>
      <ServiceList />
    </section>
  )
}

export default ServiceListSection
