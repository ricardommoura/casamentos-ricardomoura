import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./site.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guia de Fotografia & Filme de Casamento | Ricardo Moura",
  description:
    "Um guia prático e gratuito para planear fotografia e filme do vosso casamento no Porto, Braga e Norte de Portugal.",
  openGraph: {
    title: "O vosso dia, tal como aconteceu | Ricardo Moura Photo & Film",
    description:
      "Recebam um guia prático para planear fotografia e filme do casamento no Porto e em Braga.",
    locale: "pt_PT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
