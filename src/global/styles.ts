import { createGlobalStyle } from "styled-components"
import './font.css'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    body{
        background: ${p=>p.theme.background};
    }

    body,input,textarea{
        font-family: 'Montserrat',sans-serif;
    }
`

export { GlobalStyle }