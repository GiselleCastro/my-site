'use client'
import { Background, Container } from "./styles";
import { useEffect, useState } from "react";

export function Header({ children }: { children: React.ReactNode }) {
    const [isShort, setIsShort] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 75) {
                setIsShort(true);
            } else {
                setIsShort(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <Background>
            <Container className={'box'} short={String(isShort)}>
                {children}
            </Container>
        </Background>
    )
}