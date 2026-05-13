import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nhonguista | A arte de vender e prestar serviços em Nampula",
  description: "Conectamos profissionais de confiança a clientes que buscam serviços de qualidade em Nampula, Moçambique. Limpeza, Manutenção, Transporte e muito mais.",
  keywords: ["serviços", "Nampula", "Moçambique", "profissionais", "limpeza", "manutenção", "transporte"],
  openGraph: {
    title: "Nhonguista | Serviços em Nampula",
    description: "Conectamos profissionais de confiança a clientes que buscam serviços de qualidade em Nampula.",
    type: "website",
    locale: "pt_MZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhonguista | Serviços em Nampula",
    description: "A arte de vender e prestar serviços em Moçambique.",
  }
};

import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-MZ"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
