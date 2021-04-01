import React, { useRef, useState } from 'react'
import { Headline3 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import {
  ArrowButton,
  FiltersWrapper,
  SlideImage,
  SlideOverlay,
  SliderArrows,
  SliderContent,
  SliderDot,
  SliderDotsList,
  SliderNav,
  SliderWrapper,
  SlideWrapper,
} from './styles'
import ButtonPlay from '../Common/Play'
import { sliderFilters } from '../../constants/initialState'
import useSlider from '../../hooks/useSlider'
import useResize from '../../hooks/useResize'
import Icon from '../Common/Icon'

const Filters = () => {
  const [play, setPlay] = useState(true)
  const imgWidth = useRef()
  const {
    state,
    nextSlide,
    backSlide,
    handleResize,
    width,
    disabledBack,
    disabledNext,
    handleNav,
  } = useSlider(sliderFilters, imgWidth)
  const { activeIndex, transition, translate } = state
  useResize(handleResize)
  return (
    <FiltersWrapper>
      <HeadlineBase as={Headline3} text="Explore our new search filters" />
      <SliderWrapper>
        <SliderContent
          transition={transition}
          translate={translate}
          width={width * sliderFilters.length}
          maxWidth={width}>
          {sliderFilters?.map((slide, i) => (
            <SlideWrapper key={slide.img + i} width={width}>
              <SlideOverlay>
                <ButtonPlay isRing={play} onClick={() => setPlay(!play)} />
              </SlideOverlay>
              <SlideImage src={slide.img} alt="" ref={imgWidth} />
            </SlideWrapper>
          ))}
        </SliderContent>
        <SliderNav>
          <SliderDotsList>
            {sliderFilters?.map((_, i) => (
              <SliderDot
                key={i}
                active={activeIndex === i}
                onClick={() => handleNav(i)}
              />
            ))}
          </SliderDotsList>
          <SliderArrows>
            <ArrowButton onClick={backSlide} disabled={disabledBack}>
              <Icon name="back" />
            </ArrowButton>
            <ArrowButton onClick={nextSlide} disabled={disabledNext}>
              <Icon name="next" />
            </ArrowButton>
          </SliderArrows>
        </SliderNav>
      </SliderWrapper>
    </FiltersWrapper>
  )
}

export default Filters
