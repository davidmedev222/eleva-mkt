'use client'
import { DarkModeIcon, LightModeIcon, SystemModeIcon } from '@/components'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type Themes = 'dark' | 'light' | 'system'

function DropdownTheme() {
  const [isMounted, setIsMounted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const toggleDropdownState = () => setIsDropdownOpen((state) => !state)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <button disabled className='p-1'>
        <SystemModeIcon />
      </button>
    )
  }

  const toggleTheme = (theme: Themes) => () => {
    setTheme(theme)
    toggleDropdownState()
  }

  const classes = {
    options: clsx(
      'absolute right-0 top-[calc(100%+8px)] hidden gap-y-2 rounded-lg bg-white p-2 shadow-lg dark:bg-black dark:shadow-white/20',
      isDropdownOpen && '!grid'
    ),
    option: clsx(
      'flex items-center gap-x-2.5 rounded-lg p-1 hover:bg-pink-500 hover:text-white data-[theme=true]:bg-pink-500 data-[theme=true]:text-white'
    )
  }

  return (
    <div className='relative grid items-center'>
      <button onClick={toggleDropdownState} className='rounded-lg bg-pink-500 p-1 text-white'>
        {theme === 'light' && <LightModeIcon />}
        {theme === 'dark' && <DarkModeIcon />}
        {theme === 'system' && <SystemModeIcon />}
      </button>
      <div className={classes.options}>
        <button onClick={toggleTheme('light')} className={classes.option} data-theme={theme === 'light'}>
          <LightModeIcon /> <span className='hidden sm:block'>Light</span>
        </button>
        <button onClick={toggleTheme('dark')} className={classes.option} data-theme={theme === 'dark'}>
          <DarkModeIcon /> <span className='hidden sm:block'>Dark</span>
        </button>
        <button onClick={toggleTheme('system')} className={classes.option} data-theme={theme === 'system'}>
          <SystemModeIcon /> <span className='hidden sm:block'>System</span>
        </button>
      </div>
    </div>
  )
}

export default DropdownTheme
