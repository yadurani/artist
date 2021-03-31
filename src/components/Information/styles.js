import styled from 'styled-components'
import { HeadlineTwo } from '../Common/Text/Headline/styles'

export const InformationWrapper = styled.section`
  padding: 0 15px;
  text-align: center;
  width: 70%;
  margin: auto auto 19rem;
  @media (max-width: 960px) {
    width: calc(100% - 30px);
  }
  @media (max-width: 560px) {
    padding: 0 30px;
    width: calc(100% - 60px);
    margin: auto auto 2rem;
    ${HeadlineTwo} {
      text-align: left;
    }
  }
`
