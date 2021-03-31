import styled from 'styled-components'
import { BodyOne } from '../Common/Text/Body/styles'
import { HeadlineBase } from '../Common/Text/Headline/styles'

export const BannerEndWrapper = styled.section`
  ${HeadlineBase} {
    transform: translateX(-240px);
    position: absolute;
    bottom: -40px;
    @media (min-width: 1920px) {
      font-size: 50rem;
      transform: translateX(-240px);
      top: 0;
    }
    @media (max-width: 1220px) {
      font-size: 35rem;
    }
    @media (max-width: 960px) {
      font-size: 20rem;
      position: static;
      transform: translateX(-40px);
      margin-bottom: 0;
    }
    @media (max-width: 560px) {
      font-size: 8.5rem;
      position: static;
      transform: translateX(-40px);
      margin-bottom: 0;
    }
  }
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: center;
  @media (max-width: 960px) {
    height: auto;
    ${BodyOne} {
      margin-top: 0;
    }
  }
  @media (max-width: 560px) {
    height: auto;
    ${BodyOne} {
      margin-top: 0;
    }
  }
`
export const BannerEndText = styled.article`
  text-align: center;
  margin-top: 11rem;
  position: relative;
  @media (max-width: 960px) {
    margin-top: 0;
    margin-bottom: 4rem;
  }
  @media (max-width: 560px) {
    margin-top: -1rem;
    padding: 0 30px;
  }
`
