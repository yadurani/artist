import { createGlobalStyle } from 'styled-components'
import theme from '../constants/theme'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colors.primary};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    overflow-x: hidden;
    margin: 0;
  }
`

export default GlobalStyle
