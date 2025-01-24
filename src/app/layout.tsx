import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ColorProvider } from '@/components/provider/colorProvider'
import { LoadingProvider } from '@/components/provider/loadingProvider'
import { Providers } from '@/components/provider/providers'
import { UrlValueProvider } from '@/components/provider/urlValueProvider'

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
        <UrlValueProvider>
          <ColorProvider>
            <LoadingProvider>
              <Providers>
                <Header />
                <main className='w-full flex flex-col justify-center items-center'>
                  {children}
                </main>
              </Providers>
            </LoadingProvider>
          </ColorProvider>
        </UrlValueProvider>
        <Footer />
      </body>
    </html>
  )
}
