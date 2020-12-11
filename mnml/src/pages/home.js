import React from 'react'
import styled from 'styled-components'
import { useCurrentRoute, useViewElement } from 'react-navi'
import {animated, useTransition } from 'react-spring'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

import {defaultTheme} from '../assets/defaultTheme'
import {GlobalStyle} from '../assets/globalStyles'
import {device} from '../assets/mediaQueries'
import { IconContext } from 'react-icons/lib'


const StyledTitlepage = styled.div`
    background-color: ${defaultTheme.homeBackgroundColor};
    height: 100vh;
    display:flex;
    align-items: center;
    flex-direction: column;


    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    @media ${device.laptopL} {
        max-width: 1440px;

        button{
            margin-top: -1rem;
            font-size: 1.5rem;
        }
    }
`
const Header = styled.h1`
    font-family:${defaultTheme.font1};
    color:${defaultTheme.fontColor};

    padding:0rem;
    margin-top: 13rem;

    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        font-weight: lighter;
        padding:0rem;
        margin:0rem;
    }
    h2{
        margin-top: 0rem;
        font-weight: lighter;
    }

    @media ${device.laptopL} {
        max-width: 1440px;

        h1{
            font-size:2.5rem;
        }
        h2{
            font-size: .4rem;
        }
    }

`

const SupportList = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-between;
    font-family:${defaultTheme.font1};
    color:${defaultTheme.fontColor};
    margin-top: auto;
    

    @media ${device.laptopL} {
        max-width: 1440px;
        margin-bottom: -.5rem;

        li{
            padding: .8rem;
            font-size: .4rem;
        }
    }

`

export default function Home() {
  let currentRoute = useCurrentRoute()
  let viewElement = useViewElement()
  return(
    <StyledTitlepage>
      <GlobalStyle />
      <Header>
          <h1>MNML</h1>
          <h2>ONLINE EXTENSION FOR X CLASS</h2>
      </Header>
      <button>
          <IconContext.Provider
            value={{ color: 'white' }}
          >
            <IoIosArrowDroprightCircle />
          </IconContext.Provider>
      </button>
      <SupportList>
          <li>
            SUPPORT
          </li>
          <li>
            DOCUMENTATION
          </li>
          <li>
            CONTACT
          </li>
      </SupportList>
    </StyledTitlepage>
  )
}
