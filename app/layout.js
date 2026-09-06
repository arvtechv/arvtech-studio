import { TranslationProvider } from '@/i18n/useTranslation';
import Navbar from '@/components/Navbar';
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://arvtech.studio"),
  title: {
    default: "Arvtech Studio | Desarrollo de Software, Apps y Servicio Técnico",
    template: "%s | Arvtech Studio",
  },
  description: "Estudio creativo y tecnológico especializado en desarrollo web, apps móviles, videojuegos, automatización y servicio técnico especializado.",
  keywords: ["desarrollo web", "apps móviles", "videojuegos", "automatización", "servicio técnico", "cámaras de seguridad", "reparación de celulares"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Arvtech Studio | Desarrollo de Software, Apps y Servicio Técnico",
    description: "Estudio creativo y tecnológico especializado en desarrollo web, apps móviles, videojuegos, automatización y servicio técnico.",
    siteName: "ARVTECH STUDIO",
    url: "https://arvtech.studio",
    images: [{ url: "/imagebody.png", width: 1536, height: 1024, alt: "Arvtech Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvtech Studio | Desarrollo de Software, Apps y Servicio Técnico",
    description: "Estudio creativo y tecnológico especializado en desarrollo web, apps móviles, videojuegos, automatización y servicio técnico.",
    images: ["/imagebody.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo_circle_blue.png",
  },
};

export const viewport = {
  themeColor: "#0066FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${orbitron.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <TranslationProvider>
          <Navbar />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}


