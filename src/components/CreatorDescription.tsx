import React from 'react'
import { motion } from 'framer-motion'

import { Container } from '../styles/components/creatorDescription'

// ----- Framer Motion Variants -----

const mainVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.3
    }
  }
}

const textVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const containerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const imageVariant = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export const CreatorDescription: React.FC = () => {
  // function handleCVDownload() {
  //   console.log('ok')
  // }

  return (
    <Container>
      <article className="avatarAndTec">
        <img src="Me.jpg" alt="Gabriel Araújo de Jesus" />
        <motion.span variants={containerVariant}>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.javascript.com/"
            variants={imageVariant}
          >
            <img src="icons/logo-javascript.svg" alt="Javascript" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nodejs.org/en/"
            variants={imageVariant}
          >
            <img src="icons/nodejs-icon.svg" alt="NodeJs" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.typescriptlang.org/"
            variants={imageVariant}
          >
            <img src="icons/typescript.svg" alt="Typescript" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/"
            variants={imageVariant}
          >
            <img src="icons/react-2.svg" alt="ReactJs" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mongodb.com/"
            variants={imageVariant}
          >
            <img src="icons/mongodb-icon-1.svg" alt="Mongodb" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.postgresql.org/"
            variants={imageVariant}
          >
            <img src="icons/postgresql.svg" alt="PostgreSQL" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3schools.com/css/"
            variants={imageVariant}
          >
            <img src="icons/css-5.svg" alt="css3" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://code.visualstudio.com/"
            variants={imageVariant}
          >
            <img src="icons/visual-studio-code-1.svg" alt="VSCode" />
          </motion.a>
        </motion.span>
      </article>

      <motion.main className="description" variants={mainVariant}>
        <motion.h1 variants={textVariant}>
          Olá, eu sou o Gabriel, um desenvolvedor de softwares.
        </motion.h1>
        <motion.p variants={textVariant}>
          Bem-vindo ao meu blog. Aqui, eu compartilho alguns fatos interessantes
          do mundo da programação, e mostro os meus projetos mais importantes,
          com o objetivo de expor o meu crescimento como desenvolvedor.
        </motion.p>

        {/* <ButtonComponent
          HandleButtonOnClickFunctions={handleCVDownload}
          title="Baixar currículo"
        /> */}
      </motion.main>
    </Container>
  )
}
