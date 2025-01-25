'use client'
import { reducer } from '@/hooks/colorReducer'
import { colorPalette } from '@/hooks/colorReducer'
import { createContext, useContext } from 'react'
import { useReducer, useState } from 'react'

const ColorContext = createContext({
  color: colorPalette.light,
})

const SetColorContext = createContext<React.Dispatch<{ type: string }>>(
  () => {},
)

const BorderContext = createContext<{
  isBorder: boolean
}>({
  isBorder: false,
})

const SetIsBorderContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {})

export const useColor = () => useContext(ColorContext)
export const useSetColor = () => useContext(SetColorContext)
export const useBorder = () => useContext(BorderContext)
export const useSetIsBorder = () => useContext(SetIsBorderContext)

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useReducer(reducer, colorPalette.light)
  const [isBorder, setIsBorder] = useState(false)
  return (
    <SetIsBorderContext.Provider value={setIsBorder}>
      <BorderContext.Provider value={{ isBorder }}>
        <SetColorContext.Provider value={setColor}>
          <ColorContext.Provider value={{ color }}>
            {children}
          </ColorContext.Provider>
        </SetColorContext.Provider>
      </BorderContext.Provider>
    </SetIsBorderContext.Provider>
  )
}
