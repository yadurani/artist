import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.button`
  border-radius: ${({ theme }) => theme.sizes.xxxl.size};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizes.xl.size};
  font-weight: bold;
  line-height: ${({ theme }) => theme.sizes.xl.line};
  padding: 24px 56px;
  @media (max-width: 560px) {
    padding: 6px 24px;
    font-size: ${({ theme }) => theme.sizes.sm.size};
  }
  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.secondary.main};
      color: black;
      &:hover {
        background: ${({ theme }) => theme.colors.secondary.dark};
        @media (max-width: 768px) {
          background: ${({ theme }) => theme.colors.secondary.main};
        }
      }
      &:focus {
        outline: none;
        box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.7);
      }
    `}
  ${({ outline, primary }) =>
    outline &&
    primary &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.secondary.main};
      color: ${({ theme }) => theme.colors.secondary};
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.secondary.main};
    `}
    ${({ outline }) =>
    outline &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.grey};
      background: transparent;
      color: ${({ theme }) => theme.colors.grey};
      &:hover {
        background: ${({ theme }) => theme.colors.grey};
        color: ${({ theme }) => theme.colors.primary};
        @media (max-width: 768px) {
          background: initial;
          color: ${({ theme }) => theme.colors.grey};
        }
      }
      &:focus {
        outline: none;
      }
    `}
`
