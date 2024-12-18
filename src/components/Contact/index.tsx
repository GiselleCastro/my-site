import { Container, Up } from "./styles"
import { TitleSection } from "../TitleSection"
import { VscMail } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { PiMapPinLine } from "react-icons/pi";
import { kodeMono } from "@/app/layout";
import { Button } from "../Button";
import { FiSend } from "react-icons/fi";
import { FaAnglesUp } from "react-icons/fa6";

export function Contact() {
    return (
        <div id="my-contacts" className="box anchor">
            <Container >
                <TitleSection>
                    Contatos
                </TitleSection>
                <span id='map'>
                    <PiMapPinLine /> Forteleza, Brazil
                </span>
                <main>
                    <div id='links'>
                        <a href="">
                            <AiOutlineWhatsApp size={'18px'} /> +55 (85) 98936-8789
                        </a>
                        <a href='' >
                            <VscMail size={'22px'} /> giselle@fisica.ufc.br
                        </a>
                        <a href="https://github.com/GiselleCastro" target="_blank">
                            <VscGithub size={'17px'} /> /GiselleCastro
                        </a>
                        <a href="https://www.linkedin.com/in/gisellesc/" target="_blank">
                            <AiOutlineLinkedin size={'19px'} /> /in/gisellesc/
                        </a>
                    </div>
                    <span>||</span>
                    <form action="">
                        <div>
                            <label htmlFor=""><span>let</span> nome =</label>
                            <input type="text" placeholder="// your name" className={kodeMono.className} />
                        </div>

                        <div>
                            <label htmlFor=""><span>let</span> email = </label>
                            <input type="email" className={kodeMono.className} placeholder="// your@mail.com" />
                        </div>

                        <div>
                            <label htmlFor=""><span>let</span> mensagem  = </label>
                            <textarea className={kodeMono.className} placeholder="// your message" />
                        </div>
                        <Button type="submit" text=" Enviar Mensagem" >
                            <FiSend />
                        </Button>
                    </form>
                </main>
            </Container>
            <Up id="up" href="#top">
                <FaAnglesUp />
            </Up>
        </div>
    )
}