"use client"
import styled from "styled-components";

export const Container = styled.div`
background-color: ${props => props.theme["color-20"]}33;
padding: 1rem;
border-radius: 16px;
position: relative;
border: 1px solid  ${props => props.theme["color-30"]}33;

.preview {
    position: absolute;
    top: 1.325rem;
    right: 24px;
    
    a {
        display: flex;
        align-items: center;
        font-size: 0.975rem;
        color:  ${props => props.theme["color-5"]};
        background-color: ${props => props.theme["color-85"]};
        border-radius: 50%;
        transition: 0.5s;

        &:hover {
            color:  ${props => props.theme["color-85"]};
            background-color: ${props => props.theme["color-5"]};
            transition: 0.5s;
        }
    }
}

.project {
    max-width: 100%;
    min-width: 100%;
    height: min-content;
    aspect-ratio: 1/.65;
    object-fit: cover;
    border-radius: 12px;
}

h3 {
    width: 100%;
    margin-block: 12px;
    font-weight: 700;
}

span {
    font-size: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 2rem;

    color:  ${props => props.theme["color-75"]}80;

    div{
        font-size: 1.25rem;
    }
}

p {
    line-height: 125%;
    padding-block: 8px;
    font-size: 0.825rem;
}


.access {
    padding-block-start: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a {
        display: flex;
        align-items: center;
        color: inherit;
        gap: 10px;
        font-size: 0.75rem;
        letter-spacing: 1.2px;
        padding: 6px 8px;
        background-color: ${props => props.theme["color-5"]}bf;
        border-radius: 4px;
        transition: 0.5s;

        &:hover{
            background-color: ${props => props.theme["color-95"]}bf;
            transition: 0.5s;
            color: ${props => props.theme["color-5"]};
        }
    }

}
`