/* eslint-disable no-use-before-define */
import React from 'react'

import { Container, Github, Instagram } from '../styles/components/footer'

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="iconContainer">
        <a
          target="_blank"
          href="https://github.com/Gabriel-J3sus"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/gabs.j3sus/"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </div>

      <p>Copyright ©2020 All rights reserved </p>
    </Container>
  )
}
