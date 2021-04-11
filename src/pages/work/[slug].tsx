/* eslint-disable no-use-before-define */
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllProjectsPostIds, getProjectPostData } from '../api/projectsPosts'

import { ProjectPostData } from '../../types/ProjectsPostProps'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardDetailsComponent } from '../../components/SmallerComponents'
import { ShareButtons } from '../../components/ShareButtons'

import { Container } from '../../styles/pages/project'

const Project: React.FC<ProjectPostData> = ({ ProjectPostData }) => {
  return (
    <Container>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{ProjectPostData?.title} | Projeto</title>
        <meta name="title" content={`${ProjectPostData?.title} | Projeto`} />
        <meta name="description" content={`${ProjectPostData?.description}`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://gabrjesus.vercel.app/work/${ProjectPostData?.slug}`}
        />
        <meta
          property="og:title"
          content={`${ProjectPostData?.title} | Projeto`}
        />
        <meta
          property="og:description"
          content={`${ProjectPostData?.description}`}
        />
        <meta property="og:image" content={ProjectPostData?.image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://gabrjesus.vercel.app/work/${ProjectPostData?.slug}`}
        />
        <meta
          property="twitter:title"
          content={`${ProjectPostData?.title} | Projeto`}
        />
        <meta
          property="twitter:description"
          content={`${ProjectPostData?.description}`}
        />
        <meta property="twitter:image" content={ProjectPostData?.image} />
      </Head>

      <Header />

      <div className="contentWrapper">
        <h1>{ProjectPostData?.title}</h1>

        <CardDetailsComponent
          year={ProjectPostData.year}
          type={ProjectPostData.type}
          tagColor="highlighted"
        />

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: ProjectPostData?.contentHtml }}
        />

        <ShareButtons
          url={`https://gabrjesus.vercel.app/work/${ProjectPostData?.slug}`}
          title={ProjectPostData?.title}
          description={ProjectPostData?.description}
          source={`https://gabrjesus.vercel.app/work/${ProjectPostData?.slug}`}
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
