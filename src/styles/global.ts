import { mixin } from './mixins'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: ${mixin.fonts.sizes.small}  ${mixin.fonts.weights.regular} 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    &:hover{
      text-decoration: underline;
    }
    
  }

`
