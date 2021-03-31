import React from 'react'
import { ButtonPlayWrapper } from './styles'
import Icon from '../Icon'

const ButtonPlay = ({ isRing, ...props }) => {
  const isPlayOrPause = isRing ? 'play' : 'pause'
  return (
    <ButtonPlayWrapper {...props}>
      <Icon name={isPlayOrPause} />
    </ButtonPlayWrapper>
  )
}

export default ButtonPlay
