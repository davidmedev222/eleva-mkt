import {
  AnalyticsIcon,
  EditIcon,
  EmailIcon,
  PaletteIcon,
  SeoIcon,
  SocialGroupIcon,
  TacticStrategyIcon,
  VideoCameraIcon
} from '../index'

function ServiceList() {
  return (
    <ul className='mt-9 grid grid-cols-[repeat(auto-fit,minmax(164px,1fr))] gap-2.5 text-center sm:gap-4'>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <AnalyticsIcon /> <span>Analytics</span>
      </li>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <SeoIcon /> <span>SEO</span>
      </li>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <EditIcon /> <span>Content</span>
      </li>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <SocialGroupIcon /> <span>Social</span>
      </li>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <EmailIcon /> <span>Email</span>
      </li>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <VideoCameraIcon /> <span>Video</span>
      </li>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <PaletteIcon /> <span>Branding</span>
      </li>
      <li className='flex items-center justify-center gap-2 rounded-full border-2 border-pink-500 px-8 py-2.5'>
        <TacticStrategyIcon /> <span>Strategy</span>
      </li>
    </ul>
  )
}

export default ServiceList
