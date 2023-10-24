import { Pricing } from '@/components/cards/PricingCard'

export const pricingListYear: Pricing[] = [
  {
    id: crypto.randomUUID(),
    name: 'Starter',
    description: 'Ideal for Small Businesses and Solo Entrepreneurs',
    price: 'Free',
    time: '\u221E',
    benefits: ['1 project', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: false
  },
  {
    id: crypto.randomUUID(),
    name: 'Basic',
    description: 'Perfect for Growing Businesses on a Budget',
    price: '$100',
    time: 'mo',
    benefits: ['5 projects', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: false
  },
  {
    id: crypto.randomUUID(),
    name: 'Pro',
    description: 'Advanced Features for High-Performing Businesses',
    price: '$500',
    time: 'mo',
    benefits: ['20 projects', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: true
  },
  {
    id: crypto.randomUUID(),
    name: 'Team',
    description: 'Collaboration Tools for Large Organizations',
    price: '$700',
    time: 'mo',
    benefits: ['Unlimited Projects', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: false
  }
]

export const pricingListMonth: Pricing[] = [
  {
    id: crypto.randomUUID(),
    name: 'Starter',
    description: 'Ideal for Small Businesses and Solo Entrepreneurs',
    price: 'Free',
    time: '\u221E',
    benefits: ['1 project', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: false
  },
  {
    id: crypto.randomUUID(),
    name: 'Basic',
    description: 'Perfect for Growing Businesses on a Budget',
    price: '$180',
    time: 'mo',
    benefits: ['5 projects', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: false
  },
  {
    id: crypto.randomUUID(),
    name: 'Pro',
    description: 'Advanced Features for High-Performing Businesses',
    price: '$700',
    time: 'mo',
    benefits: ['20 projects', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: true
  },
  {
    id: crypto.randomUUID(),
    name: 'Team',
    description: 'Collaboration Tools for Large Organizations',
    price: '$999',
    time: 'mo',
    benefits: ['Unlimited Projects', 'Analytics', 'Insights Panel', 'Share Features'],
    isPopular: false
  }
]
