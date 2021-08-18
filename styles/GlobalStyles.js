import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   html{
      scroll-behavior: smooth;
      scroll-padding-top: 5rem;
      box-sizing: border-box;
   }
   
   *,
   *::before,
   *::after{
      box-sizing: inherit;
   }
   
   body{
      font-family: 'Poppins', sans-serif;
      background-color: ${({ theme }) => theme.backgroundColor};
      min-height: 100vh;
      color:${({ theme }) => theme.textColor};
      transition: background-color 0.2s;
      
      &::-webkit-scrollbar{
         width: 0.5rem;
      }
      
      &::-webkit-scrollbar-thumb{
         background-color: ${({ theme }) => theme.textColor};
         border-radius: 0.5rem;
      }
   }

   a{
      position: relative;
  z-index: 100;
      color: inherit;
      text-decoration: none;

      &:focus,
      &:focus-visible{
         outline: 3px dashed ${({ theme }) => theme.textColor};
         outline-offset: 3px;
      }

      &:focus:not(:focus-visible){
         outline: none;
      }
   }

   img{
      max-width: 100%;
   }

   code{
      background-color: ${({ theme }) => theme.codeColor};
   }
   
   button{
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;

      &:focus,
      &:focus-visible{
         outline: 3px dashed ${({ theme }) => theme.textColor};
         outline-offset: 3px;
      }

      &:focus:not(:focus-visible){
         outline: none;
      }
   }

`

export default GlobalStyles
