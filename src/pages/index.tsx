/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { CreatorDescription } from '../components/CreatorDescription'
import { ContactPostsContainer } from '../components/ContactPostsContainer'
import { Post } from '../components/Post'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/contact'

const Contact: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Contato | Gabriel Araújo de Jesus</title>
      </Head>

      <Header />

      <CreatorDescription />

      <ContactPostsContainer>
        <Post />
        <Post />
      </ContactPostsContainer>

      <Footer />
    </Container>
  )
}

export default Contact
