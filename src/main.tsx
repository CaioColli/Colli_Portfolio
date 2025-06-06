import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from './routes'
import styled, { createGlobalStyle } from 'styled-components'

const AppContainer = styled.div`
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
`;

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #212121;
    --gray: #3A3A3A;
    --transparentGray: rgba(140, 140, 140, 20%);
    --orange: #FA4B00;
    --white: #F3F3F3;
    --mediumGray: #3f3e3e;
    --ligthGray: #8C8C8C;
    --transparentLigthGray: rgba(220, 220, 220, 20%);
    --transparent: rgba(255, 255, 255, 10%)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'CodeBold';
    src: url('/assets/fonts/codeBold.otf');
  }

  @font-face {
    font-family: 'louis';
    src: url('/assets/fonts/louisGeorgeCafe.ttf');
  }

  body {
    font-family: 'CodeBold', sans-serif;
  }
  
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <AppContainer>
      <Routes />
    </AppContainer>
  </StrictMode>
)
