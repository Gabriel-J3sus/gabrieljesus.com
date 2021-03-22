/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Work } from '../components/WorkComponent'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/work'

const work: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Projetos | Menu</title>
      </Head>

      <Header page="work" />

      <div className="contentWrapper">
        <h1>Projetos</h1>
        <div className="worksContainer">
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
      </div>

      <Footer />
    </Container>
  )
}

export default work
