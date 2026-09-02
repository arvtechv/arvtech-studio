import { TranslationProvider } from '@/i18n/useTranslation';
import Navbar from '@/components/Navbar';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arvtech Studio | Desarrollo de Software, Apps y Servicio Técnico",
  description: "Estudio creativo y tecnológico especializado en desarrollo web, apps móviles, videojuegos, automatización y servicio técnico especializado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <TranslationProvider>
          <Navbar />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}


