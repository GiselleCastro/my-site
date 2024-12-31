"use client"
import styled from "styled-components";

export const Container =  styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    height: 75px;

    text-shadow: 0.05em 0.05em 0.01em #367dc91a;

    background-image: linear-gradient(30deg, #204b79 0%, #86b1df 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    transition: 0.75s;

    img {
        width: 48px;
    }

    &:hover {
        font-size: 50px;
        transition: 0.75s;
    }

`