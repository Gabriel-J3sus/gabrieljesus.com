/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getSortedBlogPostsData } from '../api/blogPosts'

import { BlogPostsCardData } from '../../types/BlogPostsProps'

import { Header } from '../../components/Header'
import { PostsContainer } from '../../components/PostsContainer'
import { Post } from '../../components/PostComponent'
import { Footer } from '../../components/Footer'

import { Container } from '../../styles/pages/blog'

const blog: React.FC<BlogPostsCardData> = ({ allBlogPostsData }) => {
  return (
    <Container>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Blog | Gabriel Araújo de Jesus</title>
        <meta name="title" content="Blog | Gabriel Araújo de Jesus" />
        <meta
          name="description"
          content="Aqui, eu compartilho alguns fatos interessantes, e valiosos do mundo da programação."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrjesus.vercel.app/blog" />
        <meta property="og:title" content="Blog | Gabriel Araújo de Jesus" />
        <meta
          property="og:description"
          content="Aqui, eu compartilho alguns fatos interessantes, e valiosos do mundo da programação."
        />
        <meta
          property="og:image"
          content="https://gabrjesus.vercel.app/logo-full.svg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gabrjesus.vercel.app/blog"
        />
        <meta
          property="twitter:title"
          content="Blog | Gabriel Araújo de Jesus"
        />
        <meta
          property="twitter:description"
          content="Aqui, eu compartilho alguns fatos interessantes, e valiosos do mundo da programação."
        />
        <meta
          property="twitter:image"
          content="https://gabrjesus.vercel.app/logo-full.svg"
        />
      </Head>

      <Header page="blog" />

      <PostsContainer title="Blog" postsLength={allBlogPostsData.length}>
        {allBlogPostsData.map(
          ({ slug, title, formatedDate, type, description }) => (
            <Post
              key={slug}
              slug={slug}
              title={title}
              formatedDate={formatedDate}
              type={type}
              description={description}
            />
          )
        )}
      </PostsContainer>

      <Footer />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogPostsData = getSortedBlogPostsData()

  return {
    props: {
      allBlogPostsData
    },
    revalidate: 300
  }
}
export default blog
