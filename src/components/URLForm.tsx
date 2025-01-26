'use client'
import { useLoading } from '@/components/provider/loadingProvider'
import { Button, Form, Input } from '@heroui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { useSetUrl, useUrlValue } from './provider/urlValueProvider'

export default () => {
  // console.log('URLFORM')
  const { loading, setLoading } = useLoading()

  const { push } = useRouter()
  const searchParams = useSearchParams()

  const { urlObj } = useUrlValue()
  const setUrl = useSetUrl()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = Object.fromEntries(new FormData(e.currentTarget))
      .url.toString()
      .trim()
    console.log(url)

    const addProtocolUrl =
      url.startsWith('http://') || url.startsWith('https://')
        ? url
        : `https://${url}`

    if (addProtocolUrl === searchParams.get('url')) {
      return
    }

    setLoading(true)

    try {
      new URL(addProtocolUrl)
    } catch {
      setUrl({
        ...urlObj,
        error: { url: 'URLが不正です' },
      })

      setLoading(false)
      return
    }

    setUrl({
      url: addProtocolUrl,
      error: { url: '' },
    })

    const params = new URLSearchParams(searchParams)
    params.set('url', addProtocolUrl)
    push(`/result?${params.toString()}`)
  }

  return (
    <Suspense>
      <Form
        className='w-full flex flex-row justify-center items-s gap-3 mx-2'
        onSubmit={onSubmit}
        action='/api/ogp'
        validationErrors={urlObj.error}
      >
        <Input
          placeholder='https://hogehogefugafuga.com'
          type='url'
          className='w-full'
          name='url'
          defaultValue={searchParams.get('url')?.toString()}
        />
        <Button
          type='submit'
          variant='flat'
          name='submitButton'
          isLoading={loading}
        >
          作成
        </Button>
      </Form>
    </Suspense>
  )
}
