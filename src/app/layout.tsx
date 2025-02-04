import type { Metadata } from 'next'
import './globals.css'
import About from '@/components/about'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ColorProvider } from '@/components/provider/colorProvider'
import { LoadingProvider } from '@/components/provider/loadingProvider'
import { Providers } from '@/components/provider/providers'
import { UrlValueProvider } from '@/components/provider/urlValueProvider'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'ブログカード風のリンクジェネレーター',
  description:
    'ブログやウェブサイトのリンクをカード形式で生成するツールです。簡単に使えて、見栄えの良いリンクを作成できます。',
  alternates: {
    canonical: 'https://cardlink-generator-v1.vercel.app/',
  },
  openGraph: {
    title: 'ブログカード風のリンクジェネレーター',
    description:
      'ブログやウェブサイトのリンクをカード形式で生成するツールです。簡単に使えて、見栄えの良いリンクを作成できます。',
    images: [
      {
        url: 'https://cardlink-generator-v1.vercel.app/cardlinkIcon.png',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'ブログカード風のリンクジェネレーター',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://cardlink-generator-v1.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ブログカード風のリンクジェネレーター',
    description:
      'ブログやウェブサイトのリンクをカード形式で生成するツールです。簡単に使えて、見栄えの良いリンクを作成できます。',
    images: [
      {
        url: 'https://cardlink-generator-v1.vercel.app/cardlinkIcon.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' className='dark'>
      <body className={'antialiased min-h-svh'}>
        <Suspense>
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
        </Suspense>
        <section className='container mx-auto p-4 mt-16'>
          <About />
        </section>
        <Footer />
      </body>
    </html>
  )
}
