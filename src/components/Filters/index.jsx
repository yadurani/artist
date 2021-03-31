import React from 'react'
import { Headline3 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import { FiltersWrapper } from './styles'

const Filters = () => {
  return (
    <FiltersWrapper>
      <HeadlineBase as={Headline3} text="Explore our new search filters" />
    </FiltersWrapper>
  )
}

export default Filters
