import { useState, useEffect } from 'react'

const useSlider = (slides, el) => {
  const [width, setWidth] = useState(null)
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  })
  const { activeIndex, transition } = state
  const disabledNext = activeIndex === slides.length - 1
  const disabledBack = activeIndex === 0

  useEffect(() => {
    const getWidth = () => el?.current.clientWidth
    setWidth(getWidth())
  }, [width])

  const nextSlide = () => {
    setState((prevState) => ({
      ...prevState,
      activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1,
      translate: (activeIndex + 1) * width,
    }))
  }

  const backSlide = () => {
    setState((prevState) => ({
      ...prevState,
      activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
      translate: (activeIndex - 1) * width,
    }))
  }

  const handleNav = (i) => {
    setState({
      ...state,
      activeIndex: i,
      translate: i * width,
    })
  }

  const handleResize = () => {
    setState((prevState) => ({
      ...prevState,
      translate: width,
      transition: 0,
    }))
  }

  useEffect(() => {
    if (transition === 0)
      setState((prevState) => ({ ...prevState, transition: 0.45 }))
    // eslint-disable-next-line
  }, [transition])

  return {
    state,
    nextSlide,
    backSlide,
    handleResize,
    width,
    disabledNext,
    disabledBack,
    handleNav,
  }
}

export default useSlider