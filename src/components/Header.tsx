/* eslint-disable no-use-before-define */
import Link from 'next/link'
import React, { useCallback, useContext, useRef } from 'react'
import { ThemeContext } from 'styled-components'

import { MyThemeContext } from '../contexts/themeContext'
import { Container, MoonIcon, SunIcon } from '../styles/components/header'

interface PageLocation {
  page: 'blog' | 'contact' | 'work'
}

export const Header: React.FC<PageLocation> = ({ page }) => {
  const { toggleTheme } = useContext(MyThemeContext)
  const { title, colors } = useContext(ThemeContext)
  const isModalOpen = useRef({ value: false })

  const blog =
    page === 'blog'
      ? { color: `${colors.buttonBackground}` }
      : { color: `${colors.primary}` }

  const contact =
    page === 'contact'
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

  return (
    <Container>
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
          <p style={contact}>Contato</p>
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
            <span>
              <h3 style={work}>Projetos</h3>
            </span>
          </Link>

          <Link href="/blog">
            <span>
              <h3 style={blog}>Blog</h3>
            </span>
          </Link>

          <Link href="/">
            <span>
              <h3 style={contact}>Contato</h3>
            </span>
          </Link>
        </nav>
      </div>
    </Container>
  )
}
