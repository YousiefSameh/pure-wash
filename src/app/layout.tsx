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
  description:
    "خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت - Professional car wash services at the best prices and fastest time",
  keywords: [
    "غسيل سيارات",
    "تنظيف سيارات",
    "خدمات سيارات",
    "car wash",
    "car cleaning",
    "automotive services",
  ],
  authors: [{ name: "Pure Wash Team" }],
  creator: "Pure Wash",
  publisher: "Pure Wash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pure-wash-iota.vercel.app/"),
  openGraph: {
    title: "Pure Wash - خدمات غسيل السيارات",
    description: "خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت",
    url: "https://pure-wash-iota.vercel.app/",
    siteName: "Pure Wash",
    images: [
      {
        url: "/hero-car.png",
        width: 1200,
        height: 630,
        alt: "Pure Wash - خدمات غسيل السيارات",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Wash - خدمات غسيل السيارات",
    description: "خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت",
    images: ["/hero-car.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4c95d" },
    { media: "(prefers-color-scheme: dark)", color: "#f4c95d" },
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pure Wash",
  },
  applicationName: "Pure Wash",
  referrer: "origin-when-cross-origin",
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <head>
        {/* ✅ FIXED: Added missing theme-color meta tag */}
        <meta name="theme-color" content="#f4c95d" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f4c95d"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#f4c95d"
        />

        {/* ✅ FIXED: Added missing manifest link tag */}
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ FIXED: Added missing color-scheme meta tag */}
        <meta name="color-scheme" content="light dark" />

        {/* Enhanced PWA meta tags */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-192x192.png"
        />

        {/* Apple Web App meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pure Wash" />

        {/* Mobile Web App meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Pure Wash" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#f4c95d" />
        <meta
          name="msapplication-TileImage"
          content="/icons/icon-144x144.png"
        />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Additional PWA enhancements */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        {/* Preload critical resources */}
        <link rel="preload" href="/hero-car.png" as="image" type="image/png" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={cairoFont.className} style={{ margin: 0, padding: 0 }}>
        <PWAProvider>
          <ThemeProvider>
            <Box
              sx={{
                minHeight: "100vh",
                overflowX: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={BackgroundOverlay}
                alt="Hero Background Overlay"
                width={900}
                height={900}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  zIndex: -10,
                  margin: "-100px",
                  pointerEvents: "none",
                  userSelect: "none",
                  display: "block",
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
