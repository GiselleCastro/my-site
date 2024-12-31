import { Container } from "./styles";
import { IconBlock } from "../IconBlock";

export function Footer({ info }) {
    const currentYear = new Date().getFullYear();
    return (
        <Container>
            <div className='box'>
                <span >Copyright &copy; {currentYear} &lt;&ne;.{info.footer.text}<strong>Giselle Castro</strong>_</span>
                <IconBlock />
            </div>
        </Container>
    )
}