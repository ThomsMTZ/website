import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from './components/v2/Navbar';
import Footer from './components/v2/Footer';
import SmoothScroll from './components/v2/SmoothScroll';
import './css/globals.scss';
import { I18nProvider } from '@/utils/i18n';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL('https://thomsmtz.dev'),
  title: 'Thomas Martinez — Senior Software Engineer & Agile Lead (PSM I)',
  description:
    'Portfolio of Thomas Martinez, Senior Software Engineer & Certified Scrum Master (PSM I) with 6+ years of experience architecting national biometric platforms (Thales CABIS), high-throughput reactive microservices (Tricentis NeoLoad), and B2B SaaS platforms. Open to Worldwide Relocation & Global Remote.',
  keywords: [
    'Thomas Martinez',
    'Senior Software Engineer',
    'Scrum Master',
    'PSM I',
    'Tech Lead',
    'Engineering Manager',
    'Worldwide Relocation',
    'Remote Engineer',
    'Java 21',
    'Vert.x',
    'PostgreSQL',
    'React 19',
    'Next.js 15',
    'TypeScript',
    'Docker',
    'Biometrics',
    'Thales',
    'Tricentis',
    'France',
    'Spain',
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
    title: 'Thomas Martinez — Senior Software Engineer & Agile Lead (PSM I)',
    description:
      'Portfolio of Thomas Martinez, Senior Software Engineer and certified Scrum Master (PSM I). Distributed systems, Java 21, Vert.x, PostgreSQL, React. Open to Worldwide Relocation & Global Remote.',
    siteName: 'Thomas Martinez Portfolio',
    images: [
      {
        url: '/card.png',
        width: 1200,
        height: 630,
        alt: 'Thomas Martinez — Senior Software Engineer & Agile Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Martinez — Senior Software Engineer & Agile Lead',
    description: 'Portfolio of Thomas Martinez, Senior Software Engineer and certified Scrum Master (PSM I).',
    images: ['/card.png'],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body className={`${jakarta.variable} ${cormorant.variable} ${jakarta.className} bg-[#08080a] text-[#ededef] antialiased selection:bg-[#c5a880] selection:text-black`}>
        <I18nProvider>
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen relative w-full overflow-x-hidden">
              {children}
              <Footer />
            </main>
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
