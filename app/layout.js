import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import ScrollToTop from './components/helper/scroll-to-top';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import { I18nProvider } from '@/utils/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://thomsmtz.dev'),
  title: 'Thomas Martinez — Software Engineer & Scrum Master',
  description:
    'Portfolio of Thomas Martinez, a Software Engineer and certified Scrum Master with expertise in React, Next.js, Java, Spring, TypeScript, Docker and AWS. Based in Lyon, France.',
  keywords: [
    'Thomas Martinez',
    'Software Engineer',
    'Scrum Master',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Java',
    'Spring Boot',
    'TypeScript',
    'Docker',
    'AWS',
    'Lyon',
    'France',
    'portfolio',
  ],
  authors: [{ name: 'Thomas Martinez', url: 'https://thomsmtz.dev' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    url: 'https://thomsmtz.dev',
    title: 'Thomas Martinez — Software Engineer & Scrum Master',
    description:
      'Portfolio of Thomas Martinez, a Software Engineer and certified Scrum Master. Expertise in React, Next.js, Java, TypeScript, Docker and AWS.',
    siteName: 'Thomas Martinez Portfolio',
    images: [
      {
        url: '/card.png',
        width: 1200,
        height: 630,
        alt: 'Thomas Martinez — Software Engineer & Scrum Master',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Martinez — Software Engineer & Scrum Master',
    description: 'Portfolio of Thomas Martinez, a Software Engineer and certified Scrum Master.',
    images: ['/card.png'],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <ToastContainer />
          <main className="min-h-screen relative mx-auto pt-10 px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </I18nProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
};

export default RootLayout;
