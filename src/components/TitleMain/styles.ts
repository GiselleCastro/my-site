"use client"
import styled from "styled-components";

export const Container =  styled.span`
    display: flex;
    align-items: center;
    letter-spacing: -3px;
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 4rem;

    text-shadow: 0.1em 0.1em 0.1em ${props => props.theme["color-5"]};

    background-image: linear-gradient(150deg,  ${props => props.theme["color-50"]} 0%, ${props => props.theme["color-95"]} 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`