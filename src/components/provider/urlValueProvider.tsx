'use client'
import { createContext, useContext, useState } from 'react'

export type UrlValue = {
  url: string
  error: { url: string }
}

const UrlValueContext = createContext({
  urlObj: { url: '', error: { url: '' } },
})

const SetUrlContext = createContext<
  React.Dispatch<{ url: string; error: { url: string } }>
>(() => {})

export const useUrlValue = () => useContext(UrlValueContext)
export const useSetUrl = () => useContext(SetUrlContext)

export const UrlValueProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [urlObj, setUrl] = useState({ url: '', error: { url: '' } })
  return (
    <SetUrlContext.Provider value={setUrl}>
      <UrlValueContext.Provider value={{ urlObj }}>
        {children}
      </UrlValueContext.Provider>
    </SetUrlContext.Provider>
  )
}
