/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getSortedBlogPostsData } from '../api/blogPosts'

import { BlogPostsCardData } from '../../types/BlogPostsProps'

import { PostsContainer } from '../../components/PostsContainer'
import { Post } from '../../components/PostComponent'

import { Container } from '../../styles/pages/blog'

// ----- Framer Motion Variants -----

const containerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.75,
      type: 'spring',
      when: 'beforeChildren'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut'
    }
  }
}

const blog: React.FC<BlogPostsCardData> = ({ allBlogPostsData }) => {
  return (
    <Container
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
          content="https://gabrjesus.vercel.app/logo-full400.png"
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
          content="https://gabrjesus.vercel.app/logo-full400.png"
        />
      </Head>

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
