'use client'
import styled from 'styled-components'

export const Container = styled.section`
    margin-block: 8rem 3rem;
    padding-block: 1.5rem;
    position: relative;
    border-radius: 48px ;
    /* border-bottom: 2px solid ${props => props.theme["color-10"]}; */
    /* border-right: 2px solid ${props => props.theme["color-10"]}; */
    /* box-shadow: 1em 1em 1em 1em ${props => props.theme["color-5"]}; */


    min-height: calc(min(100vh - 160px - 8rem - 72px, 480px));
    align-content: center;

    h1 {
        position: absolute;
        top: -3.75rem;
        width: 100%;
        text-align: center;
    }
    
    #map{
        padding-left: 2rem;
        display: flex;
        gap: 12px;
        align-items: center;

        svg{
            width: 32px;
            height: 32px;
        }
    }

    main {
        display: flex;
        padding-top: 2.5rem;
        align-items: flex-start;
        flex-direction: row;
        padding-inline: 4rem;
        justify-content: space-evenly;

        span {
                color: ${props => props.theme["color-45"]};
                font-weight: 700;
        }
    }

    #links {
        width: 250px;

        a {
            line-height: 2.5rem;
            color: inherit;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: 0.5s;

            &:hover{
                text-decoration: underline;
                transition: 0.5s;
                color: ${props => props.theme["color-100"]};
                text-shadow: 0.05em 0.05em 0.05em ${props => props.theme["color-50"]};

                svg {
                    width: 32px;
                    height: 32px;
                 }
            }

            svg {
                width: 28px;
                height: 28px;
                object-fit: cover;
                transition: 0.5s;
            }
        }

        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
    }

    #or {
        font-size: 48px;
    }
    
    form {
        display: flex;
        flex-direction: column;
        width: 40%;
        gap: 24px;

        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 6px;

            label {
                letter-spacing: 2px;
                font-size: 0.875rem;

                font-weight: 700;
                color: ${props => props.theme["color-85"]};


                span {
                    color: ${props => props.theme["color-35"]};
                }
            }

            input {
                display: flex;
                flex-direction: row;
                border-radius: 4px;
                padding-inline: 12px;
                height: 2rem;
                border: none;
                background-color: ${props => props.theme["color-55"]}15;
                width: 100%;
            }

            textarea {
                border-radius: 4px;
                padding-inline: 12px;
                padding-block: 4px;
                height: 4rem;
                border: none;
                background-color: ${props => props.theme["color-55"]}15;
                width: 100%;

            }
        }
    }

`
export const Up = styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        padding-bottom: 32px;
        padding-left: calc(90% - 36px); 
        font-size: 24px;
        transition: 0.5s;

        color: inherit;

        &:hover{
            font-size: 32px;
            transition: 0.5s;
            cursor: pointer;
        }
    `