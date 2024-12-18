"use client"
import styled from "styled-components";

export const Background = styled.div`
    box-shadow: 0px 0px 30px 30px ${props => props.theme["color-5"]};
    background-color: ${props => props.theme["color-5"]};
    position: fixed;
    z-index: 1;
    width: 100%;
`

export const Container = styled.header<{short: string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${props => props.short === 'true' ? '48px' : '88px'};
    transition: all 0.5s ease;

    nav {
        display: flex;
        gap: 36px;
        align-items: center;

        ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            gap: 12px;

            a {
                text-decoration: none;
                color: inherit;
                padding-inline: 12px;
                padding-block: 8px;
                border-radius: 0 12px;

                &::before {
                    content: "<";
                    color: transparent;
                }

                &::after{
                    content: " />";
                    color: transparent;
                }
                    

                &:hover{

                    &::before{
                        content: "<";
                        color: inherit;
                    }

                    &::after{
                        content: " />";
                        color: inherit;
                    }
                    
                    background-color: ${props => props.theme["color-100"]}26;
                    border-color: inherit;

                    text-shadow: 0.1em 0.1em 0.2em ${props => props.theme["color-0"]}
                }
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            width: 40px;
            height: 40px;
            border-radius: 4px;
            border: none;
            color:inherit;

            span {
                color: inherit;
            }

            &:hover {
                cursor: pointer;
                background-color: ${props => props.theme["color-100"]}26;
            }
        }
    }
`