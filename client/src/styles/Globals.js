import {createGlobalStyle} from 'styled-components';

export const Globals = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  body {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  input, textarea {
    background: none;
    color: inherit;
    font: inherit;
    text-decoration: none;
  }

  select {
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    /*appearance: none;*/
    /*-webkit-appearance: none;*/
    /*-moz-appearance: none;*/
  }


  button {
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    overflow: visible;
  }

  h1 {
    font-size: 27px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 17px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-size: 11px;
  }

  h6 {
    font-size: 9px;
  }
`;