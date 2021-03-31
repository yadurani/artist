import styled from 'styled-components'

export const BodyBase = styled.p`
  && {
    margin-top: ${(props) => (props.mt ? `${props.mt}rem` : null)};
    margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : null)};
  }
  color: white;
  margin: 1rem 0;
`
export const BodyOne = styled.p`
  font-size: ${({ theme }) => theme.sizes.lg.size};
  line-height: ${({ theme }) => theme.sizes.lg.line};
  @media (max-width: 560px) {
    font-size: 18px;
    line-height: 21.78px;
  }
`

export const BodyTwo = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.sizes.md.size};
  line-height: ${({ theme }) => theme.sizes.md.line};
`
