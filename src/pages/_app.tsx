/* eslint-disable no-use-before-define */
import React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import { MyThemeProvider } from '../contexts/themeContext'
import GlobalStyle from '../styles/global'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const location = useRouter()

  return (
    <MyThemeProvider>
      <GlobalStyle />

      <Header />

      <AnimatePresence exitBeforeEnter>
        <Component key={location.pathname} {...pageProps} />
        <Footer key="footer" />
      </AnimatePresence>
    </MyThemeProvider>
  )
}

export default MyApp
