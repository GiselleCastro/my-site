"use client"
import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme["color-5"]}cc;
    z-index: 1;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div<{mobile: string}>`
    position: absolute;
    background-color: ${props => props.theme["color-15"]};
    border: 1px solid ${props => props.theme["color-50"]};
    width: ${props => props.mobile === "true" ? '32rem' : '42rem'};
    aspect-ratio:${props => props.mobile === "true"  ? '1/1' : '1/.65'};
    border-radius: 12px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transition: 0.25s;

    #titleModal {
        display: flex;
        flex-direction: row;
        font-size: 1.5rem;
        font-weight: 700;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    #closeModal {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 6px;
        line-height: 0;
        border-radius: 50%;
        border: none;
        background-color: ${props => props.theme["color-15"]}33;
        transition: 0.5s;

        svg {
            width: 24px;
            height: 24px;
            color: ${props => props.theme["color-95"]}80;
        }

        &:hover {
            background-color: ${props => props.theme["color-55"]}33;
            transition: 0.5s;
            cursor: pointer;
        }
    }

    padding: 1.125rem;
    
    #optionList {
        display: flex;
        justify-content: space-between;
        font-size: 0.825rem;
        
        a {
            line-height: 1.5rem;
            color: inherit;
            display: flex;
            align-items: center;
            gap: 12px;

            &:hover {
                text-decoration: underline;

                svg {
                    width: 22px;
                    height: 22px;
                 }
            }

            svg {
                width: 18px;
                height: 18px;
                object-fit: cover;
                transition: 0.2s;
            }
        }
    }

    article {
        display: grid;
        grid-template-columns: ${props => props.mobile === "true" ? '3fr 4fr' : '2fr 1fr'};
        gap: 1rem;
        padding-block: 1rem;

        main {
            height: 100%;
            width: 100%;
            height: ${props => props.mobile === "true" ? '370px' : '296px'};
            img {
                height: 100%;
                object-fit: cover;
            }
        }
        
        aside {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100%;
            gap: 24px;
            
            p {
                font-size: 0.75rem;
            }
        }
        
        button {
            font-size: 0.875rem;
        }
    }

@media (max-width: 840px) {
    width: 20rem;
    height: 90vh;
    aspect-ratio: auto;

    overflow-y: scroll;

    #titleModal {
        padding-top: 24px;
        flex-direction: column;
        gap: 0rem;
    }
    #optionList{
        flex-direction: column;
        gap:10px;
    }

    article{
        grid-template-columns: 1fr;

        main {
            height: auto;
            img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }
        
        aside {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100%;
            gap: 24px;
            
            p {
                font-size: 0.75rem;
            }
        }
    }
}
`
