import styled from 'styled-components'

export const HeadlineBase = styled.h2`
  && {
    margin-top: ${(props) => (props.mt ? `${props.mt}rem` : null)};
    margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : null)};
  }
  margin: ${({ theme }) => theme.sizes.md.size} 0;
  color: white;
`
export const HeadlineOne = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xxxxl.size};
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.grey};
`
export const HeadlineTwo = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xxxl.size};
  @media(max-width: 560px) {
    font-size: ${({ theme }) => theme.sizes.xl.size};
  }
`
export const HeadlineThree = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xxl.size};
  color: ${({ secondary, theme }) => secondary && theme.colors.secondary.main};
  @media(max-width: 560px) {
    font-size: ${({ theme }) => theme.sizes.xl.size};
  }
`
export const HeadlineFour = styled.h4`
  font-size: ${({ theme }) => theme.sizes.xl.size};
`
export const HeadlineFive = styled.h5`
  font-size: ${({ theme }) => theme.sizes.lg.size};
`
export const HeadlineOutlineSecond = styled.h3`
  font-size: 9.375rem;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 8rem;
  }
  @media (max-width: 560px) {
    font-size: 3.8rem;
  }
  @media (max-width: 320px) {
    font-size: 3rem;
  }
`
