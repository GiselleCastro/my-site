import { Container, Background, BackgroundSecondary } from "./styles"
import { TitleMain } from "../TitleMain"
import { IconBlock } from "../IconBlock"
import { FaAnglesDown } from "react-icons/fa6";

export function Presentation({ children }: { children: React.ReactNode }) {
    return (
        <Background id="/">
            <BackgroundSecondary>
                <div className="box">
                    <Container >
                        <aside>
                            <IconBlock />
                            <a id="down" href="#about-me" >
                                <FaAnglesDown />
                            </a>
                        </aside>
                        <section>
                            <div >
                                {children}
                                <TitleMain>
                                    Desenvolvedora Full Stack
                                </TitleMain>
                            </div>
                            <span id="question">
                                [Site em construção]
                                {/* Como posso ajudar a você impulsionar o seu negócio?_ */}
                            </span>
                        </section>
                    </Container>
                </div>
            </BackgroundSecondary>
        </Background>

    )
}