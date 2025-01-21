import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './components/providers'
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'blog card link generator',
  description: 'blog card link generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' className='dark'>
      <body className={'antialiased min-h-svh'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
