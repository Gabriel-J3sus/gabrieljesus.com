/* eslint-disable no-use-before-define */
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllPostIds, getPostData } from '../api/posts'

import { PostData } from '../../types/PostsProps'

import { Container } from '../../styles/pages/project'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const Project: React.FC<PostData> = ({ postData }) => {
  return (
    <Container>
      <Head>
        <title>Work | {postData.title}</title>
      </Head>

      <Header page="work" />

      <div className="contentWrapper">
        <h1>{postData.title}</h1>

        <span className="typesAndData">
          <p className="tag">{postData.year}</p>
          <p>{postData.type}</p>
        </span>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>

      <Footer />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug)

  return {
    props: {
      postData
    }
  }
}

export default Project
