import { Presentation } from "@/components/Presentation"
import { AboutMe } from "@/components/AboutMe"
import { Contact } from "@/components/Contact"
import { Portfolio } from "@/components/Portfolio"
import { Animation } from "@/components/Presentation/animation"

export default function Home() {

    return (
        <div>
            <Presentation>
                <Animation />
            </Presentation>
            <AboutMe />
            <Portfolio />
            <Contact />
        </div>
    )
}