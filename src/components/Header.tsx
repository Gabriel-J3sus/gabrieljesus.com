/* eslint-disable no-use-before-define */
import React, { useCallback, useContext, useRef } from 'react'
import Link from 'next/link'
import { ThemeContext } from 'styled-components'
import { useRouter } from 'next/router'

import { MyThemeContext } from '../contexts/themeContext'

import { Container, MoonIcon, SunIcon } from '../styles/components/header'

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
    <Container>
      <Link href="/">
        <img src="/transparent-logo.png" alt="logo" />
      </Link>

      <div className="settingsContainer">
        <button type="button" onClick={toggleTheme}>
          {title === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <div className="options">
          <Link href="/work">
            <p style={{ color: work }}>Projetos</p>
          </Link>

          <Link href="/blog">
            <p style={{ color: blog }}>Blog</p>
          </Link>

          <Link href="/">
            <p style={{ color: home }}>Home</p>
          </Link>
        </div>
        <div className="modal">
          <div className="openAndCloseWrapper">
            <button
              type="button"
              className="menu"
              onClick={handleOpenOrCloseModal}
            >
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </button>
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
