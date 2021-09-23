import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

export const EditorContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${({ show }) => (show ? '1' : '-1')};

  @media screen and (min-width: 1024px) {
    position: static;
    max-width: 50%;
    z-index: 1;
  }
`
