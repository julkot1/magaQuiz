import { createGlobalStyle } from 'styled-components'
import { white, blue } from './colors'

const Global = createGlobalStyle`
    html{
        margin: 0;
        background-color: ${white};
        overflow: hidden;
    }
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`
export default Global
