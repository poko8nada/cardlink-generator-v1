import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '検索結果 | ブログカード風のリンクジェネレーター',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
