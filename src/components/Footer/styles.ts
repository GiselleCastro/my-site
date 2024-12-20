"use client"
import styled from "styled-components";

export const Container = styled.footer` 
border-top: 2px ${props => props.theme["color-20"]} solid;
padding-top: 20px ;
height: 72px;

font-size: 0.875rem;
color: ${props => props.theme["color-90"]};

div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    span {
        margin-right: auto;
    }
}

@media (max-width: 840px) {
    height: 9rem;

    div {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 36px;
    
        span {
            width: 100%;
            text-align: center;
        }
    }
}
`