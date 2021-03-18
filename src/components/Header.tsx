/* eslint-disable no-use-before-define */
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { Container } from '../styles/components/header'

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="options">
        <p>Projetos</p>
        <p>Blog</p>
        <p>Contato</p>
      </div>
      <div className="modal">
        <AiOutlineMenu size={30} />
      </div>
    </Container>
  )
}
