import { Presentation } from "@/components/Presentation"
import { AboutMe } from "@/components/AboutMe"
import { Contact } from "@/components/Contact"
import { Projects } from "@/components/Projects"
import { Modal } from "@/components/Modal"
import { Animation } from "@/components/Presentation/animation"

export default function Home() {

    return (
        <div>
            <Presentation>
                <Animation />
            </Presentation>
            <AboutMe />
            <Modal />
            <Projects />
            <Contact />
        </div>
    )
}