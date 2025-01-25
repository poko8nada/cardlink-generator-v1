import { Card, Snippet } from '@heroui/react'
import type { OgObject } from 'open-graph-scraper/types'

const dataStr = {
  title: 'タイトル',
  description: 'ディスクリプション',
  siteName: 'サイト名（ホスト）',
  url: 'リンクURL',
  imageUrl: '画像URL',
  faviconUrl: 'ファビコンURL',
}

export default ({ ogp }: { ogp: OgObject | null }) => {
  const data = {
    title: ogp?.ogTitle,
    description: ogp?.ogDescription,
    siteName: ogp?.ogSiteName,
    url: ogp?.ogUrl || ogp?.requestUrl,
    imageUrl: ogp?.ogImage?.[0]?.url,
    faviconUrl: ogp?.favicon,
  }
  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold mb-5'>リンクデータ</h2>
      {Object.keys(data).map(key => {
        return (
          <dl
            key={`item-${key}`}
            className='flex justify-between items-baseline gap-4 my-4 flex-col md:flex-row'
          >
            <dt className='shrink-0'>
              <h3>{dataStr[key as keyof typeof dataStr] || ''}</h3>
            </dt>
            <dd className='w-full max-w-xl'>
              <Card>
                <Snippet symbol='' className='w-full'>
                  {data[key as keyof typeof data]}
                </Snippet>
              </Card>
            </dd>
          </dl>
        )
      })}
      <div className='hidden'>
        <p>{data.title}</p>
        <p>{data.siteName}</p>
        <p>{data.url}</p>
        <p>{data.imageUrl || data.faviconUrl}</p>
      </div>
    </>
  )
}
