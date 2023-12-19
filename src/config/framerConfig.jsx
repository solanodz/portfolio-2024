// framerConfig.jsx
import { useEffect, useState } from 'react';

export const useCursorMotion = () => {
    const [cursorPosition, setCursorPosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: cursorPosition.x - 8,
            y: cursorPosition.y - 8,
            backgroundColor: "white",
            mixBlendMode: "difference"
        },
        text: {
            height: 90,
            width: 90,
            x: cursorPosition.x - 45,
            y: cursorPosition.y - 45,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    };

    return { cursorPosition, cursorVariant, textEnter, textLeave, variants };
};
