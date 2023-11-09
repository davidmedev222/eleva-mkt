import { Footer, Header } from '@/components'
import { rubik } from '@/styles'
import '../styles/globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Eleva MKT',
  description:
    'Eleva MKT, explore our marketing services website. With a specialized focus on digital strategies, SEO, engaging content and social media campaigns, we help propel your online presence to success.',
  category: 'Marketing',
  generator: 'Next.js',
  applicationName: 'Eleva MKT',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Marketing digital',
    'Agencia de marketing',
    'Estrategias de marketing',
    'Publicidad en línea',
    'SEO (Optimización en motores de búsqueda)',
    'SEM (Marketing en motores de búsqueda)',
    'Redes sociales',
    'Publicidad en redes sociales',
    'Estrategias de contenido',
    'Campañas publicitarias',
    'Consultoría de marketing',
    'Marketing creativo',
    'Analítica web',
    'Generación de leads',
    'Estrategias de crecimiento'
  ],
  authors: [{ name: 'David Mamani', url: 'https://www.linkedin.com/in/davidmedev/' }],
  creator: 'David Mamani',
  publisher: 'David Mamani',
  formatDetection: {
    email: true,
    address: false,
    telephone: true
  },
  openGraph: {
    title: 'Eleva MKT',
    description:
      'Eleva MKT, explore our marketing services website. With a specialized focus on digital strategies, SEO, engaging content and social media campaigns, we help propel your online presence to success.',
    url: 'https://elevamkt.vercel.app/',
    siteName: 'Eleva MKT',
    locale: 'en',
    type: 'website'
  }
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' suppressHydrationWarning className={`${rubik.variable}`}>
      <body className='bg-white font-rubik text-black dark:bg-black dark:text-white'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
