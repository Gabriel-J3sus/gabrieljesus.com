/* eslint-disable no-use-before-define */
import React from 'react'
import { AppProps } from 'next/app'

import { MyThemeProvider } from '../contexts/themeContext'
import GlobalStyle from '../styles/global'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MyThemeProvider>
      <GlobalStyle />

      <Header />

      <Component {...pageProps} />

      <Footer />
    </MyThemeProvider>
  )
}

export default MyApp
