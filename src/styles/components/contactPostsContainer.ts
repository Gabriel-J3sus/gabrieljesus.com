import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 647px;
  height: 100%;

  background: ${props => props.theme.colors.recentPostsbackground};

  padding: 1.25rem 0.6rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .wrapper {
    max-width: 856px;
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
        font-size: 1.1rem;
        font-weight: 400;
      }

      > p {
        display: none;
      }
    }

    > .postsContainer {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 850px) {
    height: 100%;
    padding: 1.6rem 0;

    > .wrapper {
      > span {
        justify-content: space-between;

        margin-bottom: 1.3rem;

        > h3 {
          font-size: 1.3rem;
        }

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
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`
