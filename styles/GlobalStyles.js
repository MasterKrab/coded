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

   #__next,
   body{
      min-height: 100vh;
   }
   
   body{
      font-family: 'Poppins', sans-serif;
      background-color: ${({ theme }) =>
        theme.tertiaryColor};  background-image: ${({ theme }) =>
  `url('/assets/illustrations/${theme.backgroundImage}')`};
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: bottom;
      background-attachment: fixed;
      color: ${({ theme }) => theme.secondaryColor};
      transition: background-color 0.2s, color 0.2s;
      
      &::-webkit-scrollbar{
         width: 0.5rem;
      }
      
      &::-webkit-scrollbar-thumb{
         background-color: ${({ theme }) => theme.secondaryColor};
         border-radius: 0.5rem;
      }
   }

   #__next{
      display: flex;
      flex-direction: column;
      height: 100%;
   }

   a{
      position: relative;
  z-index: 100;
      color: inherit;
      text-decoration: none;

      &:focus,
      &:focus-visible{
         outline: 3px dashed ${({ theme }) => theme.secondaryColor};
         outline-offset: 3px;
      }

      &:focus:not(:focus-visible){
         outline: none;
      }
   }

   img{
      display: block;
      max-width: 100%;
   }

   code{
      background-color: ${({ theme }) => theme.codeColor};
   }

   button,
   label{
      -webkit-tap-highlight-color: transparent;
   }
   
   button{
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;

      &:focus,
      &:focus-visible{
         position: relative;
         z-index: 10000000;
         outline: 3px dashed ${({ theme }) => theme.secondaryColor};
         outline-offset: 3px;
      }

      &:focus:not(:focus-visible){
         outline: none;
      }
   }
`

export default GlobalStyles
