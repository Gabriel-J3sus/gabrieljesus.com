import styled from 'styled-components'

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 1.25rem 1.12rem 0.75rem 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: ${props => props.theme.colors.background};

  > .options {
    display: none;
  }

  > .modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 550px) {
    padding: 1.68rem 3.75rem;

    > .options {
      display: flex;
      justify-content: center;
      align-items: center;

      > p {
        font-size: 1.25rem;
        font-weight: 500;

        cursor: pointer;
        transition: 0.2s;
      }

      p:hover {
        color: ${props => props.theme.colors.buttonBackground};
      }

      p:not(:first-child) {
        margin-left: 2rem;
      }
    }

    > .modal {
      display: none;
    }
  }
`
