/* eslint-disable no-use-before-define */
import React from 'react'
import { AppProps } from 'next/app'

import { MyThemeProvider } from '../contexts/themeContext'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </MyThemeProvider>
  )
}

export default MyApp
