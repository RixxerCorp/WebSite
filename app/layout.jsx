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
      </body>
    </html>
  );
}