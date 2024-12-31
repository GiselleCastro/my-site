'use client'
import styled from "styled-components";

export const Container = styled.button`
            padding: 6px 24px;
            border-radius: 4px;
            border-style: none;
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 16px;
            background-color: ${props=> props.theme["color-5"]};
            border: 1px solid ${props=> props.theme["color-50"]};
            color: inherit;
            cursor: pointer;
            font-size: 1rem;
            line-height: 150%;
            font-family: inherit;

            transition: 0.5s;

            &:hover{
                background-color:${props=> props.theme["color-75"]};
                color: ${props=> props.theme["color-5"]};
                transition: 0.5s;
            }
        `