import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../constants/theme'
import Home from '../containers/Home'
import GlobalStyle from '../styled/globalStyled'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
)

export default App
