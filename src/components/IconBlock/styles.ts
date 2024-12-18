"use client"
import styled from "styled-components";

export const Container = styled.a`  
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        line-height: 0;
        border-radius: 8px;
        border: 1.5px solid ${props => props.theme['color-100']};
        box-shadow: inset 0px 0px 10px 10px ${props => props.theme["color-100"]}15;
        transition: 0.5s;


        &:hover{
            box-shadow: inset 0px 0px 10px 10px ${props => props.theme["color-85"]}45;
            transition: 0.5s;
            border: 1.5px solid ${props => props.theme["color-80"]};
        }

    svg {
        color: ${props => props.theme["color-100"]};
    }

`