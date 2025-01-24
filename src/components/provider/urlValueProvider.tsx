'use client'
import { createContext, useContext, useState } from 'react'

export type UrlValue = {
  url: string
  error: { url: string }
}

const UrlValueContext = createContext({
  urlObj: { url: '', error: { url: '' } },
  setUrl: (urlObj: UrlValue) => {},
})

export const useUrlValue = () => useContext(UrlValueContext)

export const UrlValueProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [urlObj, setUrl] = useState({ url: '', error: { url: '' } })
  return (
    <UrlValueContext.Provider value={{ urlObj, setUrl }}>
      {children}
    </UrlValueContext.Provider>
  )
}
