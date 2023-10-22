import Image, { StaticImageData } from 'next/image'

interface Props {
  src: StaticImageData | string
}

function UserAvatar({ src }: Props) {
  return <Image className='rounded-full' src={src} width={48} height={48} alt='User profile image' />
}

export default UserAvatar
