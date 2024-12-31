import { Presentation } from "@/components/Presentation"
import { AboutMe } from "@/components/AboutMe"
import { Contact } from "@/components/Contact"
import { Portfolio } from "@/components/Portfolio"

export default function Home() {

    return (
        <div>
            <Presentation>
                Giselle Castro
            </Presentation>
            <AboutMe />
            <Portfolio />
            <Contact />
        </div>
    )
}