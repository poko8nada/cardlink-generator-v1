export type Color = {
  name: string
  bg: string
  title: string
  text: string
  border: string
}

export const colorPalette = {
  light: {
    name: 'light',
    bg: '#f3f4f6',
    title: '#374151',
    text: '#6b7280',
    border: '#6b7280',
  },
  dark: {
    name: 'dark',
    bg: '#272727',
    title: '#eeeeee',
    text: '#ababab',
    border: '#eeeeee',
  },
}

export const reducer = (state: Color, action: { type: string }): Color => {
  switch (action.type) {
    case 'light':
      return colorPalette[action.type]
    case 'dark':
      return colorPalette[action.type]
    default:
      return state
  }
}
