import { Routes } from '@/utils'
import Link from 'next/link'
import { LogoIcon, Navbar } from '../index'

function Header() {
  return (
    <header className='container-base sticky top-0 z-10 flex items-center justify-between gap-x-5 border-b border-gray-300 bg-white px-5 py-6 dark:border-gray-700 dark:bg-black'>
      <Link href={Routes.Home} className='mr-auto flex items-center gap-x-2'>
        <LogoIcon className='h-8 w-8 fill-current' />
        <span className='text-2xl font-semibold'>
          Eleva <span className='text-pink-500'>MKT</span>
        </span>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
