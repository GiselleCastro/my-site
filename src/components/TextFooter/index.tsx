import { kodeMono } from "@/app/[lang]/layout";
import { Container } from "./styles";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LanguageType } from "../ToggleSwitchLanguage";

export async function TextFooter({ lang }: { lang: LanguageType }) {
    const currentYear = new Date().getFullYear();

    const info = await getDictionary(lang);

    return (
        <Container className={kodeMono.className}>Copyright &copy; {currentYear} &lt;&ne;.{info.footer.text}<strong>Giselle Castro</strong>_</Container>
    )
}

