import React, { useContext } from 'react'
import Icon from '../Icon'
import { Body1 } from '../Text/Body'
import { BodyBase } from '../Text/Body/styles'
import { MuteButton, PlayerButton, PlayerWrapper } from './styles'
import { AppContext } from '../../../context/AppContext'

const FloatPlayer = () => {
  const {
    playingAudio,
    volumeAudio,
    hasPlaying,
    hasVolume,
    state,
  } = useContext(AppContext)
  const { mediaCurrent } = state
  const action = hasPlaying ? 'Pause' : 'Play'
  const nameIconPlay = hasPlaying ? 'pause' : 'playFill'
  const nameIconVolume = hasVolume ? 'volume' : 'mute'
  return (
    <PlayerWrapper>
      <Icon name="frame" />
      <PlayerButton type="button" title={action} onClick={playingAudio}>
        <Icon name={nameIconPlay} />
      </PlayerButton>
      <BodyBase as={Body1} text={mediaCurrent.name} />
      <MuteButton type="button" title="Volume" onClick={volumeAudio}>
        <Icon name={nameIconVolume} />
      </MuteButton>
    </PlayerWrapper>
  )
}

export default FloatPlayer
