import React from "react"
import { Container } from "./styles"
import { kodeMono } from '@/app/layout'

export function TitleSection({ children }: { children: React.ReactNode }) {
    return <Container>
        <h1 className={kodeMono.className}>
            &lt;{children} &#47;&gt;
        </h1>
    </Container>
}