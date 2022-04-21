import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:Work Sans,sans-serif;
      
    }
    
    h1,h2,h3,h4,h5,h6,a,input,select,textarea{
        font-family:Work Sans,sans-serif;
    }
    body{
        position:relative
        z-index:1
    }
    a {
        text-decoration: none;
        color: var(--white);
        cursor: pointer;
    }

    @media(max-width: 1400px) {
       
        html {
            font-size: 85%;
        }
    }
    @media(max-width: 720px) {
        html {
            font-size: 55%;
        }
    }
    @media(max-width: 720px) {
        
        html {
            font-size: 55%;
        }
    }
`;