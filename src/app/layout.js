import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rixxer",
  description: "Site em Construção",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <meta name="p:domain_verify" content="294ca9f2c1ce830fbdee9d26107f2bb2" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
