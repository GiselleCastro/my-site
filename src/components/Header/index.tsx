'use client'
import { Background, Container } from "./styles";
import { ToggleSwitchMode } from "../ToggleSwitchMode";
import { Logo } from "../Logo";
import { useEffect, useState } from "react";

export function Header() {
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
                <Logo />
                <nav>
                    <ToggleSwitchMode />
                    <ul>
                        {/* <li><a href="">Home</a></li> */}
                        <li><a href="#about-me">Sobre mim</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                        <li><a href="#my-contacts">Contato</a></li>
                    </ul>
                    <button>
                        <span>
                            PT
                        </span>
                    </button>
                </nav>
            </Container>
        </Background>
    )
}