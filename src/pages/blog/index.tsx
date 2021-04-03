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
        <title>Blog | Menu</title>
      </Head>

      <Header page="blog" />
      {/* allBlogPostsData.length */}
      <PostsContainer title="Blog" postsLength={0}>
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
