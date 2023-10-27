import clsx from 'clsx'
import { StaticImageData } from 'next/image'
import { FacebookIcon, OnlyGoogleIcon, TwitterIcon, UserAvatar } from '../index'

interface Props {
  className?: string
  avatar: StaticImageData | string
  username: string
  email: string
  comment: string
  icon: 'twitter' | 'google' | 'facebook'
}

function ReviewCard({ className, avatar, username, email, comment, icon }: Props) {
  const classes = clsx(
    'grid h-60 max-w-sm items-baseline rounded-3xl p-6 text-left shadow-lg dark:shadow-white/20',
    className
  )

  return (
    <article className={classes}>
      <header className='flex items-center gap-x-4'>
        <UserAvatar src={avatar} size={64} />
        <div>
          <div className='text-xl font-bold'>{username}</div>
          <div className='text-sm text-gray-600 dark:text-gray-400'>{email}</div>
        </div>
        {icon === 'google' && <OnlyGoogleIcon className='ml-auto' />}
        {icon === 'twitter' && <TwitterIcon className='ml-auto' />}
        {icon === 'facebook' && <FacebookIcon className='ml-auto' />}
      </header>
      <footer>
        <p className='line-clamp-4 text-gray-600 dark:text-gray-400'>{comment}</p>
      </footer>
    </article>
  )
}

export default ReviewCard
