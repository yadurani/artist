import { useState, useRef, useEffect } from 'react'
import initialState from '../constants/initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [hasPlaying, setHasPlaying] = useState(false)
  const [hasVolume, setHasVolume] = useState(true)
  const {
    mediaCurrent: { audio },
  } = state

  const audioCurrent = useRef(new Audio(audio))
  const intervalRef = useRef()

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (audioCurrent.current.ended) {
        setHasPlaying(false)
      }
    }, [1000])
  }

  useEffect(() => {
    if (hasPlaying) {
      audioCurrent.current.play()
      startTimer()
    } else {
      audioCurrent.current.pause()
    }
  }, [hasPlaying])

  const playingAudio = () => {
    setHasPlaying(!hasPlaying)

    setState((prevState) => ({
      ...prevState,
      isPlaying: !hasPlaying,
    }))
  }

  const volumeAudio = () => {
    if (hasPlaying) {
      if (audioCurrent.current.muted) {
        audioCurrent.current.muted = false
        setHasVolume(true)
      } else {
        audioCurrent.current.muted = true
        setHasVolume(false)
      }
    }
  }

  useEffect(() => {
    return () => {
      audioCurrent.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])
  return { state, playingAudio, volumeAudio, hasPlaying, hasVolume }
}

export default useInitialState
