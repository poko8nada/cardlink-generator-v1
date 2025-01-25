import type { Metadata } from 'next'
import './globals.css'
import About from '@/components/about'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ColorProvider } from '@/components/provider/colorProvider'
import { LoadingProvider } from '@/components/provider/loadingProvider'
import { Providers } from '@/components/provider/providers'
import { UrlValueProvider } from '@/components/provider/urlValueProvider'

export const metadata: Metadata = {
  title: 'ブログカード風のリンクジェネレーター',
  description:
    'ブログやウェブサイトのリンクをカード形式で生成するツールです。簡単に使えて、見栄えの良いリンクを作成できます。',
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
        <section className='container mx-auto p-4 mt-20'>
          <About />
        </section>
        <Footer />
      </body>
    </html>
  )
}
