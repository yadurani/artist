import React from 'react'
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
  FiltersContainer,
} from './styles'
import ButtonPlay from '../Common/Play'
import { sliderFilters } from '../../constants/initialState'
import useSlider from '../../hooks/useSlider'
import useResize from '../../hooks/useResize'
import Icon from '../Common/Icon'

const Filters = () => {
  const {
    state,
    nextSlide,
    backSlide,
    handleResize,
    disabledBack,
    disabledNext,
    handleNav,
    width,
    imgWidth,
  } = useSlider(sliderFilters)
  const { activeIndex, transition, translate } = state
  useResize(handleResize)
  return (
    <FiltersWrapper>
      <HeadlineBase as={Headline3} text="Explore our new search filters" />
      <FiltersContainer ref={imgWidth}>
        <SliderWrapper>
          <SliderContent
            transition={transition}
            translate={translate}
            width={width * sliderFilters.length}
            maxWidth={width}>
            {sliderFilters?.map((slide, i) => (
              <SlideWrapper key={slide.img + i} width={width}>
                <SlideOverlay>
                  <ButtonPlay isRing={false} />
                </SlideOverlay>
                <SlideImage src={slide.img} alt="" />
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
              <ArrowButton
                onClick={backSlide}
                disabled={disabledBack}
                ariaLabel="back">
                <Icon name="back" />
              </ArrowButton>
              <ArrowButton
                ariaLabel="next"
                onClick={nextSlide}
                disabled={disabledNext}>
                <Icon name="next" />
              </ArrowButton>
            </SliderArrows>
          </SliderNav>
        </SliderWrapper>
      </FiltersContainer>
    </FiltersWrapper>
  )
}

export default Filters
