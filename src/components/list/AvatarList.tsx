import { UserAvatar } from '../index'

function AvatarList() {
  return (
    <ul className='flex items-center justify-center -space-x-4'>
      <li>
        <UserAvatar src='/assets/avatar.webp' />
      </li>
      <li>
        <UserAvatar src='/assets/avatar2.webp' />
      </li>
      <li>
        <UserAvatar src='/assets/avatar3.webp' />
      </li>
      <li>
        <UserAvatar src='/assets/avatar4.webp' />
      </li>
      <li>
        <UserAvatar src='/assets/avatar5.webp' />
      </li>
    </ul>
  )
}

export default AvatarList
