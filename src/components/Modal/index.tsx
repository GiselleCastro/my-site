"use client"
import { Container, Box } from "./styles";
import { GrClose } from "react-icons/gr";
import { MouseEvent, useState } from "react";
import { Project } from "@/data/projectData";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { Button } from "../Button";
import { CiMobile3 } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";
import { GiInspiration } from "react-icons/gi";
interface ModalProps extends Project {
    handleShowModal: (e: MouseEvent<HTMLElement>) => void;
}


export function Modal({ handleShowModal, ...props }: ModalProps) {
    const [isMobileVersion, setIsMobileVersion] = useState<boolean>(false)

    const switchVersion = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setIsMobileVersion(!isMobileVersion)
    }

    return (<Container>
        <Box mobile={String(isMobileVersion)}>
            <button id="closeModal" onClick={handleShowModal}>
                <GrClose />
            </button>
            <div id="titleModal">
                {props.title}
                <div>
                    &bull;
                </div>
                <div>
                    <FaReact />  <SiStyledcomponents /> <SiNextdotjs />
                </div>
            </div>

            <article>

                <main>

                    {!isMobileVersion && <Image className="project" src={`/projects/${props.imageFolder}/desktop.gif`} width={400} height={300} quality={100} alt={props.title} />}

                    {isMobileVersion && <Image className="project" src={`/projects/${props.imageFolder}/mobile.gif`} width={200} height={400} quality={100} alt={props.title} />}
                </main>
                <aside>
                    <p>
                        {props.description}
                    </p>
                    {!isMobileVersion && <Button type='button' handleClick={switchVersion} text={'Versão mobile'}>
                        {!isMobileVersion && (<CiMobile3 />)}
                    </Button>}
                    {isMobileVersion && <Button type='button' handleClick={switchVersion} text={'Versão desktop'}>
                        {isMobileVersion && <IoIosDesktop />}
                    </Button>}
                </aside>
            </article>
            <div id="optionList">
                <a href={props.url} target="_blank">
                    <AiOutlineGlobal />
                    Acessar online
                </a>

                {props?.figma && <a href={props.figma} target="_blank">
                    <FaFigma />
                    Figma do Projeto
                </a>}

                {props?.inspiration && <a href={props.inspiration} target="_blank">
                    <GiInspiration />
                    Inspiração
                </a>}

                <a href={props.gitHub} target="_blank">
                    <FaGithub />
                    View Code
                </a>
            </div>
        </Box>
    </Container >
    )
}