import { Container } from "./styles"
import { kodeMono } from "@/app/[lang]/layout";

export function TitleMain({ children }: { children: React.ReactNode }) {
    return <Container className={kodeMono.className}>
        {children}
    </Container >
}