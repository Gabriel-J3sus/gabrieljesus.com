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
        {/* <!-- Primary Meta Tags --> */}
        <title>Projetos | Gabriel Araújo de Jesus</title>
        <meta name="title" content="Projetos | Gabriel Araújo de Jesus" />
        <meta
          name="description"
          content="Aqui, eu compartilho os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrjesus.vercel.app/work" />
        <meta
          property="og:title"
          content="Projetos | Gabriel Araújo de Jesus"
        />
        <meta
          property="og:description"
          content="Aqui, eu compartilho os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
        />
        <meta
          property="og:image"
          content="https://gabrjesus.vercel.app/logo-full400.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gabrjesus.vercel.app/work"
        />
        <meta
          property="twitter:title"
          content="Projetos | Gabriel Araújo de Jesus"
        />
        <meta
          property="twitter:description"
          content="Aqui, eu compartilho os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
        />
        <meta
          property="twitter:image"
          content="https://gabrjesus.vercel.app/logo-full400.png"
        />
      </Head>

      <Header page="work" />

      <PostsContainer
        title="Projetos"
        postsLength={allProjectsPostsData.length}
      >
        {allProjectsPostsData.map(
          ({ slug, title, year, type, image, description }) => (
            <Work
              key={slug}
              slug={slug}
              title={title}
              year={year}
              type={type}
              image={image}
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
    },
    revalidate: 300
  }
}

export default work
