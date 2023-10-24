import clsx from 'clsx'
import { Button, CheckCircleIcon } from '../index'

export interface Pricing {
  id: string
  name: string
  description: string
  price: number | string
  time: string
  benefits: string[]
  isPopular: boolean
}

interface Props {
  pricing: Pricing
}

function PricingCard({ pricing }: Props) {
  const classes = {
    card: clsx(
      'grid gap-y-5 break-all rounded-3xl p-6 shadow-lg',
      pricing.isPopular && 'py-9 outline outline-pink-500'
    ),
    benefits: clsx('space-y-2.5 text-sm font-semibold text-gray-600', pricing.isPopular && 'text-black'),
    check: clsx('rounded-full bg-gray-600 fill-white', pricing.isPopular && '!bg-black')
  }

  return (
    <article className={classes.card}>
      <header className='grid gap-y-2.5'>
        <span className='text-[22px] font-semibold'>{pricing.name}</span>
        <p className='text-sm text-gray-600'>{pricing.description}</p>
        <div className='space-x-1'>
          <span className='text-[54px] font-bold'>{pricing.price}</span>
          <span className='text-sm font-semibold text-gray-600'>/ {pricing.time}</span>
        </div>
      </header>
      <footer>
        <ul className={classes.benefits}>
          {pricing.benefits.map((benefit) => (
            <li key={benefit} className='flex items-center gap-x-2.5'>
              <CheckCircleIcon className={classes.check} /> <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </footer>
      <Button color={pricing.isPopular ? 'pink' : 'black'} border='lg'>
        Choose Plan
      </Button>
    </article>
  )
}

export default PricingCard
