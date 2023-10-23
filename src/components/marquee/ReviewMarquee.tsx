import clsx from 'clsx'
import Marquee from 'react-fast-marquee'
import { ReviewCard } from '../index'

interface Props {
  className?: string
  direction?: 'right'
}

function ReviewMarquee({ className, direction }: Props) {
  const classes = clsx('grid h-72', className)

  return (
    <div className={classes}>
      <Marquee direction={direction} gradient gradientColor='rgb(255, 255, 255)' gradientWidth={70} autoFill>
        <ReviewCard
          icon='twitter'
          className='mx-2.5'
          avatar='/assets/avatar6.webp'
          username='Daniël'
          email='@dvdwinden'
          comment='Eleva MKT has been a game-changer for our design team. The versatile template and easy-to-use interface have helped us streamline our workflow.'
        />
        <ReviewCard
          icon='google'
          className='mx-2.5'
          avatar='/assets/avatar7.webp'
          username='Mani'
          email='@BeingMani97'
          comment="Eleva MKT has been a lifesaver for our startup. The template's powerful features and responsive design have allowed us to rapidly prototype."
        />
        <ReviewCard
          icon='facebook'
          className='mx-2.5'
          avatar='/assets/avatar8.webp'
          username='Miguel'
          email='@migdvv'
          comment="Eleva MKT's striking visuals and smooth animations helped us create unforgettable user experiences."
        />
      </Marquee>
    </div>
  )
}

export default ReviewMarquee
