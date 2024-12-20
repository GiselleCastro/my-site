"use client"
import { Container, Box } from "./styles";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export function Modal() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && <Container>
                <Box>
                    <button id="closeModal" onClick={handleShowModal}>
                        <GrClose />
                    </button>
                    {/* gfghjklhdkmkkknknbjnml */}
                </Box>
            </Container>}
        </>
    )
}