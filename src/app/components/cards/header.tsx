import { Navbar, NavbarContent, NavbarItem } from '@heroui/react'

export default function App({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Navbar shouldHideOnScroll isBordered isBlurred={false} height={'6rem'}>
      <section className='container mx-auto flex flex-col justify-between items-center md:flex-row'>
        {children}
      </section>
    </Navbar>
  )
}
