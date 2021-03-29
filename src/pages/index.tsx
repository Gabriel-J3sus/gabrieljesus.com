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

import { Header } from '../components/Header'
import { CreatorDescription } from '../components/CreatorDescription'
import { Post } from '../components/PostComponent'
import { Work } from '../components/WorkComponent'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/contact'

const Contact: React.FC<BlogPostsCardData & ProjectPostsCardData> = ({
  allBlogPostsData,
  allProjectsPostsData
}) => {
  return (
    <Container>
      <Head>
        <title>Contato | Gabriel Araújo de Jesus</title>
      </Head>

      <Header page="contact" />

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
              <div className="imageContainer">
                <img src="no-post.svg" alt="Nenhum post encontrado" />
              </div>
            ) : (
              <>
                {allBlogPostsData.map(
                  ({ slug, title, formatedDate, type, description }) => (
                    <Post
                      key={slug}
                      slug={slug}
                      title={title}
                      formatedDate={formatedDate}
                      type={type}
                      description={description}
                    />
                  )
                )}
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
            <div className="imageContainer">
              <img src="no-post.svg" alt="Nenhum post encontrado" />
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      <Footer />
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
    }
  }
}

export default Contact
