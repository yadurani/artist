import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 14%;
  right: 30px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  z-index: 1;
  width: 38%;
  justify-content: end;
  p {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media (max-width: 560px) {
    position: static;
    padding: 40px 30px;
    width: calc(100% - 60px);
  }
`

export const PlayerButton = styled.button`
  background: transparent;
  border: none;
  padding-right: 1rem;
  cursor: pointer;
  width: 40px;
  &:focus {
    outline: none;
  }
`
export const MuteButton = styled.button`
  background: transparent;
  border: none;
  padding-left: 1rem;
  cursor: pointer;
  align-self: flex-end;
  &:focus {
    outline: none;
  }
`
