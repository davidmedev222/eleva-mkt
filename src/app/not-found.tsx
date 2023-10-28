import { Button, QuoteSticker, SpiralSticker } from '@/components'

function NotFoundPage() {
  return (
    <main className='mx-auto grid max-w-lg gap-y-2 px-5 py-16 text-center'>
      <span className='relative text-9xl font-medium text-pink-500'>
        404
        <QuoteSticker className='absolute -top-14 left-14 hidden -rotate-45 fill-black dark:fill-white sm:block' />
        <SpiralSticker className='absolute -top-8 right-12 hidden fill-black dark:fill-white sm:block' />
      </span>
      <p className='text-5xl font-bold'>Page Not Found</p>
      <p className='text-gray-600 dark:text-gray-400 sm:text-lg'>
        We're sorry, the page you requested could not be found, please go back to the homepage
      </p>
      <Button className='mx-auto mt-4' color='black' border='lg'>
        Go Home
      </Button>
    </main>
  )
}

export default NotFoundPage
