import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export const Container = styled.div`
  background: ${props => props.theme.colors.recentPostsbackground};
  box-shadow: -8px 6px 10px ${props => props.theme.colors.shadows};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  width: 50%;

  display: flex;
  flex-direction: column;

  > .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.25rem 1.12rem 0;
  }

  > .options {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 4rem;

    font-size: 2rem;
    font-weight: 400;

    color: ${props => props.theme.colors.primary};

    p {
      padding-left: 0.2rem;
      border-bottom: 1px solid ${props => props.theme.colors.line};
    }

    p:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
`

export const CloseButton = styled(AiOutlineClose)`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  fill: ${props => props.theme.colors.primary};
`
