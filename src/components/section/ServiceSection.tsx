import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { CategoryHeading, Heading } from '../index'

interface Props {
  direction: 'ltr' | 'rtl'
  service: string
  heading: string
  description: string
  image: StaticImageData | string
}

function ServiceSection({ direction, service, heading, description, image }: Props) {
  const classes = {
    section: clsx(
      'mx-auto grid max-w-6xl items-center gap-x-20 p-5 sm:py-20',
      direction === 'ltr' && '[grid-template-areas:"info""image"] md:grid-cols-2 md:[grid-template-areas:"info_image"]',
      direction === 'rtl' && '[grid-template-areas:"info""image"] md:grid-cols-2 md:[grid-template-areas:"image_info"]'
    ),
    info: clsx('py-10 text-center [grid-area:info] sm:text-left'),
    image: clsx('w-full object-cover [grid-area:image]')
  }

  return (
    <section className={classes.section}>
      <div className={classes.info}>
        <CategoryHeading>{service}</CategoryHeading>
        <Heading as='h3'>{heading}</Heading>
        <p className='mt-4 text-gray-600 sm:mt-9 sm:text-lg'>{description}</p>
      </div>
      <Image
        className={classes.image}
        src={image}
        width={496}
        height={416}
        alt='Image of information about a service'
      />
    </section>
  )
}

export default ServiceSection
