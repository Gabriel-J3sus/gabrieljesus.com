import styled from 'styled-components'

export const Button = styled.button`
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
`

export const CardDetailsContainer = styled.span`
  display: flex;

  margin: 1rem 0 1.5rem;

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

    background: ${props => props.theme.colors.tagBackground};
    color: #fff;
    border-radius: 1rem;
    font-weight: 900;
  }

  @media (min-width: 530px) {
    margin: 0.5rem 0 1rem;
  }

  @media (min-width: 850px) {
    margin: 1rem 0 2rem;
  }
`
