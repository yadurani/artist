import React from 'react'
import { ButtonPlayWrapper } from './styles'
import Icon from '../Icon'

const ButtonPlay = ({ isRing = true, ...props }) => {
  const isPlayOrPause = !isRing ? 'pause' : 'playFill'
  const isWidth = !isRing ? '50' : '30'
  return (
    <ButtonPlayWrapper {...props}>
      <Icon name={isPlayOrPause} width={isWidth} />
    </ButtonPlayWrapper>
  )
}

export default ButtonPlay
