import { useState, useEffect, useRef } from 'react'

const useSlider = (slides, el) => {
  const imgWidth = useRef()
  const [width, setWidth] = useState(null)
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  })
  const { activeIndex, transition } = state
  const disabledNext = activeIndex === slides.length - 1
  const disabledBack = activeIndex === 0
  const getWidth = () => imgWidth?.current.clientWidth

  useEffect(() => {
    setWidth(getWidth())
    // eslint-disable-next-line
  }, [width])
  console.log('🚀 ~ file: useSlider.js ~ line 20 ~ useSlider ~ width', width)

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
    setWidth(getWidth())
    setState((prevState) => ({
      ...prevState,
      translate: getWidth(),
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
    imgWidth,
  }
}

export default useSlider
