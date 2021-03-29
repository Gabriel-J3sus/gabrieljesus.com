/* eslint-disable no-use-before-define */
import React from 'react'

import { Container } from '../styles/components/NoPostFound'

export const NoPostFound: React.FC = () => (
  <Container className="imageContainer">
    <img src="no-post.svg" alt="Nenhum post encontrado" />
  </Container>
)
