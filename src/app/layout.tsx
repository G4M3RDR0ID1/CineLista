import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Cinelista',
  description:
    'No Cinelista, você encontra os titulos mais populares, em alta e melhor avaliados em um só site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Head />
        {children}
        <Footer />
      </body>
    </html>
  );
}
