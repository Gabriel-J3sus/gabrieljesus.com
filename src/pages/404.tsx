/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '../styles/pages/error'

const Custom404: React.FC = () => {
  const router = useRouter()

  function handleNavigateToHome() {
    router.replace('/')
  }

  return (
    <Container>
      <Head>
        <title>404 | Page not Found</title>
      </Head>

      <div className="contentWrapper">
        <h1>404 - Página não encontrada</h1>

        <span className="typesAndData">
          <p className="tag">Error</p>
          <p>404 | Not Found</p>
        </span>

        <p>
          Olá!!! Você está tentando acessar uma página inexistente, mas não há
          nenhum problema!!! Apenas clique no botão para retornar para a home.
        </p>

        <button onClick={handleNavigateToHome}>Voltar para Home</button>
      </div>
    </Container>
  )
}

export default Custom404
