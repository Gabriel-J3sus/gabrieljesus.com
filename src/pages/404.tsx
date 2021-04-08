/* eslint-disable no-use-before-define */
import { useRouter } from 'next/router'
import React from 'react'

import { Header } from '../components/Header'
import { PostsContainer } from '../components/PostsContainer'

import { Container } from '../styles/pages/404'

const Custom404: React.FC = () => {
  const router = useRouter()

  function handleNavigateToHome() {
    router.replace('/')
  }

  return (
    <Container>
      <Header />

      <div className="contentWrapper">
        <h1>404 - Page Not Found</h1>

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
