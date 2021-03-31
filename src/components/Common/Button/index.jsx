import React from 'react'
import { ButtonWrapper } from './styles'

const Button = ({ text, ...props }) => (
  <ButtonWrapper {...props}>{text}</ButtonWrapper>
)

export default Button
