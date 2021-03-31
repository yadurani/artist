import styled from 'styled-components'
import {
  HeadlineOne,
  HeadlineThree,
  HeadlineTwo,
} from '../Common/Text/Headline/styles'

export const BannerWrapper = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  height: calc(100vh + 80px);
  margin-top: -80px;
  @media (min-width: 1920px) {
    ${HeadlineOne} {
      font-size: 56rem;
      margin: 0;
    }
  }
  @media (max-width: 1220px) {
    ${HeadlineOne} {
      font-size: 32rem;
      margin: 0;
    }
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    margin-top: 0;
    height: auto;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    margin-top: 0;
    height: 100vh;
    ${HeadlineOne} {
      font-size: 18rem;
      margin: 0;
    }
    ${HeadlineTwo} {
      font-size: ${({ theme }) => theme.sizes.xxl.size};
    }
    ${HeadlineThree} {
      font-size: ${({ theme }) => theme.sizes.xl.size};
      margin-top: 0;
    }
  }
  @media (max-width: 320px) {
    height: calc(100vh + 80px);
  }
`
export const BannerNumberBig = styled.article`
  margin-left: -100px;
  align-self: center;
  @media (max-width: 560px) {
    overflow: hidden;
    margin-left: -80px;
  }
`
export const BannerText = styled.article`
  display: grid;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0 15px;
    margin-top: -4rem;
    align-items: flex-start;
  }
  @media (max-width: 560px) {
    padding: 0 30px;
    align-items: flex-start;
  }
`

export const BannerTextContent = styled.div``
