/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Post } from '../components/PostComponent'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/blog'

const blog: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Blog | Menu</title>
      </Head>

      <Header page="blog" />

      <div className="contentWrapper">
        <span>
          <h1>Blog</h1>
          <h2>0 Posts</h2>
        </span>
        <div className="postsContainer">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      <Footer />
    </Container>
  )
}

export default blog
