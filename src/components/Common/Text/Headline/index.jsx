import React from 'react'
import {
  HeadlineOne,
  HeadlineTwo,
  HeadlineThree,
  HeadlineFour,
  HeadlineFive,
  HeadlineOutlineSecond,
  HeadlineOutlineThree,
} from './styles'

export const Headline1 = ({ text, ...props }) => (
  <HeadlineOne {...props}>{text}</HeadlineOne>
)

export const Headline2 = ({ text, ...props }) => (
  <HeadlineTwo {...props}>{text}</HeadlineTwo>
)

export const Headline3 = ({ text, ...props }) => (
  <HeadlineThree {...props}>{text}</HeadlineThree>
)

export const Headline4 = ({ text, ...props }) => (
  <HeadlineFour {...props}>{text}</HeadlineFour>
)

export const Headline5 = ({ text, ...props }) => (
  <HeadlineFive {...props}>{text}</HeadlineFive>
)

export const HeadlineOutline2 = ({ text, ...props }) => (
  <HeadlineOutlineSecond {...props}>{text}</HeadlineOutlineSecond>
)

export const HeadlineOutline3 = ({ text, ...props }) => (
  <HeadlineOutlineThree {...props}>{text}</HeadlineOutlineThree>
)
