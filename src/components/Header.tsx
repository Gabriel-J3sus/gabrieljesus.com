/* eslint-disable no-use-before-define */
import Link from 'next/link'
import Image from 'next/image'
import React, { useCallback, useContext, useRef } from 'react'
import { ThemeContext } from 'styled-components'

import { MyThemeContext } from '../contexts/themeContext'
import { PageLocation } from '../types/components/HeaderProps'

import { Container, MoonIcon, SunIcon } from '../styles/components/header'

export const Header: React.FC<PageLocation> = ({ page }) => {
  const { toggleTheme } = useContext(MyThemeContext)
  const { title, colors } = useContext(ThemeContext)
  const isModalOpen = useRef({ value: false })

  const blog =
    page === 'blog'
      ? { color: `${colors.buttonBackground}` }
      : { color: `${colors.primary}` }

  const contact =
    page === 'home'
      ? { color: `${colors.buttonBackground}` }
      : { color: `${colors.primary}` }

  const work =
    page === 'work'
      ? { color: `${colors.buttonBackground}` }
      : { color: `${colors.primary}` }

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
            <p style={work}>Projetos</p>
          </Link>

          <Link href="/blog">
            <p style={blog}>Blog</p>
          </Link>

          <Link href="/">
            <p style={contact}>Home</p>
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
                <h1 style={work}>Projetos</h1>
              </span>
            </Link>

            <Link href="/blog">
              <span onClick={handleOverflow}>
                <h1 style={blog}>Blog</h1>
              </span>
            </Link>

            <Link href="/">
              <span onClick={handleOverflow}>
                <h1 style={contact}>Home</h1>
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  )
}
