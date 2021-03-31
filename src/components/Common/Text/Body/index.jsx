import React from 'react'
import { BodyOne, BodyTwo } from './styles'

export const Body1 = ({ text, ...props }) => (
  <BodyOne {...props}>{text}</BodyOne>
)
export const Body2 = ({ text, ...props }) => (
  <BodyTwo {...props}>{text}</BodyTwo>
)
