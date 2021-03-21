/* eslint-disable no-use-before-define */
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface ThemeContextData {
  theme: DefaultTheme
  toggleTheme(): void
}

export const MyThemeContext = createContext({} as ThemeContextData)

export const MyThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [setTheme, theme.title])

  useEffect(() => {
    const storageValue = localStorage.getItem('@GabrielJesus.com')

    if (storageValue === 'dark') {
      setTheme(dark)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@GabrielJesus.com', theme.title)
  }, [theme])

  return (
    <MyThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  )
}
