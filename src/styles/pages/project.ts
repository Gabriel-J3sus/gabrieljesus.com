import styled from 'styled-components'
import { pagesStyles, h1FontStyles, h2FontStyles } from '../variables'

export const Container = styled.div`
  ${pagesStyles}

  > .contentWrapper {
    max-width: 855px;
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 0 1.5rem;

    > h1 {
      margin-bottom: 1rem;

      ${h1FontStyles}
    }

    > span {
      display: flex;

      margin: 1rem 0 1.4rem;

      > p {
        color: #8695a4;
      }
      > .tag {
        width: 3.8rem;
        height: 1.5rem;

        margin-right: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${props => props.theme.colors.buttonBackground};
        color: #fff;
        border-radius: 1rem;
        font-weight: 700;
      }
    }

    > .content {
      > h1 {
        ${h1FontStyles}
        font-weight: 500;

        padding-bottom: 0.3rem;
        border-bottom: 1px solid ${props => props.theme.colors.shadows};
      }

      > h2 {
        ${h2FontStyles}
      }
      > .imageContainer {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        > img {
          width: 16.5rem;

          @media (min-width: 440px) {
            width: 20.5rem;
          }

          @media (min-width: 550px) {
            width: 28.5rem;
          }

          @media (min-width: 760px) {
            width: 34.5rem;
          }

          @media (min-width: 850px) {
            width: 100%;
          }
        }
      }

      > p a,
      h3 a {
        color: ${props => props.theme.colors.secondary};

        &:hover {
          text-decoration: underline;
        }
      }

      > ul li {
        font-size: 1.2rem;

        margin-left: 2.5rem;
      }

      > h3 {
        padding-top: 0.5rem;
        border-top: 2px solid ${props => props.theme.colors.shadows};
      }
    }
  }
`
