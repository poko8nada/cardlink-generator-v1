import { Button, Form, Input } from '@heroui/react'
import type { OgObject } from 'open-graph-scraper/types'
import { useState } from 'react'

export default ({
  ogpDispatch,
}: { ogpDispatch: React.Dispatch<React.SetStateAction<OgObject | null>> }) => {
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
        error: { url: 'OGPの取得に失敗しました' },
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
  )
}
