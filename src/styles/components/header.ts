import styled from 'styled-components'
import { BsMoon, BsSun } from 'react-icons/bs'
import { h1FontStyles, icon } from '../variables'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  padding: 1.25rem 1.12rem 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme.colors.background};

  > img {
    cursor: pointer;
  }

  > .settingsContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 1rem;

      width: 2.5rem;
      height: 2.5rem;

      background: transparent;
      border: 2px solid transparent;
      border-radius: 10px;

      transition: 0.2s;

      &:hover {
        border: 2px solid ${props => props.theme.colors.shadows};
      }
    }

    > .options {
      display: none;
    }

    > .modal {
      display: flex;
      flex-direction: column;

      > .openAndCloseWrapper {
        > .menu {
          width: 40px;
          height: 30px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          background: none;
          outline: none;

          .one,
          .two,
          .three {
            height: 0.3rem;
            width: 2rem;
            margin: 3px 0;
            background: ${props => props.theme.colors.primary};

            transition-duration: 0.3s;
          }
        }
      }

      > nav {
        display: none;
      }
    }

    > .modal.on {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;

      overflow-y: hidden;

      width: 100vw;
      height: 100vh;

      background: ${props => props.theme.colors.background};
      > .openAndCloseWrapper {
        width: 100%;
        padding: 1.25rem 1.12rem 0 0;

        display: flex;

        justify-content: flex-end;

        > .menu {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 0.5rem;

          transition: opacity 0.2s;

          > .one {
            transform: rotate(45deg) translate(6px, 6px);
          }

          > .two {
            opacity: 0;
          }

          > .three {
            transform: rotate(-45deg) translate(8px, -9px);
          }

          &:hover {
            opacity: 0.8;
          }
        }
      }

      > nav {
        display: block;
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > span {
          max-width: 40%;
          width: 100%;
          height: 4rem;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 2px solid transparent;
          border-radius: 1rem;

          transition: all 0.2s;

          > h1 {
            ${h1FontStyles}
            color: ${props => props.theme.colors.primary};
          }
        }
        span:not(:first-child) {
          margin-top: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 550px) {
    padding: 1.68rem 3.75rem;

    > .settingsContainer {
      > button {
        margin-right: 0;
      }

      > .options {
        display: flex;
        justify-content: center;
        align-items: center;

        > p {
          font-size: 1.25rem;
          font-weight: 500;
          color: ${props => props.theme.colors.primary};

          margin-left: 2rem;

          cursor: pointer;
          transition: 0.2s;
        }

        p:hover {
          color: ${props => props.theme.colors.buttonBackground} !important;
        } //It gives preference even when the inline style being more powerfull
      }

      > .modal {
        display: none;
      }
    }
  }
`

export const MoonIcon = styled(BsMoon)`
  ${icon};
  fill: ${props => props.theme.colors.line};
`

export const SunIcon = styled(BsSun)`
  ${icon};
  fill: ${props => props.theme.colors.line};
`
