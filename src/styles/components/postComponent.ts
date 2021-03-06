import styled from 'styled-components'
import { h2FontStyles } from '../variables'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem 0.5rem 1.33rem 1.18rem;

  background: ${props => props.theme.colors.background};

  box-shadow: 0px 4px 10px ${props => props.theme.colors.shadows};
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;

  > h2 {
    ${h2FontStyles}
    font-weight: 700;
  }

  > p {
    margin-top: 0.75rem;
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(-5px);
  }
`
