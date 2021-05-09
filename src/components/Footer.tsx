import React from 'react'

import {
  Container,
  Github,
  Instagram,
  Email
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

        <a href="mailto:gabr.jesus001@gmail.com">
          <Email />
        </a>
      </div>

      <p>&#169; 2021 Gabriel Araújo de Jesus</p>
    </Container>
  )
}
