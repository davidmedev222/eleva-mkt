import Marquee from 'react-fast-marquee'
import { AmazonIcon, AppleIcon, GoogleIcon, MetaIcon, MicrosoftIcon } from '../index'

function BrandMarquee() {
  return (
    <div className='grid h-24'>
      <Marquee autoFill gradient gradientWidth={150} gradientColor='rgb(255, 255, 255)'>
        <div className='mx-10'>
          <AmazonIcon />
        </div>
        <div className='mx-10'>
          <GoogleIcon />
        </div>
        <div className='mx-10'>
          <MicrosoftIcon />
        </div>
        <div className='mx-10'>
          <AppleIcon />
        </div>
        <div className='mx-10'>
          <MetaIcon />
        </div>
      </Marquee>
    </div>
  )
}

export default BrandMarquee