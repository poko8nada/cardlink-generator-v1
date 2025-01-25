'use client'
import { reducer } from '@/hooks/colorReducer'
import { colorPalette } from '@/hooks/colorReducer'
import { createContext, useContext } from 'react'
import { useReducer } from 'react'

const ColorContext = createContext({
  color: colorPalette.light,
})

const SetColorContext = createContext<React.Dispatch<{ type: string }>>(
  () => {},
)

export const useColor = () => useContext(ColorContext)
export const useSetColor = () => useContext(SetColorContext)

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useReducer(reducer, colorPalette.light)
  return (
    <SetColorContext.Provider value={setColor}>
      <ColorContext.Provider value={{ color }}>
        {children}
      </ColorContext.Provider>
    </SetColorContext.Provider>
  )
}
