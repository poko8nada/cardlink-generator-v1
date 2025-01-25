'use client'
import HorizontalA from '@/components/cards/horizontalA'
import HorizontalB from '@/components/cards/horizontalB'
import PhotoMain from '@/components/cards/photoMain'
import Vertical from '@/components/cards/vertical'
import LinkData from '@/components/linkData'
import { useBorder, useColor } from '@/components/provider/colorProvider'
import { useLoading } from '@/components/provider/loadingProvider'
import { useSetUrl } from '@/components/provider/urlValueProvider'
import TabMenu from '@/components/tabMenu'
import { Spinner } from '@heroui/react'
import { useSearchParams } from 'next/navigation'
import type { OgObject } from 'open-graph-scraper/types'
import { useEffect, useState } from 'react'

export default () => {
  const { loading, setLoading } = useLoading()
  const setUrl = useSetUrl()
  const { color } = useColor()
  const { isBorder } = useBorder()

  const [ogp, setOgp] = useState<OgObject | null>(null)

  const searchParams = useSearchParams()
  const url = searchParams.get('url')

  useEffect(() => {
    async function fetchOgp() {
      setLoading(true)

      const res = await fetch(`/api/ogp?url=${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        setUrl({
          url: url ? url.toString() : '',
          error: { url: 'OGPの取得に失敗しました' },
        })
        setLoading(false)
        return
      }

      const data = await res.json()
      setOgp(data)
      setLoading(false)
    }
    if (url) {
      fetchOgp()
    }
  }, [url, setUrl, setLoading])

  return (
    <>
      {loading && (
        <Spinner
          color='default'
          label='OGPを検索中です'
          labelColor='foreground'
          size='lg'
          className='my-36'
        />
      )}
      {!loading && (
        <>
          <section
            className={
              !ogp
                ? 'hidden p-0 m-0'
                : 'container mx-auto flex flex-col justify-center items-center p-4'
            }
          >
            <div className='mx-auto w-full max-w-3xl'>
              <TabMenu>
                <HorizontalA ogp={ogp} color={color} isBorder={isBorder} />
              </TabMenu>
              <TabMenu>
                <HorizontalB ogp={ogp} color={color} isBorder={isBorder} />
              </TabMenu>
              <TabMenu>
                <Vertical ogp={ogp} color={color} isBorder={isBorder} />
              </TabMenu>
              <TabMenu>
                <PhotoMain ogp={ogp} color={color} isBorder={isBorder} />
              </TabMenu>
            </div>
          </section>
          <section
            className={!ogp ? 'hidden p-0 m-0' : 'container mx-auto p-4 mt-20'}
          >
            <div className={!ogp ? 'hidden' : 'mx-auto w-full max-w-3xl'}>
              <LinkData ogp={ogp} />
            </div>
          </section>
        </>
      )}
    </>
  )
}
