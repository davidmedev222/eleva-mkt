import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  color: 'black' | 'pink'
  spacing?: 'sm' | 'md'
  border?: 'full' | 'lg'
}

function Button({ children, className, color, border, spacing }: Props) {
  const classes = clsx(
    'px-7 py-3 font-semibold text-white shadow-2xl transition-colors duration-300',
    color === 'black' && 'bg-black hover:bg-pink-500 dark:outline dark:outline-pink-500',
    color === 'pink' && 'bg-pink-500 hover:bg-pink-700',
    border === 'lg' && 'rounded-lg',
    border === 'full' && 'rounded-full',
    spacing === 'sm' && 'px-7 py-3',
    spacing === 'md' && 'px-8 py-4',
    className
  )

  return <button className={classes}>{children}</button>
}

export default Button
