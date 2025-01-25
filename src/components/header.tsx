'use client'
import UrlForm from '@/components/urlForm'
import { Navbar } from '@heroui/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import ColorPickier from './colorPickier'
export default function App() {
  const searchParams = useSearchParams()

  return (
    <Navbar shouldHideOnScroll isBordered isBlurred={false} height={'7rem'}>
      <section className='container mx-auto flex justify-center items-start md:items-center gap-1'>
        <Image
          src='/cardlinkIcon.png'
          alt='logo'
          width={46}
          height={46}
          className='w-10 md:w-14 p-1'
        />
        <div className='flex flex-col justify-between items-start md:flex-row w-full max-w-2xl'>
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
