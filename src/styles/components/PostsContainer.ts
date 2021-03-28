import styled from 'styled-components'

export const Container = styled.div`
  max-width: 855px;
  width: 100%;

  min-height: 54vh;

  display: flex;
  flex-direction: column;

  padding: 0 1.5rem;

  > span {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    > h1 {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 3rem;
    }

    > h2 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 3rem;
      color: #8695a4;
    }
  }

  > .PostsWrapper {
    display: grid;
    grid-template-rows: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    transform: translateY(35px);
    opacity: 0;

    animation: up 1s forwards;
  }

  @keyframes up {
    from {
      opacity: 0;
      transform: translateY(35px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 350px) {
    > span {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`
