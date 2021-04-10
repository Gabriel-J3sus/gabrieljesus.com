/* eslint-disable no-use-before-define */
import React from 'react'

import {
  Container,
  Github,
  Instagram,
  Rocket
} from '../styles/components/footer'

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

        <a
          target="_blank"
          href="https://app.rocketseat.com.br/me/gabriel-jesus-1596360319"
          rel="noopener noreferrer"
        >
          <Rocket />
        </a>
      </div>

      <p>&#169; 2021 Gabriel Araújo de Jesus</p>
    </Container>
  )
}
