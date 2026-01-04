'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from 'next-themes';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </ThemeProvider>
  );
} 