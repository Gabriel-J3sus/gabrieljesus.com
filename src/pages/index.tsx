/* eslint-disable multiline-ternary */
/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { getSortedBlogPostsData } from './api/blogPosts'
import { getSortedProjectsPostsData } from './api/projectsPosts'

import { ProjectPostsCardData } from '../types/ProjectsPostProps'
import { BlogPostsCardData } from '../types/BlogPostsProps'

import { CreatorDescription } from '../components/CreatorDescription'
import { NoPostFound } from '../components/NoPostFound'
import { Post } from '../components/PostComponent'
import { Work } from '../components/WorkComponent'

import { Container } from '../styles/pages/home'

// ----- Framer Motion Variants -----

const containerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.75,
      type: 'spring',
      when: 'beforeChildren'
    }
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Contact: React.FC<BlogPostsCardData & ProjectPostsCardData> = ({
  allBlogPostsData,
  allProjectsPostsData
}) => {
  return (
    <Container
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Home | Gabriel Araújo de Jesus</title>
        <meta
          name="title"
          content="Olá, eu sou o Gabriel, um desenvolvedor de softwares."
        />
        <meta
          name="description"
          content="Eu sou o Gabriel, aqui, eu compartilho alguns fatos interessantes do mundo da programação, e mostro os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrjesus.vercel.app/" />
        <meta
          property="og:title"
          content="Olá, eu sou o Gabriel, um desenvolvedor de softwares."
        />
        <meta
          property="og:description"
          content="Eu sou o Gabriel, aqui, eu compartilho alguns fatos interessantes do mundo da programação, e mostro os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
        />
        <meta
          property="og:image"
          content="https://gabrjesus.vercel.app/logo-full400.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gabrjesus.vercel.app/" />
        <meta
          property="twitter:title"
          content="Olá, eu sou o Gabriel, um desenvolvedor de softwares."
        />
        <meta
          property="twitter:description"
          content="Eu sou o Gabriel, aqui, eu compartilho alguns fatos interessantes do mundo da programação, e mostro os meus projetos mais importantes, com o objetivo de expor o meu crescimento como desenvolvedor."
        />
        <meta
          property="twitter:image"
          content="https://gabrjesus.vercel.app/logo-full400.png"
        />
      </Head>

      <CreatorDescription />

      <div className="ContactPostsContainer">
        <div className="wrapper">
          <span>
            <h3>Posts Recentes</h3>
            <Link href="blog">
              <p>Ver tudo</p>
            </Link>
          </span>

          <div className="postsContainer">
            {allBlogPostsData.length <= 0 ? (
              <NoPostFound />
            ) : (
              <>
                {allBlogPostsData
                  .slice(0, 2)
                  .map(({ slug, title, formatedDate, type, description }) => (
                    <Post
                      key={slug}
                      slug={slug}
                      title={title}
                      formatedDate={formatedDate}
                      type={type}
                      description={description}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="ContactWorkContainer">
        <span>
          <h3>Projetos</h3>
          <Link href="work">
            <p>Ver tudo</p>
          </Link>
        </span>

        <div className="worksContainer">
          {allProjectsPostsData.length <= 0 ? (
            <NoPostFound />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogPostsData = getSortedBlogPostsData()
  const allProjectsPostsData = getSortedProjectsPostsData()

  return {
    props: {
      allBlogPostsData,
      allProjectsPostsData
    },
    revalidate: 300
  }
}

export default Contact
