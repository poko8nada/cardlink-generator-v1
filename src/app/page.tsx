'use client'
import { ogpAction } from '@/lib/ogpAction'
import { Button, Form, Input } from '@heroui/react'
import { useFormState } from 'react-dom'

export default function Home() {
  const [ogp, ogpDispatch] = useFormState(ogpAction, null)

  return (
    <div className=''>
      <main className='w-full h-screen flex justify-center items-center'>
        <section className='container mx-auto p-4'>
          <Form
            className='w-full max-w-[40rem] flex flex-row justify-center items-end gap-3 mx-auto'
            // validationErrors={errors}
            action={ogpDispatch}
          >
            <Input
              label='Website'
              labelPlacement='outside'
              placeholder='https://hogehogefugafuga.com'
              type='url'
              className='w-full'
            />
            <Button type='submit' variant='flat'>
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
