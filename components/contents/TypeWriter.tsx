import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
    const [text] = useTypewriter({
        words: ["Full-Stack Developer", "Typescript", "Docker"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <h1 className="mb-2 font-bold text-xl text-blue-700">
            <Cursor />
            {text}
        </h1>
    );
};

export default TypeWriter;
