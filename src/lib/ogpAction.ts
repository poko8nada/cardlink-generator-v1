import type { OgObject } from 'open-graph-scraper/types'
import { getOgp } from './getOgp'

export const ogpAction = async (
  prevState: OgObject | null,
  formData: FormData,
): Promise<OgObject | null> => {
  const url_string = formData.get('url')
  const url = new URL(url_string as string)
  console.log(url)

  if (!url) return null
  if (typeof url_string !== 'string') return null
  const ogp = await getOgp(url_string)
  return ogp
}
