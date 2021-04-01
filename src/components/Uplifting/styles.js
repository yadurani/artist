import styled from 'styled-components'
import { HeadlineBase } from '../Common/Text/Headline/styles'

export const UpliftingWrapper = styled.section`
  padding: 0 15px;
  margin-top: 25rem;
  margin-bottom: 12.5rem;
  @media (max-width: 560px) {
    padding: 0 30px;
    margin-top: 12.5rem;
  }
`

export const UpliftingHead = styled.article`
  width: 75%;
  margin-bottom: 8rem;
  @media (max-width: 960px) {
    width: 100%;
  }
  @media (max-width: 560px) {
    width: 100%;
    margin-bottom: 3.5rem;
  }
`

export const UpliftingGallery = styled.article`
  text-align: center;
  ${HeadlineBase} {
    position: relative;
    display: inline-grid;
    &:before {
      content: '';
      width: 11px;
      height: 59px;
      background: #0b0b0b;
      position: absolute;
      left: 130px;
      top: 54px;
      @media (max-width: 1024px) {
        display: none;
      }
    }
    &:after {
      content: '';
      width: 18px;
      height: 15px;
      background: #0b0b0b;
      position: absolute;
      left: 130px;
      top: 93px;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
`

export const UpliftingGalleryWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns:
    minmax(150px, 328px) minmax(106px, 226px) minmax(140px, 239px)
    minmax(145px, 275px) minmax(160px, 239px);
  margin-top: -6.6rem;
  position: relative;
  @media (max-width: 960px) {
    margin-top: -6rem;
  }
  @media (max-width: 560px) {
    margin-top: -3.5rem;
    grid-template-columns: minmax(110px, 134px) minmax(90px, 112px);
    grid-gap: 0 20%;
    img:last-child {
      display: none;
    }
  }
  @media (max-width: 320px) {
    margin-top: -3rem;
  }
`

export const UpliftingGalleryImg = styled.img`
  width: 100%;
  &:nth-of-type(2) {
    margin-top: 1rem;
    margin-left: -60px;
    position: relative;
    @media (max-width: 560px) {
      width: 136px;
      grid-column: 2;
      margin-left: -110px;
      margin-top: -2.5rem;
      z-index: 2;
    }
  }
  &:nth-of-type(3) {
    margin-top: 66px;
    margin-left: -135px;
    @media (max-width: 560px) {
      width: 136px;
      grid-column: 2;
      margin-left: -20px;
      margin-top: -40px;
    }
  }
  &:nth-of-type(4) {
    margin-top: -10px;
    margin-left: -155px;
    position: relative;
    @media (max-width: 560px) {
      grid-row: 1;
      grid-column: 2;
      margin-left: -10px;
      margin-top: 10px;
    }
  }
  &:nth-of-type(5) {
    margin-top: 66px;
    margin-left: -175px;
  }
`
