import { useState, useRef, useEffect } from 'react'
import initialState from '../constants/initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [hasPlaying, setHasPlaying] = useState(false)
  const [hasVolume, setHasVolume] = useState(true)
  const [trackProgress, setTrackProgress] = useState(0)
  const songsRef = useRef()
  const {
    mediaCurrent: { audio },
  } = state

  const audioCurrent = useRef(new Audio(audio))
  const intervalRef = useRef()
  const { duration } = audioCurrent?.current

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (audioCurrent.current.ended) {
        setHasPlaying(false)
      } else {
        setTrackProgress(audioCurrent.current.currentTime)
      }
    }, [1000])
  }

  useEffect(() => {
    if (hasPlaying) {
      audioCurrent.current = new Audio(audio)
      audioCurrent.current.play()
      startTimer()
    } else {
      audioCurrent.current.pause()
      setTrackProgress(0)
    }
    return () => {
      // eslint-disable-next-line
      audioCurrent.current.pause()

      clearInterval(intervalRef.current)
    }
  }, [hasPlaying, audio])

  const playingAudio = (song) => {
    setHasPlaying(!hasPlaying)
    if (Object.keys(song).length) {
      setState((prevState) => ({
        ...prevState,
        mediaCurrent: {
          id: song.id,
          audio: song.audio,
          name: song.title,
        },
      }))
      if (song.audio !== audio) {
        setHasPlaying(true)
        setTrackProgress(0)
      }
    }
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

  return {
    duration,
    trackProgress,
    songsRef,
    state,
    playingAudio,
    volumeAudio,
    hasPlaying,
    hasVolume,
  }
}

export default useInitialState
