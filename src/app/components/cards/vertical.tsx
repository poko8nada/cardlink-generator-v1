import Link from 'next/link'
import type { OgObject } from 'open-graph-scraper/types'
import { twj } from 'tw-to-css'

export default ({ ogp }: { ogp: OgObject | null }) => {
  return (
    <>
      {ogp?.ogUrl && ogp?.ogImage?.[0]?.url && (
        <div
          // className='max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800'
          style={twj('max-w-xs rounded-md shadow-md bg-gray-100')}
        >
          <Link href={ogp.ogUrl} target='_blank' rel='noopener noreferrer'>
            <img
              src={ogp.ogImage[0].url}
              alt={ogp.ogImage[0].alt || 'og image'}
              style={twj(
                'object-cover object-center w-full rounded-t-md h-72 bg-gray-500',
              )}
            />
          </Link>
          <div style={twj('flex flex-col justify-between p-6')}>
            <div style={twj('space-y-2')}>
              <Link href={ogp.ogUrl} target='_blank' rel='noopener noreferrer'>
                <h2
                  style={twj(
                    'text-xl font-semibold tracking-wide text-gray-900 mb-2',
                  )}
                >
                  {ogp.ogTitle}
                </h2>
              </Link>
              <p style={twj('text-gray-600 text-sm')}>{ogp.ogDescription}</p>
            </div>
            <Link
              href={ogp.ogUrl}
              target='_blank'
              rel='noopener noreferrer'
              style={twj('text-gray-700 text-sm ml-auto mt-2')}
            >
              <span>{ogp.ogUrl}</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
