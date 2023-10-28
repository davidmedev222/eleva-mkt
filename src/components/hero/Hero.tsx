import { AvatarList, BlueSendSticker, Button, YellowSendSticker } from '../index'

function Hero() {
  return (
    <section className='relative mx-auto grid max-w-xl gap-y-6 px-5 py-16 text-center'>
      <h1 className='text-4xl font-semibold sm:text-6xl'>Accelerate Your Growth with Our Marketing Team</h1>
      <p className='text-gray-600 dark:text-gray-400 sm:text-lg'>
        Discover innovative marketing solutions that will help your business thrive in today's competitive landscape.
      </p>
      <form className='grid gap-4 sm:grid-cols-2'>
        <input type='email' placeholder='Enter Your Emaill Address' />
        <Button spacing='md' border='full' color='pink'>
          Get Stated for Free!
        </Button>
      </form>
      <div className='grid gap-y-2 sm:grid-cols-[auto_1fr] sm:items-center'>
        <AvatarList />
        <p className='text-xs text-gray-600 dark:text-gray-400 sm:text-base'>
          Trusted by 100K+ people around the world
        </p>
      </div>
      <BlueSendSticker className='absolute -right-1/4 top-12 hidden md:block' />
      <YellowSendSticker className='absolute -left-1/4 top-[228px] hidden md:block' />
    </section>
  )
}

export default Hero
