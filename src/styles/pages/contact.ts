import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  padding-top: 6.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 850px) {
    padding-top: 13.36rem;
  }
`

export const CreatorDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 3.6rem;

  > img {
    width: 10.6rem;
    height: 10.6rem;

    margin-left: 0;

    border-radius: 100%;
  }

  > .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      max-width: 312px;
      margin-top: 2.1rem;

      text-align: center;
      font-size: 2rem;
      font-weight: 700;
    }

    > p {
      max-width: 312px;
      margin: 1.3rem 0;

      text-align: center;
    }

    > button {
      width: 13rem;
      height: 2.9rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 2px;
      background: ${props => props.theme.colors.buttonBackground};

      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;

      transition: 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media (min-width: 850px) {
    max-width: 855px;
    margin-bottom: 4.4rem;

    flex-direction: row-reverse;

    > img {
      width: 15rem;
      height: 15rem;

      margin-left: 5.5rem;
    }

    > .description {
      max-width: 506px;

      align-items: flex-start;

      > h1 {
        max-width: none;
        margin-top: 0;

        text-align: left;
        font-size: 2.75rem;
      }

      > P {
        max-width: none;
        margin: 2rem 0 2.3rem;

        text-align: left;
      }
    }
  }
`

export const PostsContainer = styled.div`
  width: 100%;
  height: 24.75rem;
  background: ${props => props.theme.colors.recentPostsbackground};

  padding: 1.6rem 0;

  display: flex;
  justify-content: center;

  > .wrapper {
    max-width: 855px;
    width: 100%;

    display: flex;
    flex-direction: column;

    > span {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 2px;

      > h3 {
        font-size: 1.3rem;
        font-weight: 400;
      }

      > p {
        color: ${props => props.theme.colors.secondary};
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
