'use client'
import { Spinner } from '@heroui/react'
import type { OgObject } from 'open-graph-scraper/types'
import { useState } from 'react'
import URLForm from './components/URLForm'
import HorizontalA from './components/cards/horizontalA'
import Vertical from './components/cards/vertical'
import TabMenu from './components/tabMenu'

export default function Home() {
  const [ogp, ogpDispatch] = useState<OgObject | null>(null)
  const [loading, setLoading] = useState(false)
  console.log(ogp)

  return (
    <div className=''>
      <main className='w-full flex flex-col justify-center items-center'>
        <section className='container mx-auto p-4'>
          <URLForm
            ogpDispatch={ogpDispatch}
            loading={loading}
            setLoading={setLoading}
          />
        </section>
        <section className='container mx-auto flex flex-col justify-center items-center p-4'>
          {loading && (
            <Spinner
              color='default'
              label='OGPを検索中です'
              labelColor='foreground'
              size='lg'
              className='mt-20'
            />
          )}
          {!loading && ogp && (
            <>
              <TabMenu>
                <HorizontalA ogp={ogp} />
              </TabMenu>
              <TabMenu>
                <Vertical ogp={ogp} />
              </TabMenu>
            </>
          )}
        </section>
      </main>
    </div>
  )
}
