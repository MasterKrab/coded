import styled from 'styled-components'

export const Pre = styled.pre`
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 0.8em;
  padding: 20px;
  box-shadow: 0 0 20px 10px ${({ theme }) => theme.codeShadow};
  color: ${({ color }) => color};
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: #fff;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aba7a7;

    &:hover,
    &:active {
      background-color: #aba7a7ee;
    }
  }
`

export const LineIndex = styled.span`
  text-align: right;
  padding-right: 1em;
  user-select: none;
`
