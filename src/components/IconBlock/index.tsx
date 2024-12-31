'use client'
import { VscMail } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MouseEvent, useState, useEffect } from "react";
import { Container } from "./styles";

export function IconBlock() {
    const myEmail = "giselle@fisica.ufc.br"
    const [showMessageTextCopied, setShowMessageTextCopied] = useState<boolean>(false)

    const handlerClickCopyEmail = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        navigator.clipboard.writeText(myEmail)
        setShowMessageTextCopied(true)
    }

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showMessageTextCopied) {
            timer = setTimeout(() => {
                setShowMessageTextCopied(false);
            }, 1500);
        }

        return () => clearTimeout(timer);
    }, [showMessageTextCopied]);

    return <>
        <Container href="https://wa.me/5585989368789" aria-label="Contato via Whatsapp">
            <AiOutlineWhatsApp size={'18px'} />
        </Container>
        <Container href='' aria-label="Copiar e-mail de contato" onClick={handlerClickCopyEmail}>
            <VscMail size={'22px'} />
            {showMessageTextCopied && <div id="message">Copiado!</div>}
        </Container>
        <Container href="https://github.com/GiselleCastro" aria-label="Acessar repositório no GitHub" target="_blank">
            <VscGithub size={'17px'} />
        </Container>
        <Container href="https://www.linkedin.com/in/gisellesc/" aria-label="Acessar LinkedIn" target="_blank">
            <AiOutlineLinkedin size={'19px'} />
        </Container>
    </>
}