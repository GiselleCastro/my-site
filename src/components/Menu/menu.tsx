import { ToggleSwitchMode } from "../ToggleSwitchMode";
import { Logo } from "../Logo";
import { ToggleSwitchLanguage } from "../ToggleSwitchLanguage";
import { LanguageType } from "../ToggleSwitchLanguage";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function Menu({ lang }: { lang: LanguageType }) {
    const info = await getDictionary(lang);

    return (
        <>
            <Logo />
            <nav>
                <ToggleSwitchMode />
                <ul>
                    {/* <li><a href="">Home</a></li> */}
                    <li><a href="#about-me">{info.header.about}</a></li>
                    <li><a href="#portfolio">{info.header.portfolio}</a></li>
                    <li><a href="#my-contacts">{info.header.contact}</a></li>
                </ul>
                <ToggleSwitchLanguage lang={lang} />
            </nav>
        </>
    )
}