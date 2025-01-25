import { getOgp } from '@/lib/getOgp'
import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  if (!req) return new Response(null, { status: 400 })

  const searchParams = req.nextUrl.searchParams
  const url = searchParams.get('url')
  if (!url) return new Response(null, { status: 400 })

  const ogp = await getOgp(url)
  if (!ogp) return new Response(null, { status: 400 })

  if (ogp.ogImage) {
    ogp.ogImage = ogp.ogImage.filter(image => {
      return (
        image.url.includes('.png') ||
        image.url.includes('.gif') ||
        image.url.includes('.jpg') ||
        image.url.includes('.jpeg')
      )
    })
  }

  if (ogp.favicon && (ogp.requestUrl || ogp.ogUrl)) {
    const url = ogp.requestUrl || ogp.ogUrl
    const faviconHref = ogp.favicon
    if (url) {
      const favicon = /^http.*/.test(faviconHref)
        ? faviconHref
        : `${url.replace(/(^https?:\/\/[^/]+).*$/, '$1')}/${faviconHref.replace(/^\/?/, '').replace(/\/?$/, '')}`
      ogp.favicon = favicon
    }
  }

  if (ogp.ogUrl && !ogp.ogSiteName) {
    ogp.ogSiteName = new URL(ogp.ogUrl).hostname
  }

  if (ogp.ogUrl && ogp.ogImage && /https:\/\/www\.amazon.*/.test(ogp.ogUrl)) {
    ogp.ogImage = ogp.ogImage.toReversed().filter(image => {
      return (
        image.url.includes('/I/') &&
        image.url.includes('_SX') &&
        image.url.includes('_SY')
      )
    })
    ogp.favicon = 'https://www.amazon.co.jp/favicon.ico'
  }
  if (
    ogp.ogUrl &&
    ogp.ogImage &&
    /https:\/\/www\.amazon.*\/gp\/video.*/.test(ogp.ogUrl)
  ) {
    ogp.ogImage = ogp.ogImage.filter(image => {
      return image.url.includes('/pv-target-images/')
    })
  }

  if (
    ogp.requestUrl &&
    /https:\/\/(www\.|item\.)rakuten\.co\.jp/.test(ogp.requestUrl)
  ) {
    ogp.favicon = 'https://www.rakuten.co.jp/favicon.ico'
  }
  if (ogp.requestUrl && /^https:\/\/www\.google*/.test(ogp.requestUrl)) {
    ogp.favicon = 'https://www.google.com/favicon.ico'
  }
  if (ogp.requestUrl && /^https:\/\/www\.youtube*/.test(ogp.requestUrl)) {
    ogp.favicon =
      'https://www.youtube.com/s/desktop/024ccc3d/img/logos/favicon_144x144.png'
  }
  if (ogp.requestUrl && /^https:\/\/note\.com*/.test(ogp.requestUrl)) {
    ogp.favicon =
      'https://assets.st-note.com/poc-image/manual/note-common-images/production/icons/android-chrome-192x192.png'
  }

  if (ogp.ogUrl && ogp.ogImage && /^https:\/\/github\.com*/.test(ogp.ogUrl)) {
    ogp.ogImage[0].url = `${ogp.ogImage[0].url}?s=200`
  }

  console.log(ogp)

  return new Response(JSON.stringify(ogp))
}
