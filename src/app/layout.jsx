import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rixxer | Creative Growth",
  description: "Conte com nossa criatividade para valorizar ainda mais sua empresa!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <meta name="p:domain_verify" content="294ca9f2c1ce830fbdee9d26107f2bb2" />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
