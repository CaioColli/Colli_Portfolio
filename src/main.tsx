import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #212121;
    --gray: #3A3A3A;
    --orange: #FA4B00;
    --white: #F3F3F3;
  }

  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    width: 1920px;
    max-width: 100%;
  }

  @font-face {
    font-family: 'CodeBold';
    src: url('./src/assets/fonts/codeBold.otf');
  }

  body {
    font-family: 'CodeBold', sans-serif;
  }
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <Routes />
  </StrictMode>
)
