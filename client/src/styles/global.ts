import { createGlobalStyle } from "styled-components";

import { ThemeType } from "./themes";

export default createGlobalStyle<{ theme: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
    }
`;