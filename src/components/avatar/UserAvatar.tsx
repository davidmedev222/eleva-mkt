import Image, { StaticImageData } from 'next/image'

interface Props {
  src: StaticImageData | string
  size?: number
}

function UserAvatar({ src, size = 48 }: Props) {
  return <Image className='rounded-full' src={src} width={size} height={size} alt='User profile image' />
}

export default UserAvatar
