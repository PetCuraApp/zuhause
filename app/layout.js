import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-montserrat'
});

export const metadata = {
  title: 'Zuhause Cabañas Valdivia - Tu Hogar en el Sur',
  description: 'Cabañas acogedoras y modernas en Valdivia, ideales para turistas que buscan descanso y conexión con la naturaleza.',
  keywords: 'cabañas valdivia, alojamiento valdivia, turismo valdivia, cabañas sur de chile, valdivia, zuhause cabañas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}