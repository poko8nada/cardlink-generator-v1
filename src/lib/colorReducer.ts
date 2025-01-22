export type Color = {
  name: string
  bg: string
  title: string
  text: string
  border: string
}

export const colorTypes = {
  light: {
    name: 'light',
    bg: '#f3f4f6',
    title: '#374151',
    text: '#6b7280',
    border: '#e5e7eb',
  },
  dark: {
    name: 'dark',
    bg: '#0a0a0a',
    title: '#ededed',
    text: '#ededed',
    border: '#ededed',
  },
}

export const reducer = (state: Color, action: { type: string }): Color => {
  switch (action.type) {
    case 'light':
      return colorTypes[action.type]
    case 'dark':
      return colorTypes[action.type]
    default:
      return state
  }
}
