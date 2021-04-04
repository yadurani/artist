import React, { useContext } from 'react'
import { CircularTrack, CircularProgress } from 'react-circular-input'
import { AppContext } from '../../../context/AppContext'
import { CircularInputWrapper } from './styles'

const CircleProgress = ({ isPlaying }) => {
  const { duration, trackProgress } = useContext(AppContext)
  const durationTotal = isNaN(duration) ? 0 : duration
  const track = isNaN(duration) ? 0 : trackProgress / durationTotal
  return (
    <CircularInputWrapper value={isPlaying ? track : 0}>
      <CircularTrack strokeWidth={2} stroke="transparent" />
      <CircularProgress strokeWidth={5} stroke="white" strokeLinecap="butt" />
    </CircularInputWrapper>
  )
}

export default CircleProgress
