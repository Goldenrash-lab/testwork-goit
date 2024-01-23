import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        font-family: 'Nunito-Regular';
        font-size: 18px;
        line-height: 24px;
    }
    h1,h2,h3,h4,h5,h6,p{
        padding: 0;
        margin: 0;

    }
    ul,ol{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    img{
        display: block;
    
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;
