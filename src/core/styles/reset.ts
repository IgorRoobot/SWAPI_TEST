import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  html, body {
    background: black;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote {
    &:before,
    &:after {
      content: "";
      content: none;
    }
  }

  q {
    &:before,
    &:after {
      content: "";
      content: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
