import { Container } from "./styles";
import { MouseEvent } from "react";

interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    text: string;
    children: React.ReactNode;
    handleClick?: (e: MouseEvent<HTMLElement>) => void;
}

export function Button({ type, text, handleClick, children }: ButtonProps): React.ReactNode {
    return <Container type={type} onClick={handleClick}>
        {children} {text}
    </Container>
}