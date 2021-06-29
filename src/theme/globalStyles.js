import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body, * {
    font-family: "Ubuntu", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.9em;
  }

  img{
    max-width: 100%;
  }

  a{
    color: ${({ theme }) => theme.color.grey};
    text-decoration: none;
    ${({ theme }) => theme.transition}

    &:hover{
      text-decoration: underline;
      ${({ theme }) => theme.transition}
    }
  }

  .text-color-light{
    color: ${({ theme }) => theme.color.grey};
  }

  p{
    line-height: 1.5em;
  }

  .text-box{
    h2{
      font-size: ${({ theme }) => theme.fontSize.large};
      text-transform: uppercase;
      color: ${({ theme }) => theme.color.dark};
      padding-bottom: 1em;

      &:not(:first-child){
        padding-top: 1.5em;
      }
    }

    p{
      padding-bottom: 0.5em;
    }

    ul{
      list-style: disc;
      list-style-position: inside;

      li{
        line-height: 1.5em;
        padding-bottom: 0.5em;
      }
    }
  }
`;

export default GlobalStyle;
