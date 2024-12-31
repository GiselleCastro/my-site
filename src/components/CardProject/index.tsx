"use client"
import { Container } from "./styles";
import { Project } from "@/data/projectData";
import Image from "next/image";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "../Modal";
import { MouseEvent } from "react";

export function CardProject({ ...props }: Project) {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleShowModal = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setShowModal(!showModal)
    }

    return (
        <>
            {showModal && <Modal handleShowModal={handleShowModal} {...props} />}
            < Container >
                <div className="preview">
                    <a href={props.url} target="_blank">
                        <AiOutlineGlobal />
                    </a>
                </div>
                <Image className="project" src={`/projects/${props.imageFolder}/desktop.png`} width={500} height={500} quality={100} alt={props.title} />

                <span>
                    {props.date.toDateString()}
                    <div>
                        <FaReact />  <SiStyledcomponents /> <SiNextdotjs />
                    </div>
                </span>

                <h3 >
                    {props.title}
                </h3>

                <p>
                    {props.description}
                </p>

                <div className="access">
                    <a href="" onClick={handleShowModal} >
                        <BsPlayCircleFill />
                        Demo
                    </a>

                    <a href={props.gitHub} target="_blank">
                        <FaGithub />
                        View Code
                    </a>
                </div>
            </Container >
        </>
    )

}