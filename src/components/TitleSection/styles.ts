"use client"
import styled from "styled-components";

export const Container =  styled.span`
    display: flex;
    align-items: center;
    line-height: 100%;
    
    h1 {
        font-size: 2.5rem;
        letter-spacing: -2px;
        text-shadow: 0.1em 0.1em 0.1em ${props => props.theme["color-0"]};
    }
`