/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/blog'

const blog: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Blog | Menu</title>
      </Head>

      <Header page="blog" />
      <h1>Blog</h1>
      <Footer />
    </Container>
  )
}

export default blog
