import ogs from 'open-graph-scraper'
import type { OgObject } from 'open-graph-scraper/types'

export const getOgp = async (url: string): Promise<OgObject | null> => {
  try {
    const data = await ogs({ url })
    return data.result
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return null
  }
}
