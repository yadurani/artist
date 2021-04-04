import React from 'react'
import { ButtonPlayWrapper } from './styles'
import Icon from '../Icon'
import CircleProgress from '../CircleProgress'

const ButtonPlay = ({ isRing = true, ...props }) => {
  const isPlayOrPause = isRing ? 'pause' : 'playFill'
  return (
    <ButtonPlayWrapper {...props}>
      <CircleProgress width="113" isPlaying={isRing} />
      <Icon name={isPlayOrPause} width={50} />
    </ButtonPlayWrapper>
  )
}

export default ButtonPlay
