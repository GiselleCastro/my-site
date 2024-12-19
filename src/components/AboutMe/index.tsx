import { Container } from "./styles"
import { TitleSection } from "../TitleSection"
import Image from "next/image"
import { DevIcon } from "../DevIcon"
import { iconData } from "../../data/iconData"
import { Button } from "../Button"
// import { BsCloudDownload } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";

export async function AboutMe() {

    // console.log((await params))
    // console.log(getDictionary((await params)).lang)

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
                                Atualmente fazendo estágio na área de desenvolvimento na Serget Mobilidade Viária, atuando principalmente na manutenção e desenvolvimento de novas ferramentas, e funcionalidades para usuários dos sistemas públicos e privados da empresa.
                            </p>
                            <p>
                                Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projetos sempre inovadores para mim com muito amor e dedicação.
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
                            <Button text="Minha jornada" >
                                <GiJourney />
                            </Button>
                        </div>

                    </article>
                </div>
            </Container>
        </div>
    )
}