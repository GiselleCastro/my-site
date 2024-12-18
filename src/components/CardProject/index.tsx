import { Container } from "./styles";
import { Project } from "@/data/projectData";
import Image from "next/image";
import { kodeMono } from "@/app/layout";
import { FaGithub } from "react-icons/fa";
import { BsPlayCircleFill } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";

export function CardProject({ ...props }: Project) {
    return <Container>
        <div className="preview">
            <a href={props.url} target="_blank">
                <AiOutlineGlobal />
            </a>
        </div>
        <Image className="project" src={props.image} width={500} height={500} quality={100} alt={props.title} />

        <span>
            {props.date.toDateString()}
            <div>
                <FaReact />  <SiStyledcomponents /> <SiNextdotjs />
            </div>
        </span>

        <h3 className={kodeMono.className}>
            {props.title}
        </h3>

        <p>
            {props.description}
        </p>

        <div className="access">
            <a href={props.demo}>
                <BsPlayCircleFill />
                Demo
            </a>

            <a href={props.gitHub} target="_blank">
                <FaGithub />
                View Code
            </a>
        </div>
    </Container>
}