import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    
  }
  button, input{
    outline: none;
    
  }
  html,body{
    font-size: 62.5%;
    height: 100%;
    width: 100%;
     
  }

  body {
    font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
  }

  :root{
     --primary-color: #112D4E;
     --secondary-color: #3F72AF;
     --ternary-color: #DBE2EF;
     --white-color: #F9F7F7;
     --black-color: #000000;

  }
`;
