/* eslint-disable no-use-before-define */
import React from 'react'

import {
  ButtonProps,
  CardDetailsProps
} from '../types/components/SmallerComponentsProps'

import {
  Button,
  CardDetailsContainer
} from '../styles/components/smallerComponents'

export const ButtonComponent: React.FC<ButtonProps> = ({
  HandleButtonOnClickFunctions,
  title
}) => {
  return <Button onClick={HandleButtonOnClickFunctions}>{title}</Button>
}

export const CardDetailsComponent: React.FC<CardDetailsProps> = ({
  year,
  type,
  tagColor
}) => {
  return (
    <CardDetailsContainer>
      <p className="tag">{year}</p>
      <p>{type}</p>
    </CardDetailsContainer>
  )
}
