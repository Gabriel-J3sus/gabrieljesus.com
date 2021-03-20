/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Header } from '../components/Header'
import { CreatorDescription } from '../components/CreatorDescription'
import { Post } from '../components/Post'
import { Work } from '../components/Work'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/contact'

const Contact: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Contato | Gabriel Araújo de Jesus</title>
      </Head>

      <Header page="contact" />

      <CreatorDescription />

      <div className="ContactPostsContainer">
        <div className="wrapper">
          <span>
            <h3>Posts Recentes</h3>
            <Link href="blog">
              <p>Ver tudo</p>
            </Link>
          </span>

          <div className="postsContainer">
            <Post />
            <Post />
          </div>
        </div>
      </div>

      <div className="ContactWorkContainer">
        <h3>Projetos em Destaque</h3>

        <div className="worksContainer">
          <Work />
          <Work />
          <Work />
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Contact
