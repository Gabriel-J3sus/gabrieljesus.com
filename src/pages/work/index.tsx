/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getSortedProjectsPostsData } from '../api/projectsPosts'

import { ProjectPostsCardData } from '../../types/ProjectsPostProps'

import { Header } from '../../components/Header'
import { PostsContainer } from '../../components/PostsContainer'
import { Work } from '../../components/WorkComponent'
import { Footer } from '../../components/Footer'

import { Container } from '../../styles/pages/work'

const work: React.FC<ProjectPostsCardData> = ({ allProjectsPostsData }) => {
  return (
    <Container>
      <Head>
        <title>Projetos | Menu</title>
      </Head>

      <Header page="work" />

      <PostsContainer
        title="Projetos"
        postsLength={allProjectsPostsData.length}
      >
        {allProjectsPostsData.map(
          ({ slug, title, year, type, description }) => (
            <Work
              key={slug}
              slug={slug}
              title={title}
              year={year}
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
  const allProjectsPostsData = getSortedProjectsPostsData()

  return {
    props: {
      allProjectsPostsData
    }
  }
}

export default work
