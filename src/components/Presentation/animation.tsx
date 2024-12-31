"use client"
import { useEffect, useRef } from "react";

export function Animation() {
    const myName = 'Giselle Castro_'

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const letters = containerRef.current.querySelectorAll(".letter");
            letters.forEach((letter, index) => {
                letter.animate(
                    [
                        { opacity: 0, transform: "translateY(20px)" },
                        { opacity: 0, transform: "translateY(0)" }
                    ],
                    {
                        duration: 500,
                        delay: index * 100,
                        fill: "forwards",
                        easing: "ease-out"
                    }
                );
            });
        }
    }, [myName]);


    return (
        <div ref={containerRef} style={{ display: "flex", overflow: "hidden" }}>Giselle Castro
            {myName.split("").map((char, index) => (
                <span key={index} className="letter" style={{ opacity: 0 }}>
                    {char}
                </span>
            ))}
        </div>
    )
}