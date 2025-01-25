'use client'
import UrlForm from '@/components/urlForm'
import { Navbar, cn } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import ColorPickier from './colorPickier'
export default function App() {
  const searchParams = useSearchParams()

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isBlurred={false}
      classNames={{
        base: cn('min-h-[5rem]'),
        wrapper: cn('h-full'),
      }}
    >
      <section className='p-2 container mx-auto flex justify-center items-start md:items-center gap-1 h-full'>
        <Link href='/'>
          <Image
            src='/cardlinkIcon.png'
            alt='logo'
            width={46}
            height={46}
            className='w-10 md:w-14 p-1'
          />
        </Link>
        <div className='flex flex-col justify-between items-center md:flex-row w-full max-w-2xl'>
          <UrlForm />
          <div
            className={
              !searchParams.get('url') ? 'hidden' : 'ml-0 mr-auto md:mx-auto'
            }
          >
            <ColorPickier />
          </div>
        </div>
      </section>
    </Navbar>
  )
}
