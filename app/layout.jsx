import Script from 'next/script';
import Layout from './components/layout';
import './globals.css';

export const metadata = {
  title: 'Rixxer',
  description: 'Software House especializada em sites, apps, sistemas e design.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
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