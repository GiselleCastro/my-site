'use client'
import styled from 'styled-components'

export const Container = styled.span`
    background-color: ${props => props.theme["color-100"]}26;
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    padding: 6px 8px;
    border-radius: 48px;
    margin: 4px 4px;

    font-size: 0.875rem;
`