import Link from 'next/link'
import type { OgObject } from 'open-graph-scraper/types'

export default ({ ogp }: { ogp: OgObject | null }) => {
  return (
    <>
      {ogp?.ogUrl && ogp?.ogImage?.[0]?.url && (
        <div className='max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800'>
          <Link href={ogp.ogUrl} target='_blank' rel='noopener noreferrer'>
            <img
              src={ogp.ogImage[0].url}
              alt={ogp.ogImage[0].alt || 'og image'}
              className='object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500'
            />
          </Link>
          <div className='flex flex-col justify-between p-6 space-y-8'>
            <div className='space-y-2'>
              <Link href={ogp.ogUrl} target='_blank' rel='noopener noreferrer'>
                <h2 className='text-xl font-semibold tracking-wide'>
                  {ogp.ogTitle}
                </h2>
              </Link>
              <p className='text-gray-100 dark:text-gray-800'>
                {ogp.ogDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
