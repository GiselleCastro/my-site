import { kodeMono } from "@/app/layout";
import { Container } from "./styles";

export function TextFooter() {
    const currentYear = new Date().getFullYear()
    return (
        <Container className={kodeMono.className}>Copyright &copy; {currentYear} &lt;&ne;. Projetado e desenvolvido por <strong>Giselle Castro</strong>_</Container>
    )
}

