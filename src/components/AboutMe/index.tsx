import { Container } from "./styles"
import { TitleSection } from "../TitleSection"
import Image from "next/image"
import { DevIcon } from "../DevIcon"
import { iconData } from "../../data/iconData"
import { Button } from "../Button"
import { GiJourney } from "react-icons/gi";

export async function AboutMe() {
    return (
        <div id="about-me" className="box anchor">
            <Container >
                <TitleSection>
                    Sobre mim
                </TitleSection>
                <div>
                    <article>
                        <div>
                            <p>
                                Sou Desenvolvedora Full Stack com paixão por tecnologia, aprendizado contínuo e inovação. Com formação em Física e doutorado em andamento, desenvolvi um olhar atento para detalhes, curiosidade para explorar novos conceitos e facilidade para resolver desafios de forma criativa.
                            </p>
                            <p>
                                Trabalho com tecnologias como TypeScript, React, Node.js e ferramentas na nuvem, sempre buscando boas práticas de desenvolvimento, código claro e eficiente. Gosto de colaborar em equipe, compartilhar conhecimento e aprender com cada experiência.
                            </p>
                            <p>
                                Atualmente, estou cursando um MBA em Desenvolvimento Full Stack, ampliando minha visão sobre tecnologia e suas aplicações.
                            </p>
                            <p>
                                Algumas tecnologias que tenho trabalhado recentemente:
                            </p>
                            <section>
                                {iconData.map(icon => {
                                    return <DevIcon key={icon.name} src={icon.src} name={icon.name} />
                                })}
                            </section>
                        </div>
                        <div id="curriculum">
                            <Image className="img" src='/GSC.jpeg' width={400} height={400} quality={100} alt="eu" />
                            {/* <Button text="Baixar currículo" >
                                <BsCloudDownload />
                            </Button> */}
                            {/* <Button text="Minha jornada" aria-label="Acessar o histórico de minha jornada">
                                <GiJourney />
                            </Button> */}
                        </div>

                    </article>
                </div>
            </Container>
        </div>
    )
}