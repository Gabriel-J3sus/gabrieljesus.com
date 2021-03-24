/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getSortedPostsData } from '../api/posts'

import { Header } from '../../components/Header'
import { Work } from '../../components/WorkComponent'
import { Footer } from '../../components/Footer'

import { Container } from '../../styles/pages/work'

interface PostsData {
  allPostsData: Array<{
    slug: string
    title: string
    date: string
    year: string
    type: string
  }>
}

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
          {allPostsData.map(({ slug, title, year, type }) => (
            <Work key={slug} slug={slug} title={title} year={year} type={type}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              incidunt quas quaerat voluptatum soluta velit tempora fuga
              corrupti ab autem cupiditate, sit doloribus sunt eligendi rerum
              atque, quibusdam aliquam consectetur!
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
