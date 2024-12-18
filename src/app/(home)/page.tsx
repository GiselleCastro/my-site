import { Presentation } from "@/components/Presentation"
import { AboutMe } from "@/components/AboutMe"
import { Contact } from "@/components/Contact"
import { Projects } from "@/components/Projects"

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