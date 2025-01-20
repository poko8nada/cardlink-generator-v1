import Link from 'next/link'
import type { OgObject } from 'open-graph-scraper/types'
import { twj } from 'tw-to-css'

export default ({ ogp }: { ogp: OgObject | null }) => {
  return (
    <>
      {ogp?.ogTitle && (
        <div style={twj('max-w-xs rounded-md shadow-md bg-gray-100 mx-auto')}>
          <Link
            href={ogp.ogUrl || ogp.requestUrl || ''}
            target='_blank'
            rel='noopener noreferrer'
            style={twj('flex justify-center items-center')}
          >
            {ogp.ogImage?.[0]?.url && (
              <img
                src={ogp.ogImage[0].url}
                alt={ogp.ogImage[0].alt || 'og image'}
                style={twj(
                  'object-cover object-center w-full max-w-[24rem] rounded-t-md aspect-auto	bg-gray-500',
                )}
              />
            )}
          </Link>
          <div style={twj('flex flex-col justify-between p-5 w-full')}>
            <Link
              href={ogp.ogUrl || ogp.requestUrl || ''}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2
                style={twj(
                  'text-xl font-semibold tracking-wide text-gray-900 mb-3 line-clamp-3',
                )}
              >
                {ogp.ogTitle}
              </h2>
            </Link>
            <p style={twj('text-gray-600 text-sm line-clamp-4')}>
              {ogp.ogDescription}
            </p>
            <Link
              href={ogp.ogUrl || ogp.requestUrl || ''}
              target='_blank'
              rel='noopener noreferrer'
              style={twj('ml-auto mt-3 flex gap-1 items-center')}
            >
              {ogp.favicon && (
                <img
                  src={ogp.favicon}
                  alt='favicon'
                  width={'18'}
                  height={'18'}
                  style={twj('rounded-full')}
                />
              )}
              <span
                style={twj(
                  'text-gray-700 text-xs leading-none line-clamp-1 max-w-[10rem]',
                )}
              >
                {ogp.ogSiteName || ogp.ogTitle}
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
