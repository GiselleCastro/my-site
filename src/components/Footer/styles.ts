"use client"
import styled from "styled-components";

export const Container = styled.footer` 
border-top: 2px ${props => props.theme["color-20"]} solid;
padding-top: 20px ;
height: 72px;

div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    span {
        margin-right: auto;
    }
}
`