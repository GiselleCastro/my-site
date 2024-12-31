import { Container } from "./styles"
import { openSans } from "@/app/[lang]/layout"
import Image from "next/image"

export function Logo() {
    return <Container href="#/" className={openSans.className}>
        &lt;&ne;.
        {/* <Image src="/logo.png" quality={100} width={45} height={45} alt="" /> */}
    </Container>
}