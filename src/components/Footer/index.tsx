import { Container } from "./styles";
import { IconBlock } from "../IconBlock";
import { kodeMono } from "@/app/[lang]/layout";

export function Footer({ info }) {
    const currentYear = new Date().getFullYear();
    return (
        <Container>
            <div className='box'>
                <span className={kodeMono.className}>Copyright &copy; {currentYear} &lt;&ne;.{info.footer.text}<strong>Giselle Castro</strong>_</span>
                <IconBlock />
            </div>
        </Container>
    )
}