import React, { useState } from "react";

const defaultStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "1.5rem",
    margin: "0 0.5rem",
    padding: "0.5rem 1rem",
    transition: "background-color 2s ease",
};

export default function NavButtons(props: { style?: React.CSSProperties, title: string, url: string }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        ...defaultStyle,
        ...props.style,
        backgroundColor: isHovered ? "#333" : defaultStyle.backgroundColor,
    };

    return (
        <div style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href={props.url}>
                <button style={buttonStyle}>
                    {props.title}
                </button>
            </a>
        </div>
    );
}
