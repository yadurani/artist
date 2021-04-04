import styled from 'styled-components'
import { soundKeyFrames } from '../../../styled/animation'

export const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 14%;
  right: 30px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  z-index: 1;
  width: 38%;
  justify-content: end;
  .sound {
    path {
      transform: scaleY(1);
      animation: ${soundKeyFrames} 0ms -800ms linear infinite alternate;
      &:nth-of-type(1) {
        animation-duration: 474ms;
      }
      &:nth-of-type(2) {
        animation-duration: 433ms;
      }
      &:nth-of-type(3) {
        animation-duration: 407ms;
      }
      &:nth-of-type(4) {
        animation-duration: 458ms;
      }
      &:nth-of-type(5) {
        animation-duration: 400ms;
      }
      &:nth-of-type(6) {
        animation-duration: 427ms;
      }
    }
  }
  p {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media (max-width: 560px) {
    position: static;
    padding: 40px 30px;
    width: calc(100% - 60px);
  }
`

export const PlayerButton = styled.button`
  background: transparent;
  border: none;
  padding-right: 1rem;
  cursor: pointer;
  width: 40px;
  margin-top: 3px;
  &:focus {
    outline: none;
  }
`
export const MuteButton = styled.button`
  background: transparent;
  border: none;
  padding-left: 1rem;
  cursor: pointer;
  align-self: flex-end;
  &:focus {
    outline: none;
  }
`
