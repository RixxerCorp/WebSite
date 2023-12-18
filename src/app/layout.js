import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Em Construção',
  description: 'Site em Construção',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <meta name="p:domain_verify" content="7f018f2a7c99c3748a7184a57d07abcb"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
