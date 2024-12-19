import { Presentation } from "@/components/Presentation"
import { AboutMe } from "@/components/AboutMe"
import { Contact } from "@/components/Contact"
import { Projects } from "@/components/Projects"
// import { LanguageType } from "@/components/ToggleSwitchLanguage"
//{ params }: { params: Promise<{ lang: LanguageType }> }
export default function Home() {

    return (
        <div>
            <Presentation />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    )
}