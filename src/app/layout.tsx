import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Rodrigo Gollo",
  description: "",
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico` },
      {
        url: `${BASE_PATH}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${BASE_PATH}/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: `${BASE_PATH}/apple-touch-icon.png`,
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: `${BASE_PATH}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="px-6 md:px-10">
              {children}
              <Footer />
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
