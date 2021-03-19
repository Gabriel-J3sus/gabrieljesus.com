/* eslint-disable no-use-before-define */
import React from 'react'
import { Container, CloseButton } from '../styles/components/NavigationModal'

export const NavigationModal: React.FC = () => {
  return (
    <Container>
      <div className="close">
        <CloseButton />
      </div>

      <div className="options">
        <p>Projetos</p>
        <p>Blog</p>
        <p>Contato</p>
      </div>
    </Container>
  )
}
