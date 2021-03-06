import { css, keyframes } from 'styled-components'

export const soundKeyFrames = keyframes`
  0% {
    opacity: .35;
    transform: scaleY(0.3); 
    transform-origin: center bottom;
  }
  100% {
    opacity: 1;       
    transform: scaleY(1); 
    transform-origin: center bottom;    
  }
`

const gradientKeyFrames = keyframes`
  0% {
    transform: translateX(100px);
    transform: translateY(50px);
    background: radial-gradient(66.58% 66.58% at 108.17% 31.75%, #589AF2 0%, #7A4CDE 100%);
    opacity: 0.5;
    filter: blur(100px);
  }
  50% {
    transform: translateX(-50px);
    transform: translateY(-50px);
    background: radial-gradient(66.58% 66.58% at 108.17% 31.75%, #E658F2 0%, #440FB9 100%);
    opacity: 1;
    filter: blur(50px);
  }
  100% {
    transform: translateX(100px);
    transform: translateY(50px);
    background: radial-gradient(145.67% 145.67% at 108.17% 31.75%, #2BA8CF 0%, #FF39EB 100%);
    opacity: 0.5;
    filter: blur(100px);
  }
`
const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '0.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `

export const gradient = ({
  time = '3s',
  type = 'linear',
  count = 'infinite',
} = {}) =>
  css`
    animation: ${time} ${gradientKeyFrames} ${type} ${count};
  `
