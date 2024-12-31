//"use client"
import { Container, Up } from "./styles"
import { TitleSection } from "../TitleSection"
import { VscMail } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { PiMapPinLine } from "react-icons/pi";
// import { Button } from "../Button";
// import { FiSend } from "react-icons/fi";
import { FaAnglesUp } from "react-icons/fa6";

export function Contact() {
    const myEmail = "giselle@fisica.ufc.br"

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
                        <a href="https://wa.me/5585989368789">
                            <AiOutlineWhatsApp size={'18px'} /> +55 (85) 98936-8789
                        </a>
                        <a href={`malito:${myEmail}`}>
                            <VscMail size={'22px'} /> {myEmail}
                        </a>
                        {/* {showMessageTextCopied && <div id="message">Copiado!</div>} */}
                        <a href="https://github.com/GiselleCastro" target="_blank">
                            <VscGithub size={'17px'} /> /GiselleCastro
                        </a>
                        <a href="https://www.linkedin.com/in/gisellesc/" target="_blank">
                            <AiOutlineLinkedin size={'19px'} /> /in/gisellesc/
                        </a>
                    </div>
                    {/* <form action="" method="post">
                        <div>
                            <label htmlFor="name"><span>let</span> name =</label>
                            <input id="name" name="name" type="text" required placeholder="// your name" />
                        </div>

                        <div>
                            <label htmlFor="email"><span>let</span> email = </label>
                            <input id="email" name="email" type="email" required placeholder="// your@mail.com" />
                        </div>

                        <div>
                            <label htmlFor="message"><span>let</span> mensagem  = </label>
                            <textarea id="message" name="message" required placeholder="// your message" />
                        </div>
                        <Button type="submit" text="Enviar Mensagem" >
                            <FiSend />
                        </Button>
                    </form> */}
                </main>
            </Container>
            <Up id="up" href="#/">
                <FaAnglesUp />
            </Up>
        </div>
    )
}