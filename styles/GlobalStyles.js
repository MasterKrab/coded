import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   html{
      box-sizing: border-box;
      scroll-behavior: smooth;
      scroll-padding-top: 5rem;
   }

   *,
   *::before,
   *::after{
      box-sizing: inherit;
   }
   
   body{
      font-family: 'Poppins', sans-serif;
      min-height: 100vh;
      color: #222;
   }

   a{
      color: inherit;
      text-decoration: none;
   }

   img{
      max-width: 100%;
   }

   code{
      background-color: #eee;
   }
`

export default GlobalStyles
