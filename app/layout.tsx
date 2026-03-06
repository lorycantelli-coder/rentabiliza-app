import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header, Footer } from "@/components/layout";

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
  title: "Rentabiliza - IA Preditiva para Investimentos | 34% Acima do Mercado",
  description: "IA antecipa padrões 48h antes do mercado reagir. Investimentos inteligentes para executivos que não têm tempo de virar especialistas. Resultados auditados: 34% acima do mercado.",
  keywords: ["investimentos", "IA preditiva", "rentabiliza", "análise de mercado", "inteligência artificial", "finanças", "gestão de patrimônio"],
  authors: [{ name: "Rentabiliza" }],
  openGraph: {
    title: "Rentabiliza - IA Preditiva para Investimentos",
    description: "34% acima do mercado. IA antecipa padrões 48h antes. Resultados auditados.",
    url: "https://rentabiliza.com",
    siteName: "Rentabiliza",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rentabiliza - IA Preditiva",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rentabiliza - IA Preditiva para Investimentos",
    description: "34% acima do mercado. IA antecipa padrões 48h antes. Resultados auditados.",
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
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
