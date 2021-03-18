/* eslint-disable no-use-before-define */
import React from 'react'
import Link from 'next/link'

import { Container } from '../styles/components/contactPostsContainer'

export const ContactPostsContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="wrapper">
        <span>
          <h3>Posts Recentes</h3>
          <Link href="#">
            <p>Ver tudo</p>
          </Link>
        </span>

        <div className="postsContainer">{children}</div>
      </div>
    </Container>
  )
}
