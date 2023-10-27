import { FaqList, Heading } from '../index'

function FaqSection() {
  return (
    <section className='mx-auto grid max-w-6xl px-5 py-14'>
      <Heading as='h6' className='text-center'>
        Frequently asked questions
      </Heading>
      <p className='text-center text-gray-600 dark:text-gray-400 sm:text-lg'>
        Find answers to your questions about data analysis and our platform.
      </p>
      <FaqList />
    </section>
  )
}

export default FaqSection
