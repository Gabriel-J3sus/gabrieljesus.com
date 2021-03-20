/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/work'

const work: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Projetos | Menu</title>
      </Head>

      <Header page="work" />
      <h1>Work</h1>
      <Footer />
    </Container>
  )
}

export default work
