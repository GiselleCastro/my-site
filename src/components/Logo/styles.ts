"use client"
import styled from "styled-components";

export const Container =  styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, sans-serif;
    font-size: 42px;
    font-weight: 900;
    height: 75px;
    border-radius: 0 0 12px 0;

    text-shadow: 0.2em 0.2em 0.2em ${props => props.theme["color-0"]};

    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    transition: 0.75s;

    &:hover {
        font-size: 48px;
        transition: 0.75s;
    }

`