import { pricingListMonth, pricingListYear } from '@/utils'
import { PricingCard } from '../index'

interface Props {
  pricing: number
}

function PricingList({ pricing }: Props) {
  const pricings = [pricingListYear, pricingListMonth]

  return (
    <ul className='grid items-center gap-5 py-5 sm:grid-cols-2 lg:grid-cols-4'>
      {pricings[pricing]?.map((pricing) => (
        <li key={pricing.id}>
          <PricingCard pricing={pricing} />
        </li>
      ))}
    </ul>
  )
}

export default PricingList
