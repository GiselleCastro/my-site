'use client'
import { VscMail } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MouseEvent } from "react";
import { Container } from "./styles";

export function IconBlock() {
    const myEmail = "giselle@fisica.ufc.br"

    const handlerClickCopyEmail = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        navigator.clipboard.writeText(myEmail)
    }

    return <>
        <Container href="">
            <AiOutlineWhatsApp size={'18px'} />
        </Container>
        <Container href='' onClick={handlerClickCopyEmail}>
            <VscMail size={'22px'} />
        </Container>
        <Container href="https://github.com/GiselleCastro" target="_blank">
            <VscGithub size={'17px'} />
        </Container>
        <Container href="https://www.linkedin.com/in/gisellesc/" target="_blank">
            <AiOutlineLinkedin size={'19px'} />
        </Container>
    </>
}