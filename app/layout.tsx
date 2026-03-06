import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rentabiliza Brand Book - Design System & Visual Identity",
  description: "Guia oficial de marca da Rentabiliza. Design system completo com fundamentos visuais, tipografia, cores, tom de voz e aplicações práticas.",
  keywords: ["brand book", "design system", "visual identity", "rentabiliza", "brand guidelines", "design guide"],
  authors: [{ name: "Rentabiliza" }],
  openGraph: {
    title: "Rentabiliza Brand Book",
    description: "Guia oficial de marca e design system da Rentabiliza.",
    url: "https://next-designer-app.vercel.app",
    siteName: "Rentabiliza Brand Book",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rentabiliza Brand Book",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rentabiliza Brand Book",
    description: "Guia oficial de marca e design system da Rentabiliza.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${robotoMono.variable} ${playfairDisplay.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
