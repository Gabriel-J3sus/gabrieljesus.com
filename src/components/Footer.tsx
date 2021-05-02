/* eslint-disable no-use-before-define */
import React from 'react'

import {
  Container,
  Github,
  Instagram,
  Email
} from '../styles/components/footer'

// ----- Framer Motion Variants -----

const componentVariant = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.8,
      type: 'spring',
      when: 'beforeChildren'
    }
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

export const Footer: React.FC = () => {
  return (
    <Container
      variants={componentVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
