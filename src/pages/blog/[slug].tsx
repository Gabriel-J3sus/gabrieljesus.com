/* eslint-disable no-use-before-define */
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllBlogPostsIds, getBlogPostData } from '../api/blogPosts'

import { BlogPostData } from '../../types/BlogPostsProps'

import { Header } from '../../components/Header'
import { BlogPostDetailsComponent } from '../../components/SmallerComponents'
import { ShareButtons } from '../../components/ShareButtons'
import { Footer } from '../../components/Footer'

import { Container } from '../../styles/pages/post'

const Post: React.FC<BlogPostData> = ({ BlogPostData }) => {
  return (
    <Container>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{BlogPostData?.title} | Post</title>
        <meta name="title" content={`${BlogPostData?.title} | Post`} />
        <meta name="description" content={`${BlogPostData?.description}`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://gabrjesus.vercel.app/work/${BlogPostData?.slug}`}
        />
        <meta property="og:title" content={`${BlogPostData?.title} | Post`} />
        <meta
          property="og:description"
          content={`${BlogPostData?.description}`}
        />
        <meta
          property="og:image"
          content="https://gabrjesus.vercel.app/logo-full.svg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://gabrjesus.vercel.app/work/${BlogPostData?.slug}`}
        />
        <meta
          property="twitter:title"
          content={`${BlogPostData?.title} | Post`}
        />
        <meta
          property="twitter:description"
          content={`${BlogPostData?.description}`}
        />
        <meta
          property="twitter:image"
          content="https://gabrjesus.vercel.app/logo-full.svg"
        />
      </Head>

      <Header />

      <div className="contentWrapper">
        <h1>{BlogPostData?.title}</h1>

        <BlogPostDetailsComponent
          formatedDate={BlogPostData?.formatedDate}
          type={BlogPostData?.type}
        />

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: BlogPostData?.contentHtml }}
        />

        <ShareButtons
          url={`https://gabrjesus.vercel.app/work/${BlogPostData?.slug}`}
          title={BlogPostData?.title}
          description={BlogPostData?.description}
          source={`https://gabrjesus.vercel.app/work/${BlogPostData?.slug}`}
        />
      </div>

      <Footer />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogPostsIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const BlogPostData = await getBlogPostData(params.slug)

  return {
    props: {
      BlogPostData
    }
  }
}

export default Post
