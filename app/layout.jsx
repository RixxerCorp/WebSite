import Script from 'next/script';
import { SITE } from '@/lib/site';
import Layout from './components/layout';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import './globals.css';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Rixxer | Software House em São Lourenço - MG',
    template: '%s | Rixxer',
  },
  description:
    'Software House especializada em sites, apps, sistemas e design em São Lourenço - MG.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Rixxer',
    title: 'Rixxer | Software House em São Lourenço - MG',
    description:
      'Sites, aplicativos, sistemas, redes sociais, design e SEO para o seu negócio crescer.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Rixxer' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <LocalBusinessSchema />
        <Layout>{children}</Layout>

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