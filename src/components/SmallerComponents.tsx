import React from 'react'

import {
  ButtonProps,
  CardDetailsProps,
  BlogPostDetailsProps
} from '../types/components/SmallerComponentsProps'

import {
  Button,
  CardDetailsContainer,
  BlogPostDetailsContainer
} from '../styles/components/smallerComponents'

export const ButtonComponent: React.FC<ButtonProps> = ({
  HandleButtonOnClickFunctions,
  title
}) => <Button onClick={HandleButtonOnClickFunctions}>{title}</Button>

export const CardDetailsComponent: React.FC<CardDetailsProps> = ({
  year,
  type,
  tagColor
}) => (
  <CardDetailsContainer tagColor={tagColor}>
    <p className="tag">{year}</p>
    <p>{type}</p>
  </CardDetailsContainer>
)

export const BlogPostDetailsComponent: React.FC<BlogPostDetailsProps> = ({
  formatedDate,
  type
}) => (
  <BlogPostDetailsContainer>
    {formatedDate} &nbsp; | &nbsp; <span>{type}</span>
  </BlogPostDetailsContainer>
)
