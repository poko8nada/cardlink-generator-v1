import { Navbar } from '@heroui/react'
import Image from 'next/image'
export default function App({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Navbar shouldHideOnScroll isBordered isBlurred={false} height={'6.5rem'}>
      <section className='container mx-auto flex justify-center items-start md:items-center gap-1'>
        <Image
          src='/cardlinkIcon.png'
          alt='logo'
          width={46}
          height={46}
          className='w-10 md:w-14 p-1'
        />
        <div className='flex flex-col justify-between items-center md:flex-row w-full max-w-2xl'>
          {children}
        </div>
      </section>
    </Navbar>
  )
}
