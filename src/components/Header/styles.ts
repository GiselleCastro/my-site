"use client"
import styled from "styled-components";

export const Background = styled.div<{menumobile: string}>`
    box-shadow: inset 0px -40px 60px 20px ${props => props.theme["color-5"]};
    background-color: ${props => props.theme["color-5"]}80;
    position: fixed;
    z-index: 1;
    width: 100%;

    ${props => props.menumobile === 'true' ? `
    box-shadow: inset 0px -40px 100vh 30vw ${props.theme["color-5"]};
        background: url('background-mobile.svg') repeat;
        animation: spin 30s linear infinite;

        @keyframes spin {
        0% {
            background-position:-100% -100%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 200% 200%;
        }
    `: ''}
`

export const Container = styled.header<{short: string; menumobile: string}>`
    @media (min-width: 840px) {
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

                        text-shadow: 0.0em 0.1em 0.2em ${props => props.theme["color-0"]}
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

            #open {
                display: none;
            }

            #close {
                display: none;
            }
        }
    }

    @media (max-width: 840px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: ${props =>  props.menumobile === 'true' ? '100vh' : props.short === 'true' ? '48px' : '88px' }; 
        transition: all 0.5s ease;
        
        img {
            display: ${props =>  props.menumobile === 'true' ? 'none' : 'flex'};
        }

        nav {
            display: flex;
            flex-direction: 'row';
            gap: 36px;
            align-items: flex-start;

            ul {
                display: ${props =>  props.menumobile === 'true' ? 'flex' : 'none'};
                flex-direction: column;
                list-style: none;
                gap: 36px;

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

                        text-shadow: 0.0em 0.1em 0.2em ${props => props.theme["color-0"]}
                    }
                }
            }

            #open {
            display: ${props =>  props.menumobile === 'true' ? 'none': 'flex'};

                svg {
                    height: 1.5rem;
                    width: 1.5rem;
                }
            }

            #close {
                display: flex;
                svg {
                    height: 1.5rem;
                    width: 1.5rem;
                }
            }

            button {
                display: ${props =>  props.menumobile === 'true' ? 'none': 'flex'};
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

    }
`