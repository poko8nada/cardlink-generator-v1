import Link from 'next/link'
import type { OgObject } from 'open-graph-scraper/types'
import { twj } from 'tw-to-css'

export default ({ ogp }: { ogp: OgObject | null }) => {
  return (
    <>
      {ogp?.ogTitle && (
        <div
          style={twj(
            'min-w-[30rem] rounded-md shadow-md bg-gray-100 mx-auto max-w-3xl',
          )}
        >
          <Link
            href={ogp.ogUrl || ogp.requestUrl || ''}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2
              style={twj(
                'text-md font-semibold tracking-wide text-gray-900 mb-3 line-clamp-2 px-5 pt-4',
              )}
            >
              {ogp.ogTitle}
            </h2>
          </Link>
          <div style={twj('flex justify-center items-stretch px-5 pb-4 gap-3')}>
            <Link
              href={ogp.ogUrl || ogp.requestUrl || ''}
              target='_blank'
              rel='noopener noreferrer'
              style={twj('flex justify-center items-center shrink-0')}
            >
              {ogp.ogImage?.[0]?.url && (
                <img
                  src={ogp.ogImage[0].url}
                  alt={ogp.ogImage[0].alt || 'og image'}
                  style={{
                    ...twj(
                      'object-cover object-center w-full max-h-[8rem] max-w-[12rem] w-full h-full aspect-auto bg-gray-500',
                    ),
                    imageRendering: 'auto',
                  }}
                />
              )}
            </Link>
            <div style={twj('flex flex-col justify-between w-full')}>
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
                    'text-gray-700 text-xs leading-none line-clamp-1 max-w-[8rem]',
                  )}
                >
                  {ogp.ogSiteName || ogp.ogTitle}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
