// "use client"
import { Container, Background } from "./styles"
import { TitleMain } from "../TitleMain"
import { IconBlock } from "../IconBlock"
import { FaAnglesDown } from "react-icons/fa6";
// import { useEffect, useRef } from "react";

export function Animation() {
    const myName = 'Giselle Castro_'

    // const containerRef = useRef(null);

    // useEffect(() => {
    //     if (containerRef.current) {
    //         const letters = containerRef.current.querySelectorAll(".letter");
    //         letters.forEach((letter, index) => {
    //             letter.animate(
    //                 [
    //                     { opacity: 0, transform: "translateY(20px)" },
    //                     { opacity: 1, transform: "translateY(0)" }
    //                 ],
    //                 {
    //                     duration: 500,
    //                     delay: index * 100,
    //                     fill: "forwards",
    //                     easing: "ease-out"
    //                 }
    //             );
    //         });
    //     }
    // }, [myName]);


    return (
        <>
            {myName.split("").map((char, index) => (
                <span key={index} className="letter" style={{ opacity: 0 }}>
                    {char}
                </span>
            ))}
        </>
    )
}