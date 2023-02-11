import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        button{
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
    body{
        background-color: #09090a;
    }
`;
