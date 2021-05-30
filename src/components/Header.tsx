import React, { useCallback, useContext, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from 'styled-components'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { MyThemeContext } from '../contexts/themeContext'

import { Container, MoonIcon, SunIcon } from '../styles/components/header'

/* ---- Framer motion variants ----- */

const navigationContainerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const navigationOptionVariant = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export const Header: React.FC = () => {
  const router = useRouter()
  const { toggleTheme } = useContext(MyThemeContext)
  const { title, colors } = useContext(ThemeContext)
  const isModalOpen = useRef({ value: false })

  const home = router.pathname === '/' && colors.buttonBackground
  const blog = router.pathname === '/blog' && colors.buttonBackground
  const work = router.pathname === '/work' && colors.buttonBackground

  const handleOpenOrCloseModal = useCallback(() => {
    isModalOpen.current.value = !isModalOpen.current.value
    const modal = document.querySelector('.modal')

    if (isModalOpen.current.value) {
      document.body.style.overflowY = 'hidden'
      modal.classList.add('on')
    } else {
      document.body.style.overflowY = 'auto'
      modal.classList.remove('on')
    }
  }, [])

  const handleOverflow = useCallback(() => {
    const modal = document.querySelector('.modal')
    document.body.style.overflowY = 'auto'
    modal.classList.remove('on')
  }, [])

  return (
    <Container
      variants={navigationContainerVariant}
      initial="hidden"
      animate="visible"
    >
      <Link href="/">
        <Image
          src="/transparent-logo.png"
          alt="logo"
          width={42}
          height={36}
          quality={75}
        />
      </Link>

      <div className="settingsContainer">
        <motion.button
          type="button"
          onClick={toggleTheme}
          variants={navigationOptionVariant}
          aria-label={`Switch to ${title === 'light' ? 'light' : 'dark'} mode`}
        >
          {title === 'dark' ? <SunIcon /> : <MoonIcon />}
        </motion.button>

        <div className="options">
          <Link href="/work">
            <motion.p
              style={{ color: work }}
              variants={navigationOptionVariant}
            >
              Projetos
            </motion.p>
          </Link>

          <Link href="/blog">
            <motion.p
              style={{ color: blog }}
              variants={navigationOptionVariant}
            >
              Blog
            </motion.p>
          </Link>

          <Link href="/">
            <motion.p
              style={{ color: home }}
              variants={navigationOptionVariant}
            >
              Home
            </motion.p>
          </Link>
        </div>
        <div className="modal">
          <div className="openAndCloseWrapper">
            <motion.button
              type="button"
              className="menu"
              onClick={handleOpenOrCloseModal}
              variants={navigationOptionVariant}
              aria-label={
                isModalOpen.current.value
                  ? 'Click to close modal'
                  : 'Click to open modal'
              }
            >
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </motion.button>
          </div>

          <nav>
            <Link href="/work">
              <span onClick={handleOverflow}>
                <h1 style={{ color: work }}>Projetos</h1>
              </span>
            </Link>

            <Link href="/blog">
              <span onClick={handleOverflow}>
                <h1 style={{ color: blog }}>Blog</h1>
              </span>
            </Link>

            <Link href="/">
              <span onClick={handleOverflow}>
                <h1 style={{ color: home }}>Home</h1>
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  )
}
