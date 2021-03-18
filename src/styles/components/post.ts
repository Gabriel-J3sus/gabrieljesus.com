import styled from 'styled-components'

export const Container = styled.div`
  max-width: 418px;
  max-height: 295px;

  width: 22.12rem;
  height: 16rem;

  margin-bottom: 1rem;
  padding: 0.75rem 0.5rem 1.33rem 1.18rem;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;

  > h2 {
    font-size: 1.3rem;
    font-weight: 700;
  }

  > p {
    margin-top: 0.75rem;
  }

  @media (min-width: 850px) {
    width: 100%;
    height: 18.43rem;

    margin-bottom: 0;
    padding: 1.5rem 1.3rem 1.3rem 1.3rem;

    cursor: pointer;

    > h2 {
      font-size: 1.6rem;
    }

    > .dateAndTime {
      font-size: 1.1rem;
    }
  }
`
