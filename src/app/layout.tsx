import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Harsh Dubey ',
  description: 'Product-focused software engineer building clean, resilient web experiences.',
  icons: {
    icon: '/vercel.svg',
    apple: '/vercel.svg',
  },
  openGraph: {
    title: 'Harsh Dubey | Full-stack Engineer',
    description: 'Product-focused software engineer building clean, resilient web experiences.',
    images: ['/vercel.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-purple-500/30 selection:text-purple-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
