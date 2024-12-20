'use client'
import { Background, Container } from "./styles";
import { useEffect, useState } from "react";
import { ToggleSwitchMode } from "../ToggleSwitchMode";
import { Logo } from "../Logo";
import { ToggleSwitchLanguage } from "../ToggleSwitchLanguage";
import { MdMenuOpen } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export function Header({ info }) {
    const [isShort, setIsShort] = useState<boolean>(false);

    const [isShowMenuMobile, setIsShowMenuMobile] = useState<boolean>(false);

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

    const handleClickItemMenu = () => {
        setIsShowMenuMobile(false)
    }

    const handleClickOpenMenu = () => {
        setIsShowMenuMobile(true)
    }

    return (
        <Background menumobile={String(isShowMenuMobile)}>
            <Container className={'box'} short={String(isShort)} menumobile={String(isShowMenuMobile)}>
                <Logo />
                <nav>
                    <ToggleSwitchMode />
                    <ul>
                        <li><a href="#about-me" onClick={handleClickItemMenu}>{info.header.about}</a></li>
                        <li><a href="#portfolio" onClick={handleClickItemMenu}>{info.header.portfolio}</a></li>
                        <li><a href="#my-contacts" onClick={handleClickItemMenu}>{info.header.contact}</a></li>
                    </ul>
                    {isShowMenuMobile && <button id="close" onClick={handleClickItemMenu}><GrClose /></button>}
                    <ToggleSwitchLanguage />
                    <button id="open" onClick={handleClickOpenMenu}><MdMenuOpen /></button>
                </nav>
            </Container>
        </Background>
    )
}