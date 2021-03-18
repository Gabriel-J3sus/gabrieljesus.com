/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Header } from '../components/Header'

import {
  Container,
  CreatorDescriptionContainer,
  PostsContainer
} from '../styles/pages/contact'

const Contact: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Contato | Gabriel Araújo de Jesus</title>
      </Head>

      <Header />

      <CreatorDescriptionContainer>
        <img
          src="https://github.com/Gabriel-J3sus.png"
          alt="Gabriel Araújo de Jesus"
        />

        <div className="description">
          <h1>Olá, Eu sou Gabriel, Um curioso</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            maiores vel aliquid minus cumque, voluptas saepe ipsam molestias.
            Animi ad eveniet amet corrupti eaque inventore labore voluptatum
            magnam quisquam sit.
          </p>

          <button>Baixar curriculo</button>
        </div>
      </CreatorDescriptionContainer>

      <PostsContainer>
        <div className="wrapper">
          <span>
            <h3>Posts Recentes</h3>
            <Link href="#">
              <p>Ver tudo</p>
            </Link>
          </span>
        </div>
      </PostsContainer>
    </Container>
  )
}

export default Contact
