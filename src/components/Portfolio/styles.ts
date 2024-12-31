'use client'
import styled from "styled-components";

export const Container = styled.main`
    margin-block: 8rem 16rem;
    padding: 1.75rem 0;
    position: relative;
    border-radius: 48px ;
    border-bottom: 2px solid ${props => props.theme["color-10"]};
    border-right: 2px solid ${props => props.theme["color-10"]};
    box-shadow: 0.5em 0.5em 0.5em 0.5em ${props => props.theme["color-5"]};

    h1 {
        position: absolute;
        top: -3.75rem;
        left: auto;
        width: 100%;
        text-align: center;
    }

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        font-weight: 400;
        font-size: 1.25rem;

        @media (max-width: 840px) {
            text-align: center;
            font-size: 1rem;
            padding: 1.5rem;
        }
    }
    
    section {
        padding: 1rem 3.5rem 3.5rem 3.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1.4em;
        grid-row-gap: 1.4em;

        @media (max-width: 1280px) {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 1.4em;
        }
     
        @media (max-width: 840px) {
            grid-template-columns: repeat(1, 1fr);
            grid-row-gap: 1.4em;
            padding: 1rem 1.5rem 1.5rem 1.5rem;
    
        }
    }

`