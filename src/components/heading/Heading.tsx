import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

function Heading({ children, as, className }: Props) {
  const classes = clsx('text-[28px] font-bold sm:text-[42px]', className)

  if (as) {
    if (as === 'h2') return <h2 className={classes}>{children}</h2>
    if (as === 'h3') return <h3 className={classes}>{children}</h3>
    if (as === 'h4') return <h4 className={classes}>{children}</h4>
    if (as === 'h5') return <h5 className={classes}>{children}</h5>
    if (as === 'h6') return <h6 className={classes}>{children}</h6>
  }

  return <h1 className={classes}>{children}</h1>
}

export default Heading
