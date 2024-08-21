import React, { useEffect, useState } from "react";

const TypingEffect: React.FC = () => {
    const texts = [
        '.NET Full Stack Developer',
        'Frontend Development',
        'Backend Development',
        'ASP.NET Development',
    ];

    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setDisplayText((prev) => texts[textIndex].substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
        }, 100);

        if (charIndex === texts[textIndex].length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                setCharIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, 1500);
        }

        return () => clearInterval(typingInterval);
    }, [charIndex, textIndex]);

    return (
        <>
            <h1>Hi,</h1>
            <h1>It's Waleed Ali Sarwar</h1>
            <div className="typing-container">
                <span className="typing-text">{displayText}</span>
                <span className="cursor">|</span>
            </div>
        </>
    );
};

export default TypingEffect;