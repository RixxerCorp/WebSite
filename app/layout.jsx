import Script from 'next/script';
import { SITE } from '@/lib/site';
import { getGoogleRating } from '@/lib/google-reviews';
import { RatingProvider } from './components/RatingProvider';
import Layout from './components/layout';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import localFont from 'next/font/local';
import './globals.css';

// Fontes hospedadas no próprio projeto (sem requisição ao Google).
const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
});
const spaceGrotesk = localFont({
  src: './fonts/space-grotesk-latin-wght-normal.woff2',
  variable: '--font-space-grotesk',
  weight: '300 700',
  display: 'swap',
});
const jetbrainsMono = localFont({
  src: './fonts/jetbrains-mono-latin-wght-normal.woff2',
  variable: '--font-jetbrains-mono',
  weight: '100 800',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Rixxer | Software House para todo o Brasil e exterior',
    template: '%s | Rixxer',
  },
  description:
    'Software House que atende todo o Brasil e o exterior, em português e inglês: sites, apps, sistemas, design e gestão de redes sociais.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Rixxer',
    title: 'Rixxer | Software House para todo o Brasil e exterior',
    description:
      'Sites, aplicativos, sistemas, redes sociais, design e SEO para o seu negócio crescer.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Rixxer' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
};

export default async function RootLayout({ children }) {
  const rating = await getGoogleRating();
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <LocalBusinessSchema rating={rating} />
        <RatingProvider rating={rating}>
          <Layout>{children}</Layout>
        </RatingProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WMPL2T1D01"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WMPL2T1D01');
          `}
        </Script>
      </body>
    </html>
  );
}