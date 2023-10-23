import { Heading, ReviewMarquee } from '../index'

function CustomerSection() {
  return (
    <section className='px-5 py-20 text-center'>
      <Heading>Our Customers</Heading>
      <p className='text-gray-600 sm:text-lg'>
        See what our clients have to say about the results we've delivered and the value
      </p>
      <ReviewMarquee />
      <ReviewMarquee className='hidden md:grid' direction='right' />
    </section>
  )
}

export default CustomerSection
