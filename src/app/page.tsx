'use client'
import { reducer } from '@/lib/colorReducer'
import { Spinner } from '@heroui/react'
import type { OgObject } from 'open-graph-scraper/types'
import { useState } from 'react'
import { useReducer } from 'react'
import URLForm from './components/URLForm'
import HorizontalA from './components/cards/horizontalA'
import HorizontalB from './components/cards/horizontalB'
import Vertical from './components/cards/vertical'
import ColorPickier from './components/colorPickier'
import TabMenu from './components/tabMenu'

export default function Home() {
  const [ogp, setOgp] = useState<OgObject | null>(null)
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useReducer(reducer, {
    bg: '#f3f4f6',
    title: '#374151',
    text: '#6b7280',
    border: '#e5e7eb',
  })
  console.log('HOME')

  return (
    <main className='w-full flex flex-col justify-center items-center'>
      <section className='container mx-auto p-4'>
        <URLForm loading={loading} setLoading={setLoading} setOgp={setOgp} />
      </section>
      <section className='container mx-auto p-4'>
        <ColorPickier setColor={setColor} />
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
        {!loading && (
          <>
            <TabMenu>
              <HorizontalA ogp={ogp} color={color} />
            </TabMenu>
            <TabMenu>
              <HorizontalB ogp={ogp} color={color} />
            </TabMenu>
            {/* <TabMenu>
              <Vertical ogp={ogp} />
            </TabMenu> */}
          </>
        )}
      </section>
    </main>
  )
}
