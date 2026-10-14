import { GoogleTagManager } from '@next/third-parties/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from './components/v2/Navbar';
import Footer from './components/v2/Footer';
import SmoothScroll from './components/v2/SmoothScroll';
import './css/globals.scss';
import { I18nProvider } from '@/utils/i18n';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  metadataBase: new URL('https://thomsmtz.dev'),
  title: 'Thomas Martinez — Senior Software Engineer & Agile Lead (PSM I)',
  description:
    'Portfolio of Thomas Martinez, a Senior Software Engineer & Certified Scrum Master (PSM I) with 6+ years of experience architecting national biometric platforms (Thales CABIS), high-throughput reactive microservices (Tricentis NeoLoad), and B2B SaaS platforms. Based in Marseille, France.',
  keywords: [
    'Thomas Martinez',
    'Senior Software Engineer',
    'Scrum Master',
    'PSM I',
    'Tech Lead',
    'Engineering Manager',
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
    'Marseille',
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
    title: 'Thomas Martinez — Senior Software Engineer & Agile Lead (PSM I)',
    description:
      'Portfolio of Thomas Martinez, Senior Software Engineer and certified Scrum Master (PSM I). Expertise in distributed systems, Java 21, Vert.x, PostgreSQL, React, and Agile Team Leadership.',
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
      <body className={`${jakarta.className} bg-[#08080a] text-[#ededef] antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <I18nProvider>
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen relative mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
              {children}
              <Footer />
            </main>
          </SmoothScroll>
        </I18nProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
};

export default RootLayout;
