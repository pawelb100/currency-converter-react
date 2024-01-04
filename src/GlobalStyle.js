import { createGlobalStyle } from "styled-components";
import background from './background.jpg';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-size: 18px;
        background-image: url("${background}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`;