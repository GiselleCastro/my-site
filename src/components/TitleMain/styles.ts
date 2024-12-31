"use client"
import styled from "styled-components";

export const Container =  styled.span`
    display: flex;
    align-items: center;
    letter-spacing: -3px;
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 4rem;

    text-shadow: -0.02em -0.02em 0.01em ${props => props.theme["color-50"]}80;

    background-image: linear-gradient(150deg,  ${props => props.theme["color-50"]} 0%, ${props => props.theme["color-95"]} 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 840px) {
        font-size: 2.625rem;
        line-height: 3rem;

    }
`