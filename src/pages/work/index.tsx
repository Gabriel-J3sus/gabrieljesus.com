/* eslint-disable no-use-before-define */
import React, { memo } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getSortedPostsData } from '../api/posts'

import { Header } from '../../components/Header'
import { Work } from '../../components/WorkComponent'
import { Footer } from '../../components/Footer'

import { Container } from '../../styles/pages/work'
import { PostsData } from '../../types/PostsInterfaces'

const work: React.FC<PostsData> = ({ allPostsData }) => {
  return (
    <Container>
      <Head>
        <title>Projetos | Menu</title>
      </Head>

      <Header page="work" />

      <div className="contentWrapper">
        <h1>Projetos</h1>
        <div className="worksContainer">
          {allPostsData.map(({ slug, title, year, type, description }) => (
            <Work key={slug} slug={slug} title={title} year={year} type={type}>
              {description}
            </Work>
          ))}
        </div>
      </div>

      <Footer />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default work
