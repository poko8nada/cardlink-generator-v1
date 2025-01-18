import { getOgp } from '@/lib/getOgp'
import type { NextRequest } from 'next/server'
import type { OgObject } from 'open-graph-scraper/types'

export async function POST(req: NextRequest) {
  if (!req.body) return new Response(null, { status: 400 })
  const { url } = await req.json()
  const ogp = await getOgp(url)
  if (!ogp) return new Response(null, { status: 400 })
  return new Response(JSON.stringify(ogp))
}
