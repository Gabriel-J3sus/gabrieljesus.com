import styled from 'styled-components'
import { h1FontStyles, h2FontStyles, pagesStyles } from '../variables'

export const Container = styled.div`
  ${pagesStyles};

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

      > p a,
      h3 a {
        color: ${props => props.theme.colors.secondary};

        &:hover {
          text-decoration: underline;
        }
      }

      > h3 {
        padding-top: 0.5rem;
        border-top: 2px solid ${props => props.theme.colors.shadows};
      }

      > .codeContainer {
        width: 100%;
        padding: 1.2rem 1rem 1.3rem;

        background: ${props => props.theme.colors.codeContainer};
        box-shadow: 0px 4px 10px ${props => props.theme.colors.shadows};
        border-radius: 1.5rem;

        > code {
          font-size: 1.2rem;
          color: #fff;

          > .comment {
            color: #637777;
          }
          > .blue {
            color: #82aaff;
          }
        }

        > p {
          color: #fff;

          > .comment {
            color: #637777;
          }

          > .blue {
            color: #82aaff;
          }
        }

        > .comment {
          color: #637777;
        }
      }

      > ul li {
        font-size: 1rem;

        margin-left: 2.5rem;
      }
    }
  }
`
