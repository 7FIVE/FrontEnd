import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    background-color: #c4c4c4;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    cursor: pointer;
  }
`;
