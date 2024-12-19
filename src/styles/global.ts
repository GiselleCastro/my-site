import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: none;
}

html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
}

a {
   line-height: 0;
   text-decoration: none;
}

body {
     color: ${props => props.theme["color-90"]};
    --webkit-font-smoothing: antialiased;
    background-image: linear-gradient( 109.6deg,  ${props => props.theme["color-10"]} 11.2%, ${props => props.theme["color-10"]} 51.2%, ${props => props.theme["color-0"]} 98.6% );
    font-size: 1.125rem;
}

p {
    font-size: 0.875rem;
}

.anchor {
    scroll-margin-top: 160px;
}

.box {
    max-width: 1920px;
    padding: 0 8rem;
    margin: auto;

    @media (max-width: 1440px) {
        padding: 0 4rem;
    }

    @media (max-width: 980px) {
        padding: 0 2rem;
    }

    @media (max-width: 540px) {
        padding: 0 1rem;
    }
}
`