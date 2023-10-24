'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { NavigateArrow } from '../index'

export interface Faq {
  id: string
  question: string
  answer: string
}

interface Props {
  faq: Faq
}

function FaqItem({ faq }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleState = () => setIsOpen((state) => !state)

  const classes = {
    item: clsx(
      'group rounded-lg border border-black/10 px-4 py-6 transition-colors duration-300 hover:border-pink-500',
      isOpen && '!border-pink-500'
    ),
    question: clsx('grid grid-cols-[auto_1fr] gap-x-4 font-semibold'),
    icon: clsx('transition duration-300 group-hover:fill-pink-500', isOpen && 'rotate-90 fill-pink-500'),
    answer: clsx('grid grid-rows-[0] overflow-hidden', isOpen && 'grid-rows-[1fr] pt-3')
  }

  return (
    <li className={classes.item}>
      <button onClick={toggleState} className={classes.question}>
        <NavigateArrow className={classes.icon} /> {faq.question}
      </button>
      <p className={classes.answer}>{faq.answer}</p>
    </li>
  )
}

export default FaqItem
