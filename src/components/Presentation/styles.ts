'use client'
import styled from "styled-components";

export const Background = styled.div`
background: url('hexa.svg') repeat;
/* background-image: radial-gradient(${props=> props.theme["color-5"]}e6 1px, transparent 1px, ${props=> props.theme["color-0"]}15 1px, transparent 1px); */
/* background-size: 10px 10px;
background-position: 0 0, 5px 5px;
background-color: ${props=> props.theme["color-5"]}66; */
animation: spin 15s linear infinite;

@keyframes spin {
  0% {
    background-position:-100% -100%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 200% 200%;
  }
}
`

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: left;
    min-height: calc(min(100vh, 1080px));
    max-height: 1080px;
    position: relative;
    
    #down {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;

        position: absolute;
        bottom: 36px;
        left: 36px;
        font-size: 24px;
        transition: 0.5s;

        color: inherit;

        &:hover{
            font-size: 32px;
            transition: 0.5s;
            cursor: pointer;
        }
    }

    aside {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            max-width: 600px;
        }
    }
`