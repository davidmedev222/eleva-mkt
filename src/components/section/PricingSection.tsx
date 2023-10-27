'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { Heading, PricingList } from '../index'

function PricingSection() {
  const [pricing, setPricing] = useState(0)
  const classes = clsx(
    'w-36 rounded-lg py-2.5 font-medium text-gray-500 data-[active=true]:bg-pink-500 data-[active=true]:text-white dark:text-gray-400 dark:data-[active=true]:text-white'
  )

  return (
    <section className='mx-auto max-w-screen-xl px-5 py-14 md:py-20'>
      <Heading as='h5' className='text-center'>
        Pick a plan that's right for you
      </Heading>
      <p className='text-center text-gray-600 dark:text-gray-400 sm:text-lg'>
        Pricing plans for business at every stage of growth
      </p>
      <div className='mx-auto mt-5 flex w-fit items-center rounded-lg outline outline-pink-500'>
        <button onClick={() => setPricing((state) => 0)} className={classes} data-active={pricing === 0}>
          Yearly -20%
        </button>
        <button onClick={() => setPricing((state) => 1)} className={classes} data-active={pricing === 1}>
          Monthly
        </button>
      </div>
      <PricingList pricing={pricing} />
    </section>
  )
}

export default PricingSection
