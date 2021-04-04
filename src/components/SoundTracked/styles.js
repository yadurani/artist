import styled, { css } from 'styled-components'
import { gradient } from '../../styled/animation'

export const SoundTrackWrapper = styled.section`
  display: grid;
  grid-template-columns: 55% 40%;
  align-items: center;
  padding: 0 15px;
  margin-top: 25rem;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  @media (max-width: 560px) {
    padding: 0 30px;
    margin-top: 12.5rem;
    text-align: center;
  }
`

export const SoundTrackText = styled.article`
  @media (max-width: 960px) {
    grid-row: 2;
    position: relative;
  }
`

export const SoundTrackRight = styled.article`
  @media (max-width: 960px) {
    grid-row: 1;
  }
`
export const SoundTrackImg = styled.img`
  height: auto;
  width: auto;
  object-fit: contain;
  filter: blur(0);
`
export const SoundTrackBg = styled.div`
  position: relative;
  text-align: center;
  padding: 60px 60px;
  width: fit-content;
  margin: auto;
  @media (max-width: 560px) {
    padding: 30px 30px;
    ${SoundTrackImg} {
      width: 100%;
    }
  }
  &:before {
    content: '';
    border-radius: 50%;
    background: radial-gradient(
      194.17% 194.17% at 24.58% -33.33%,
      #589af2 0%,
      #7a4cde 100%
    );
    filter: blur(78px);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: 0.5;
    transition: opacity 1s ease-in-out;
    ${({ show }) =>
      show &&
      css`
        ${gradient}
      `}
  }
`
export const SoundTrackImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 125px);
  grid-gap: 0 1.5rem;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    grid-gap: 8px 0;
    margin-top: 2.5rem;
  }
`
export const SoundTrackPicture = styled.picture`
  ${SoundTrackImg} {
    width: 100%;
    @media (max-width: 560px) {
      max-width: 355px;
    }
  }
`

export const SoundTrackSource = styled.source``
