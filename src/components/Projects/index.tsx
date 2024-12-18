import { Container } from "./styles"
import { TitleSection } from "../TitleSection"
import { CardProject } from "../CardProject"
import { projectData } from "@/data/projectData"


export function Projects() {
    return <div id="portfolio" className="box anchor">
        <Container >
            <TitleSection>
                Portfólio
            </TitleSection>
            <h2>
                Dê uma olhada nos meus projetos em destaque
            </h2>
            <section>
                {
                    projectData.map(project => {
                        return <CardProject key={project.title} {...project} />
                    })
                }
            </section>
        </Container>
    </div>

}