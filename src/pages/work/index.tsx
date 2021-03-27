/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getSortedProjectsPostsData } from '../api/projectsPosts'

import { ProjectPostsCardData } from '../../types/ProjectsPostProps'

import { Header } from '../../components/Header'
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

      <div className="contentWrapper">
        <span>
          <h1>Projetos</h1>
          <h2>{allProjectsPostsData.length} Post</h2>
        </span>
        <div className="worksContainer">
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
        </div>
      </div>

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
