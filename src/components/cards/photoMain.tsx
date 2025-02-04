import type { Color } from '@/hooks/colorReducer'
import { colorPalette } from '@/hooks/colorReducer'
import Link from 'next/link'
import type { OgObject } from 'open-graph-scraper/types'
import { twj } from 'tw-to-css'

export default ({
  ogp,
  color,
  isBorder,
}: { ogp: OgObject | null; color: Color; isBorder: boolean }) => {
  const { bg, title, border, name } = color
  if (!color) {
    color = colorPalette.light
  }
  let bgGrad = { ...twj('relative mt-auto pt-[3.5rem] px-4 pb-3') }
  if (name === 'dark') {
    bgGrad = {
      ...bgGrad,
      background:
        'linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(70,70,70,.8) 40%, rgba(200,200,200,.2) 80%, rgba(240,240,240,.0) 100%)',
    }
  } else if (name === 'light') {
    bgGrad = {
      ...bgGrad,
      background:
        'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(220,220,220,.8) 40%, rgba(200,200,200,.2) 80%, rgba(190,190,190,.0) 100%)',
    }
  }
  return (
    <>
      {ogp?.ogTitle && (
        <Link
          href={ogp.ogUrl || ogp.requestUrl || ''}
          style={{
            ...twj(
              'group relative flex max-w-[28rem] mx-auto h-[15rem] flex-col overflow-hidden rounded-lg shadow-lg',
            ),
            backgroundColor: bg,
            border: isBorder ? `2px solid ${border}` : 'none',
          }}
        >
          {ogp.ogImage?.[0]?.url && (
            <img
              src={ogp.ogImage[0].url}
              alt={ogp.ogImage[0].alt || 'og image'}
              loading='lazy'
              style={{
                ...twj(
                  'absolute inset-0 h-full w-full object-cover object-center bg-gray-500 ',
                ),
                imageRendering: 'auto',
              }}
            />
          )}
          <div style={bgGrad}>
            <span style={twj('ml-auto mb-1 flex gap-1 items-center')}>
              {ogp.favicon && (
                <img
                  src={ogp.favicon}
                  alt='favicon'
                  width={'18'}
                  height={'18'}
                  style={twj('rounded')}
                />
              )}
              <span
                style={{
                  ...twj('text-xs leading-none line-clamp-1 max-w-[10rem]'),
                  color: title,
                }}
              >
                {ogp.ogSiteName || ogp.ogTitle}
              </span>
            </span>
            <h2
              style={{
                ...twj(
                  'text-md font-semibold tracking-wide line-clamp-1 max-w-[30rem]',
                ),
                color: title,
              }}
            >
              {ogp.ogTitle}
            </h2>
          </div>
        </Link>
      )}
    </>
  )
}
