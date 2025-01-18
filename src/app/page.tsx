'use client'
import { Button, Form, Input } from '@heroui/react'
import { sub } from 'framer-motion/client'
import type { OgObject } from 'open-graph-scraper/types'
import { useState } from 'react'

export default function Home() {
  const [ogp, ogpDispatch] = useState<OgObject | null>(null)
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)

  const [submitValue, setSubmitValue] = useState({
    url: '',
    error: {},
    loading: false,
  })
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitValue(prev => ({ ...prev, loading: true }))

    const url = submitValue.url.toString().trim()

    const addProtocolUrl =
      url.startsWith('http://') || url.startsWith('https://')
        ? url
        : `https://${url}`
    console.log(addProtocolUrl)

    try {
      new URL(addProtocolUrl)
    } catch {
      setSubmitValue(prev => ({
        ...prev,
        error: {
          url: 'URLは無効です。正しいURLを入力してください',
        },
        loading: false,
      }))
      return
    }

    setSubmitValue(prev => ({
      ...prev,
      url: addProtocolUrl,
    }))

    const res = await fetch('/api/ogp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: addProtocolUrl }),
    })
    if (!res.ok) {
      setSubmitValue(prev => ({
        ...prev,
        error: { url: '正しいURLを入力してください' },
        loading: false,
      }))
      return
    }

    const data = await res.json()
    console.log(data)
    ogpDispatch(data)
    setSubmitValue(() => ({
      url: addProtocolUrl,
      error: {},
      loading: false,
    }))
  }

  return (
    <div className=''>
      <main className='w-full flex flex-col justify-center items-center'>
        <section className='container mx-auto p-4'>
          <Form
            className='w-full max-w-[40rem] flex flex-row justify-center items-s gap-3 mx-auto'
            onSubmit={onSubmit}
            action='/api/ogp'
            validationErrors={submitValue.error}
          >
            <Input
              placeholder='https://hogehogefugafuga.com'
              type='url'
              className='w-full'
              name='url'
              value={submitValue.url}
              onChange={e => {
                setSubmitValue(prev => ({
                  ...prev,
                  url: e.target.value,
                }))
              }}
            />
            <Button
              type='submit'
              variant='flat'
              name='submitButton'
              isLoading={submitValue.loading}
            >
              作成
            </Button>
          </Form>
        </section>
        <section>
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
