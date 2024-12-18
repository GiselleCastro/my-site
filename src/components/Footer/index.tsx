import { Container } from "./styles";
import { IconBlock } from "../IconBlock";

export function Footer({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <div className='box'>
                {children}
                <IconBlock />
            </div>
        </Container>
    )
}