'use client'
import { colorTypes, reducer } from '@/lib/colorReducer'
import { Spinner } from '@heroui/react'
import { Card, CardBody } from '@heroui/react'
import type { OgObject } from 'open-graph-scraper/types'
import { useState } from 'react'
import { useReducer } from 'react'
import { Suspense } from 'react'
import URLForm from './components/URLForm'
import HorizontalA from './components/cards/horizontalA'
import HorizontalB from './components/cards/horizontalB'
import PhotoMain from './components/cards/photoMain'
import Vertical from './components/cards/vertical'
import ColorPickier from './components/colorPickier'
import TabMenu from './components/tabMenu'

export default function Home() {
  const [ogp, setOgp] = useState<OgObject | null>(null)
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useReducer(reducer, colorTypes.light)
  const [isBorder, setIsBorder] = useState(false)
  // console.log('HOME')

  return (
    <main className='w-full flex flex-col justify-center items-center'>
      <section className='container mx-auto p-4'>
        <URLForm loading={loading} setLoading={setLoading} setOgp={setOgp} />
      </section>
      <section className='container mx-auto p-4'>
        <div className={!ogp ? 'hidden' : 'mx-auto w-full max-w-lg'}>
          <ColorPickier
            setColor={setColor}
            isBorder={isBorder}
            setIsBorder={setIsBorder}
          />
        </div>
      </section>
      <section className='container mx-auto flex flex-col justify-center items-center p-4'>
        {loading && (
          <Spinner
            color='default'
            label='OGPを検索中です'
            labelColor='foreground'
            size='lg'
            className='my-20'
          />
        )}
        {!loading && (
          <div className={!ogp ? 'hidden' : 'mx-auto w-full max-w-3xl'}>
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
        )}
      </section>
      <section className='container mx-auto p-4'>
        <Card className='mx-auto w-full max-w-3xl'>
          <CardBody className='p-5 lg:p-10'>
            <h2 className='text-xl md:text-3xl font-bold mb-8 text-center'>
              カードタイプのリンクジェネレーター
            </h2>
            <p className='mt-4 leading-relaxed'>
              「デザイン」✕「テーマカラー」✕「ボーダーの有無」を組み合わせることができます。
              <br />
              コードは「code」タブをクリックして、
              <svg
                aria-hidden='true'
                fill='none'
                focusable='false'
                height='1em'
                role='presentation'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                width='1em'
                className='text-inherit opacity-100 scale-100 inline-block mx-1'
              >
                <path d='M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z' />
                <path d='M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16' />
                <path d='M16 12.9C16 9.4 14.6 8 11.1 8' />
              </svg>
              をクリックしてコピーできます。
            </p>
            <p className='mt-4 leading-relaxed'>
              入力したURLのOGP情報をもとにカードが作成されます。
              <br />
              URLによっては、正しくカードが作成されません。ご了承ください。
            </p>
          </CardBody>
        </Card>
      </section>
    </main>
  )
}
