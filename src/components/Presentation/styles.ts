'use client'
import styled from "styled-components";

export const Background = styled.div`
background: url('background.svg') repeat;
background-size: cover;
background-position-x: center;
animation: spin 90s linear infinite;

@keyframes spin {
  0% {
    background-position-y: -10080px;
  }
  100% {
    background-position-y: 10080px;
  }
}
`

export const BackgroundSecondary = styled.div`
background: url('background.svg') repeat-y;
background-size: 100% cover;
background-position-x: 50%;
animation: spin 55s linear infinite;

@keyframes spin {
  0% {
    background-position-y: 10080px;
  }
  100% {
    background-position-y: -10080px;
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
            max-width: 540px;
        }

        #question {
          padding-top: 48px;
          width: 100%;
          text-align: right;
        }
    }

    @media (max-width: 840px) {
      justify-content: space-evenly;
      flex-direction: column-reverse;
      aside {
        flex-direction: row;
        gap: 36px;
      }
      section {
        padding-top: 2rem;
        div {
          max-width: 360px;
        }
    }
    }
`