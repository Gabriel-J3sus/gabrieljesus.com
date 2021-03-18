/* eslint-disable no-use-before-define */
import React from 'react'

import {
  Container,
  Github,
  Facebook,
  Instagram,
  Twitter
} from '../styles/components/footer'

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="iconContainer">
        <Github />
        <Facebook />
        <Instagram />
        <Twitter />
      </div>

      <p>Copyright ©2020 All rights reserved </p>
    </Container>
  )
}
