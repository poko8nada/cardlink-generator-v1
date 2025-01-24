'use client'
import { colorTypes, reducer } from '@/lib/colorReducer'
import { Spinner } from '@heroui/react'
import type { OgObject } from 'open-graph-scraper/types'
import { useState } from 'react'
import { useReducer } from 'react'
import { Suspense } from 'react'
import URLForm from './components/URLForm'
import About from './components/about'
import HorizontalA from './components/cards/horizontalA'
import HorizontalB from './components/cards/horizontalB'
import PhotoMain from './components/cards/photoMain'
import Vertical from './components/cards/vertical'
import ColorPickier from './components/colorPickier'
import Footer from './components/footer'
import Header from './components/header'
import LinkData from './components/linkData'
import TabMenu from './components/tabMenu'

export default function Home() {
  const [ogp, setOgp] = useState<OgObject | null>(null)
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useReducer(reducer, colorTypes.light)
  const [isBorder, setIsBorder] = useState(false)
  // console.log('HOME')

  return (
    <>
      <Header>
        <URLForm loading={loading} setLoading={setLoading} setOgp={setOgp} />
        <div className={!ogp ? 'hidden' : 'ml-0 mr-auto md:mx-auto'}>
          <ColorPickier
            setColor={setColor}
            isBorder={isBorder}
            setIsBorder={setIsBorder}
          />
        </div>
      </Header>
      <main className='w-full flex flex-col justify-center items-center'>
        {loading && (
          <Spinner
            color='default'
            label='OGPを検索中です'
            labelColor='foreground'
            size='lg'
            className='my-36'
          />
        )}
        {!loading && (
          <>
            <section
              className={
                !ogp
                  ? 'hidden p-0 m-0'
                  : 'container mx-auto flex flex-col justify-center items-center p-4'
              }
            >
              <div className='mx-auto w-full max-w-3xl'>
                <TabMenu>
                  <Suspense fallback={<Spinner />}>
                    <HorizontalA ogp={ogp} color={color} isBorder={isBorder} />
                  </Suspense>
                </TabMenu>
                <TabMenu>
                  <HorizontalB ogp={ogp} color={color} isBorder={isBorder} />
                </TabMenu>
                <TabMenu>
                  <Vertical ogp={ogp} color={color} isBorder={isBorder} />
                </TabMenu>
                <TabMenu>
                  <PhotoMain ogp={ogp} color={color} isBorder={isBorder} />
                </TabMenu>
              </div>
            </section>
            <section
              className={
                !ogp ? 'hidden p-0 m-0' : 'container mx-auto p-4 mt-20'
              }
            >
              <div className={!ogp ? 'hidden' : 'mx-auto w-full max-w-3xl'}>
                <LinkData ogp={ogp} />
              </div>
            </section>
          </>
        )}
        <section className='container mx-auto p-4 mt-20'>
          <About />
        </section>
      </main>
      <Footer />
    </>
  )
}
