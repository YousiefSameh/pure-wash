import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import PWAProvider from "@/components/PWAProvider";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import { Box } from "@mui/material";
import Image from "next/image";
import BackgroundOverlay from "@/public/hero-background-overlay.svg";
import "./globals.css";

const cairoFont = Cairo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Wash - خدمات غسيل السيارات",
  description: "خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت - Professional car wash services at the best prices and fastest time",
  keywords: ["غسيل سيارات", "تنظيف سيارات", "خدمات سيارات", "car wash", "car cleaning", "automotive services"],
  authors: [{ name: "Pure Wash Team" }],
  creator: "Pure Wash",
  publisher: "Pure Wash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pure-wash-iota.vercel.app/'),
  openGraph: {
    title: "Pure Wash - خدمات غسيل السيارات",
    description: "خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت",
    url: 'https://pure-wash-iota.vercel.app/',
    siteName: 'Pure Wash',
    images: [
      {
        url: '/hero-car.png',
        width: 1200,
        height: 630,
        alt: 'Pure Wash - خدمات غسيل السيارات',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pure Wash - خدمات غسيل السيارات",
    description: "خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت",
    images: ['/hero-car.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4c95d' },
    { media: '(prefers-color-scheme: dark)', color: '#f4c95d' },
  ],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pure Wash',
  },
  applicationName: 'Pure Wash',
  referrer: 'origin-when-cross-origin',
  category: 'automotive',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pure Wash" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#f4c95d" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={cairoFont.className} style={{ margin: 0, padding: 0 }}>
        <PWAProvider>
          <ThemeProvider>
            <Box
              sx={{
                minHeight: '100vh',
                overflowX: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src={BackgroundOverlay}
                alt="Hero Background Overlay"
                width={900}
                height={900}
                style={{
                  position: 'absolute',
                  top: '-160px',
                  left: '900px',
                  right: 0,
                  bottom: 0,
                  zIndex: -10,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  display: 'block',
                }}
              />
              <Navbar />
              {children}
              <Footer />
              <PWAInstallPrompt />
            </Box>
          </ThemeProvider>
        </PWAProvider>
      </body>
    </html>
  );
}
