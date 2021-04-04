import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../constants/theme'
import Home from '../containers/Home'
import AppProvider from '../context/AppContext'
import GlobalStyle from '../styled/globalStyled'

const App = () => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </AppProvider>
)

export default App
