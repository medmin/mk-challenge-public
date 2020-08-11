import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  
  #app {
    position: absolute; /* otherwise, sweetalert2 popup will mess up footer */
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px minmax(500px, auto) 60px;
  }
  
  .footer {
    grid-row-start: 3;
    grid-row-end: 3;
  }

  /** ballon css */
  :root {
    --balloon-border-radius: 4px;
    --balloon-font-size: 16px;
  }

  /** sweetalert2 */
  .swal2-title {
    font-size: 24px;
  }

`;
