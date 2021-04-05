/* eslint-disable no-use-before-define */
import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <meta
            property="description"
            content="Eu sou o Gabriel, aqui, eu compartilho alguns fatos interessantes do mundo da programação, e mostro os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
          />

          <meta property="og:site_name" content="Gabriel Jesus Website" />
          <meta property="og:title" content="Bem-vindo ao meu blog!!" />
          <meta property="og:url" content="https://gabrjesus.vercel.app/" />
          <meta
            property="og:description"
            content="Eu sou o Gabriel, aqui, eu compartilho alguns fatos interessantes do mundo da programação, e mostro os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
          />

          <meta
            property="og:image"
            content="https://gabrjesus.vercel.app/logo-full.svg"
          />
          <meta property="og:image:type" content="image/svg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bem-vindo ao meu blog!!" />
          <meta
            name="twitter:description"
            content="Eu sou o Gabriel, aqui, eu compartilho alguns fatos interessantes do mundo da programação, e mostro os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
          />
          <meta
            name="twitter:image"
            content="https://gabrjesus.vercel.app/logo-full.svg"
          />
          <link rel="shortcut icon" href="logo.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
