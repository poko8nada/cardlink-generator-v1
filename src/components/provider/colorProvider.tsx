'use client'
import { reducer } from '@/hooks/colorReducer'
import { type Color, colorPalette } from '@/hooks/colorReducer'
import { createContext, useContext, useState } from 'react'
import { useReducer } from 'react'

const ColorContext = createContext({
  color: colorPalette.light,
  setColor: (action: { type: string }) => {},
})

export const useColor = () => useContext(ColorContext)

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useReducer(reducer, colorPalette.light)
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}
