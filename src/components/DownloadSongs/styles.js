import styled from 'styled-components'

export const DownloadWrapper = styled.article`
  display: grid;
  @media(min-width: 961px) {
  grid-template-columns: 7% 20% 3% 4% 20% 1% 17% 5% 22%;
  grid-template-rows: 300px 30% 300px 25%;
  > div:nth-of-type(2) {
    grid-column: 6/7;
    grid-row: 2/3;
  }
  > div:nth-of-type(3) {
    grid-column-start: 2;
    grid-row-start: 3;
  }
  > div:nth-of-type(4) {
    grid-column: 6/10;
    grid-row-start: 4;
    justify-self: flex-end;
  }
  > div:nth-of-type(5) {
    grid-column-start: 3;
    grid-row-start: 5;
  }
  }
  @media (max-width: 960px) {
    grid-template-columns: minmax(355px, 1fr) minmax(355px, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 14px 8px;
    > div:nth-of-type(1),
    > div:nth-of-type(2),
    > div:nth-of-type(3),
    > div:nth-of-type(4),
    > div:nth-of-type(5) {
      grid-column: auto;
      justify-self: center;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 8px;
    > div:nth-of-type(1),
    > div:nth-of-type(2),
    > div:nth-of-type(3),
    > div:nth-of-type(4),
    > div:nth-of-type(5) {
      grid-column: 1/-1;
      justify-self: center;
    }
  }
`

export const DownloadImg = styled.img`
  width: auto;
  @media (max-width: 560px) {
    width: 100%;
  }
`
export const DownloadItem = styled.div`
  cursor: pointer;
  height: 355px;
  position: relative;
  width: 355px;
  &:hover {
    &:before {
      background: rgba(11, 11, 11, 0.5);
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  @media (max-width: 560px) {
    width: 100%;
    height: auto;
    max-width: 355px;
    max-height: 355px;
  }
`
export const SectionWrapper = styled.section`
  margin: 20rem 0 0;
  padding: 0 1rem;
  @media (max-width: 560px) {
    margin: 15rem 0 0;
    padding: 0 30px;
  }
`
export const SubHeader = styled.article`
  margin-bottom: 8rem;
  width: 55%;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 960px) {
    width: 90%;
  }
  @media (max-width: 560px) {
    margin-bottom: 4rem;
  }
`
