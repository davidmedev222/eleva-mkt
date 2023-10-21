'use client'
import { LinkRoutes } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { CloseIcon, MenuIcon } from '../index'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const changeMenuState = () => setIsMenuOpen((state) => !state)

  const classes = {
    nav: clsx(
      'pointer-events-none fixed left-0 top-0 grid h-3/4 w-full opacity-0 backdrop-blur-xl transition-opacity duration-300 lg:pointer-events-auto lg:static lg:block lg:h-auto lg:w-auto lg:opacity-100',
      isMenuOpen && 'pointer-events-auto opacity-100'
    ),
    items: clsx(
      'm-auto space-y-16 text-center text-base font-medium lg:flex lg:items-center lg:justify-between lg:gap-x-16 lg:space-y-0'
    )
  }

  return (
    <>
      <button onClick={changeMenuState}>
        <MenuIcon className='lg:hidden' size={32} />
      </button>
      <nav className={classes.nav}>
        <ul className={classes.items}>
          {LinkRoutes.map((route) => (
            <li key={route.id}>
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
          <li>
            <button className='rounded-lg bg-black px-7 py-3 text-sm font-semibold text-white shadow-2xl transition-colors duration-300 hover:bg-pink-500'>
              Get Started
            </button>
          </li>
          <li className='lg:hidden'>
            <button onClick={changeMenuState}>
              <CloseIcon className='mx-auto' size={32} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
