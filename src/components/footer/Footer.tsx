import { Routes } from '@/utils'
import Link from 'next/link'
import {
  Button,
  EmailIcon,
  Heading,
  InstagramIcon,
  LinkedinIcon,
  LogoIcon,
  PinterestIcon,
  TelefoneIcon,
  TiktokIcon
} from '../index'

function Footer() {
  return (
    <footer className='bg-gradient-to-t from-pink-50 dark:from-pink-950'>
      <div className='mx-auto max-w-screen-xl px-5 py-16 text-center'>
        <Heading as='h6'>Try Our Marketing Services for Free</Heading>
        <p className='text-gray-600 dark:text-gray-400 sm:text-lg'>No obligation. Try us for free today.</p>
        <form className='mx-auto grid max-w-xl gap-4 py-11 sm:grid-cols-[2fr_1fr]'>
          <input type='email' placeholder='Enter Your Emaill Address' />
          <Button spacing='md' border='full' color='pink'>
            Try For Free!
          </Button>
        </form>
        <ul className='grid gap-x-5 gap-y-10 py-5 sm:grid-cols-2 md:grid-cols-3'>
          <li className='space-y-2.5'>
            <Link href={Routes.Home} className='flex items-center justify-center gap-x-2'>
              <LogoIcon className='h-8 w-8' />
              <span className='text-3xl font-semibold'>
                Eleva <span className='text-pink-500'>MKT</span>
              </span>
            </Link>
            <p className='text-gray-600 dark:text-gray-400'>
              Unleash the potential of your business with powerful data analysis.
            </p>
          </li>
          <li className='space-y-2.5 text-lg font-medium sm:text-xl'>
            <span>Find us On Social Media</span>
            <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-5'>
              <Link href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                <LinkedinIcon />
              </Link>
              <Link href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                <InstagramIcon />
              </Link>
              <Link href='https://www.pinterest.com' target='_blank' rel='noreferrer'>
                <PinterestIcon />
              </Link>
              <Link href='https://www.tiktok.com/' target='_blank' rel='noreferrer'>
                <TiktokIcon />
              </Link>
            </div>
          </li>
          <li className='space-y-2.5 break-all text-lg font-medium sm:text-xl'>
            <span>Get in Touch With Us</span>
            <Link
              href='tel:+1(954)828-2220'
              className='flex items-center justify-center gap-x-2.5 text-sm text-gray-600 dark:text-gray-400'
            >
              <TelefoneIcon /> +1 (954) 828-2220
            </Link>
            <Link
              href='mailto:elevamkt@example.com'
              className='flex items-center justify-center gap-x-2.5 text-sm text-gray-600 dark:text-gray-400'
            >
              <EmailIcon /> elevamkt@example.com
            </Link>
          </li>
        </ul>
        <p className='mt-5 text-sm font-semibold text-gray-600 dark:text-gray-400'>© 2023 Eleva MKT, Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
