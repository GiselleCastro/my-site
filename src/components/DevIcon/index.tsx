import Image from "next/image"
import { Container } from "./styles"

export function DevIcon({ src, name }: { src: string; name: string; }) {
    return <Container>
        <Image className="icon" src={src} width={24} height={24} quality={70} alt={name} />{name}
    </Container>
}