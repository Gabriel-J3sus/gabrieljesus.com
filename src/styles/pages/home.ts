import styled from 'styled-components'
import { h3FontStyles, pagesStyles } from '../variables'

export const Container = styled.section`
  ${pagesStyles}

  > .ContactPostsContainer {
    width: 100%;
    height: 100%;

    background: ${props => props.theme.colors.recentPostsbackground};

    padding: 1.25rem 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    > .wrapper {
      max-width: 855px;
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;

      > span {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 2.5rem;

        > h3 {
          ${h3FontStyles}
        }

        > p {
          display: none;
        }
      }

      > .postsContainer {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 1rem;
      }
    }
  }

  > .ContactWorkContainer {
    max-width: 855px;

    width: 100%;
    height: 100%;
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 2.5rem;

      > h3 {
        ${h3FontStyles}
      }

      > p {
        display: none;
      }
    }

    > .worksContainer {
      width: 100%;
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr;
      grid-gap: 2rem;

      padding: 0 1.5rem;

      > .imageContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (min-width: 850px) {
    padding-top: 4rem;

    > .ContactPostsContainer {
      height: 100%;
      padding: 1.6rem 0;

      > .wrapper {
        > span {
          justify-content: space-between;

          margin-bottom: 1.3rem;

          > p {
            display: block;
            color: ${props => props.theme.colors.secondary};
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        > .postsContainer {
          grid-template-columns: auto;
          grid-template-rows: 1fr;
          grid-gap: 1.25rem;
        }
      }
    }

    > .ContactWorkContainer {
      width: 100%;
      margin-top: 1rem;

      align-items: flex-start;

      > span {
        justify-content: space-between;

        margin-bottom: 2.5rem;

        > p {
          display: block;
          color: ${props => props.theme.colors.secondary};
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      > .worksContainer {
        padding: 0;
      }
    }
  }
`
