import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  padding-top: 6.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .ContactPostsContainer {
    width: 100%;
    max-height: 647px;
    height: 100%;

    background: ${props => props.theme.colors.recentPostsbackground};

    padding: 1.25rem 0.6rem 2rem;

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
  }

  > .ContactWorkContainer {
    max-width: 855px;
    width: 100%;
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
      font-size: 1.1rem;
      font-weight: 400;

      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 850px) {
    padding-top: 13.36rem;

    > .ContactPostsContainer {
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

    > .ContactWorkContainer {
      margin-top: 1rem;

      align-items: flex-start;

      > h3 {
        font-size: 1.3rem;
        font-weight: 400;

        margin-bottom: 2.5rem;
      }
  }
`