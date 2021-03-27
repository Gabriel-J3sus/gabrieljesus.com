/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'

import { getSortedBlogPostsData } from '../api/blogPosts'

import { BlogPostsCardData } from '../../types/BlogPostsProps'

import { Header } from '../../components/Header'
import { Post } from '../../components/PostComponent'
import { Footer } from '../../components/Footer'

import { Container } from '../../styles/pages/blog'
import { GetStaticProps } from 'next'

const blog: React.FC<BlogPostsCardData> = ({ allBlogPostsData }) => {
  return (
    <Container>
      <Head>
        <title>Blog | Menu</title>
      </Head>

      <Header page="blog" />

      <div className="contentWrapper">
        <span>
          <h1>Blog</h1>
          <h2>{allBlogPostsData.length} Posts</h2>
        </span>
        <div className="postsContainer">
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
        </div>
      </div>

      <Footer />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogPostsData = getSortedBlogPostsData()

  return {
    props: {
      allBlogPostsData
    }
  }
}
export default blog
