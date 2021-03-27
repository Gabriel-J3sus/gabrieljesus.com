/* eslint-disable no-use-before-define */
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllProjectsPostIds, getProjectPostData } from '../api/projectsPosts'

import { ProjectPostData } from '../../types/ProjectsPostProps'

import { Container } from '../../styles/pages/project'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const Project: React.FC<ProjectPostData> = ({ ProjectPostData }) => {
  return (
    <Container>
      <Head>
        <title>Work | {ProjectPostData.title}</title>
      </Head>

      <Header />

      <div className="contentWrapper">
        <h1>{ProjectPostData.title}</h1>

        <span className="typesAndData">
          <p className="tag">{ProjectPostData.year}</p>
          <p>{ProjectPostData.type}</p>
        </span>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: ProjectPostData.contentHtml }}
        />
      </div>

      <Footer />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectsPostIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ProjectPostData = await getProjectPostData(params.slug)

  return {
    props: {
      ProjectPostData
    }
  }
}

export default Project
