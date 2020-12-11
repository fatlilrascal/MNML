import {createGlobalStyle} from 'styled-components'
import NeueMachinaRegular from '../fonts/NeueMachina-Light.otf'
import Univer from '../fonts/Univers-light-normal.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Neue Machina';
        src: url(${NeueMachinaRegular});
    }
    @font-face {
        font-family: 'Univer';
        src: url(${Univer});
    }
    html{
        font-size: 2.5vw;
    }
    body{
        margin:0rem;
        padding:0rem;
        height: 100vh;
    }
`