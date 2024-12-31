import React from "react"
import { Container } from "./styles"

export function TitleSection({ children }: { children: React.ReactNode }) {
    return <Container>
        <h1 >
            &lt;{children} &#47;&gt;
        </h1>
    </Container>
}