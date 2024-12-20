"use client"
import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme["color-5"]}cc;
    z-index: 1;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    position: absolute;
    background-color: ${props => props.theme["color-15"]};
    border: 1px solid ${props => props.theme["color-50"]};
    width: 38em;
    aspect-ratio: 1/.65;
    border-radius: 12px;

    #closeModal {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 6px;
        line-height: 0;
        border-radius: 50%;
        border: none;
        background-color: ${props => props.theme["color-15"]}33;
        transition: 0.5s;

        svg {
            width: 24px;
            height: 24px;
            color: ${props => props.theme["color-95"]}80;
        }

        &:hover {
            background-color: ${props => props.theme["color-35"]}33;
            transition: 0.5s;
            cursor: pointer;
        }
    }
`
