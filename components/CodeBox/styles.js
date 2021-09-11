import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  --button-opacity: 1;

  @media screen and (min-width: 768px) {
    --button-opacity: 0;

    &:hover {
      --button-opacity: 1;
    }
  }
`

export const Pre = styled.pre`
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 0.8em;
  margin-top: 0;
  margin-bottom: ${({ isFullScreen }) => (isFullScreen ? '0' : '1rem')};
  padding: ${({ isFullScreen }) => (isFullScreen ? '20px' : '35px 20px 20px')};
  height: calc(100% - 39px);
  font-family: 'Fira Code', monospace;
  color: ${({ color }) => color};
  box-shadow: 0 0 20px 10px ${({ theme }) => theme.codeShadow};
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    height: 100%;
  }

  &::-webkit-scrollbar {
    background-color: #fff;
    width: 8px;
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
