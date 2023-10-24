import { faqList } from '@/utils'
import FaqItem from './FaqItem'

function FaqList() {
  return (
    <ul className='mt-8 grid items-start gap-4 md:grid-cols-2'>
      {faqList.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </ul>
  )
}

export default FaqList
