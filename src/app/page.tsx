'use client'
import type { OgObject } from 'open-graph-scraper/types'
import { useState } from 'react'
import URLForm from './components/URLForm'

export default function Home() {
  const [ogp, ogpDispatch] = useState<OgObject | null>(null)

  return (
    <div className=''>
      <main className='w-full flex flex-col justify-center items-center'>
        <section className='container mx-auto p-4'>
          <URLForm ogpDispatch={ogpDispatch} />
        </section>
        <section className='container mx-auto p-4'>
          {ogp ? (
            <div>
              {ogp.ogImage && (
                <img
                  src={ogp.ogImage[0].url}
                  alt={ogp.ogImage[0].alt || 'og image'}
                />
              )}
              <h1>{ogp.ogTitle}</h1>
              <p>{ogp.ogDescription}</p>
            </div>
          ) : (
            <p>loading...</p>
          )}
        </section>
      </main>
    </div>
  )
}
