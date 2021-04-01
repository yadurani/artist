import styled from 'styled-components'

export const ButtonPlayWrapper = styled.button`
  width: 113px;
  height: 113px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  background: rgba(102, 100, 95, 0.5);
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active,
  &:visited,
  &:link {
    background: rgba(102, 100, 95, 0.5);
  }
  @media (max-width: 560px) {
    cursor: initial;
  }
`
