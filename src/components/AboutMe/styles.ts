'use client'
import styled from 'styled-components'

export const Container = styled.main`
    margin-block: 8rem 16rem;
    padding: 3rem 0;
    position: relative;
    border-radius: 0 0;
    /* border-top: 4px solid ${props => props.theme["color-40"]}26; */
    border-bottom: 4px solid ${props => props.theme["color-40"]}26;

    min-height: calc(min(100vh - 160px - 4rem, 1080px));
    
    display: flex;
    align-items:center;

    h1 {
        position: absolute;
        top: -3.75rem;
        width: 100%;
        text-align: center;
    }

    section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap; 
        padding-block: 1.5rem;
    }

    article {
        display: flex;
        align-items: flex-start;
        min-height: 450px;
        padding-inline: 4rem;
        gap: 2.5rem;

        p {          
            line-height: 150%;
        }

        p + p {
            padding-block: 0.75rem;
        }

        .img {
            min-width: 270px;
            max-width: 270px;
            min-height: 270px;
            max-height: 270px;
            object-fit: cover;
            border-radius: 50%;
        }

        #curriculum {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 48px;

            button {
                padding-inline: 3rem;
            }
        }

}

@media (max-width: 840px) {
    padding: 0.5rem 0;

    article{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        min-height: 450px;
        padding-inline: 1rem;
        gap: 1.5rem;

        p {
            text-align: center;
        }

        #curriculum {
            gap: 24px;
        }

        section {
            padding-block: 0.75rem;
        }

        .img {
            min-width: 200px;
            max-width: 200px;
            min-height: 200px;
            max-height: 200px;
            object-fit: cover;
            border-radius: 50%;
        }

    }
}

`