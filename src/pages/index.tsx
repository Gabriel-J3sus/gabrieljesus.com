/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { getSortedProjectsPostsData } from './api/projectsPosts'

import { PostCardData } from '../types/PostsProps'

import { Header } from '../components/Header'
import { CreatorDescription } from '../components/CreatorDescription'
import { Post } from '../components/PostComponent'
import { Work } from '../components/WorkComponent'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/contact'

const Contact: React.FC<PostCardData> = ({ allProjectsPostsData }) => {
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
            <Post />
            <Post />
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

export default Contact
