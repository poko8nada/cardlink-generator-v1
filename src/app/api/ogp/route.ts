import { getOgp } from '@/lib/getOgp'
import type { NextRequest } from 'next/server'
import type { OgObject } from 'open-graph-scraper/types'

export async function POST(req: NextRequest) {
  if (!req.body) return new Response(null, { status: 400 })
  const { url } = await req.json()
  const ogp = await getOgp(url)
  if (!ogp) return new Response(null, { status: 400 })

  console.log(ogp)

  if (ogp.ogUrl && ogp.ogImage && /^https:\/\/www\.amazon*/.test(ogp.ogUrl)) {
    ogp.ogImage = ogp.ogImage.toReversed().filter(image => {
      return (
        image.url.includes('/I/') &&
        image.url.includes('_SX') &&
        image.url.includes('_SY')
      )
    })
    ogp.favicon = 'https://www.amazon.co.jp/favicon.ico'
  }
  if (ogp.requestUrl && /^https:\/\/www\.google*/.test(ogp.requestUrl)) {
    ogp.favicon = 'https://www.google.com/favicon.ico'
  }
  if (ogp.ogUrl && ogp.ogImage && /^https:\/\/github\.com*/.test(ogp.ogUrl)) {
    ogp.ogImage[0].url = `${ogp.ogImage[0].url}?s=200`
  }

  if (ogp.favicon && ogp.ogUrl) {
    const faviconHref = ogp.favicon
    const favicon = /^http.*/.test(faviconHref)
      ? faviconHref
      : `${ogp.ogUrl.replace(/(^https?:\/\/[^/]+).*$/, '$1')}/${faviconHref.replace(/^\/?/, '').replace(/\/?$/, '')}`
    ogp.favicon = favicon
  }

  if (ogp.ogUrl && !ogp.ogSiteName) {
    ogp.ogSiteName = new URL(ogp.ogUrl).hostname
  }

  return new Response(JSON.stringify(ogp))
}
