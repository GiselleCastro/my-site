import { Container } from "./styles"
import { Smokum } from "next/font/google";

const smokum = Smokum({
    weight: '400',
    subsets: ["latin"],
});

export function Logo() {
    return <Container href="#/" className={smokum.className}>
        &lt;&ne;.
    </Container>
}