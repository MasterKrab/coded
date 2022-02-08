import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .editor-wrapper{
      width: 100%;
      min-height: 100%;
      height: 70vh;


      @media screen and (min-width: 500px) {
        height: 73vh;
      }
         
      @media screen and (min-width: 1024px) {
        height: 75vh;
      }
   }
`

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
  min-height: 350px;
  z-index: ${({ show }) => (show ? '1' : '-1')};

  @media screen and (min-width: 1024px) {
    position: static;
    max-width: 50%;
    z-index: 1;
  }
`
