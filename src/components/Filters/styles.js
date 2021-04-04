import styled from 'styled-components'

export const FiltersWrapper = styled.section`
  text-align: center;
  margin-bottom: 12.5rem;
  @media (max-width: 560px) {
    margin-bottom: 8.5rem;
    padding: 0 30px;
  }
`
export const SliderWrapper = styled.div`
  width: max-content;
  margin: auto;
  overflow: hidden;
  margin-top: 2.8rem;
  @media (max-width: 560px) {
    width: 100%;
  }
`

export const SliderContent = styled.div`
  display: flex;
  width: ${(props) => props.width}px;
  max-width: ${(props) => props.maxWidth}px;
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  @media (max-width: 560px) {
    max-width: 100%;
  }
`

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(11, 11, 11, 0.5);
  display: grid;
  align-items: center;
  justify-content: center;
  height: 1px;
  transition: opacity ease 0.5s;
  visibility: hidden;
  opacity: 0;
`
export const SlideWrapper = styled.div`
  width: ${({ width }) => width}px;
  position: relative;
  &:hover {
    ${SlideOverlay} {
      height: auto;
      visibility: visible;
      opacity: 1;
    }
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`
export const SlideImage = styled.img`
  width: 646px;
  height: 646px;
  @media (max-width: 740px) {
    max-width: calc(100vw - 60px);
    max-height: calc(100vw - 60px);
    object-fit: contain;
  }
`

export const SliderNav = styled.div`
  margin-top: 2.5rem;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`

export const SliderDotsList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0 10px;
`

export const SliderDot = styled.li`
  background: ${(props) => (props.active ? 'white' : props.theme.colors.grey)};
  border-radius: 100%;
  height: 12px;
  width: 12px;
  list-style: none;
  opacity: ${({ active }) => (active ? '1' : 0.2)};
  cursor: pointer;
`
export const SliderArrows = styled.div`
  button {
    background: none;
    border: none;
    padding: 0 12px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`
export const ArrowButton = styled.button`
  &:disabled {
    opacity: ${({ active }) => !active && '0.2'};
  }
`
