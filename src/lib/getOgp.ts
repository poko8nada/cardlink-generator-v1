import ogs from 'open-graph-scraper'
import type { OgObject } from 'open-graph-scraper/types'

const userAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'

export const getOgp = async (url: string): Promise<OgObject | null> => {
  const options = {
    url: url,
    fetchOptions: { headers: { 'user-agent': userAgent } },
  }
  try {
    const data = await ogs(options)
    return data.result
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}
