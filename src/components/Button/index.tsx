import { kodeMono } from "@/app/layout";
import { Container } from "./styles";

interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    text: string;
    children: React.ReactNode;
}

export function Button({ type, text, children }: ButtonProps): React.ReactNode {
    return <Container type={type} className={kodeMono.className}>
        {children} {text}
    </Container>
}