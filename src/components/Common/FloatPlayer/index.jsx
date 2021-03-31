import React from 'react'
import Icon from '../Icon'
import { Body1 } from '../Text/Body'
import { BodyBase } from '../Text/Body/styles'
import { MuteButton, PlayerButton, PlayerWrapper } from './styles'

const FloatPlayer = ({ player }) => {
  return (
    <PlayerWrapper>
      <Icon name="frame" />
      <PlayerButton type="button" title="Play">
        <Icon name="playFill" />
      </PlayerButton>
      <BodyBase as={Body1} text="D Fine Us / Howling at the Moon" />
      <MuteButton type="button" title="Volume">
        <Icon name="volume" />
      </MuteButton>
      {player}
    </PlayerWrapper>
  )
}

export default FloatPlayer
