import React, { useState } from "react";
//
const defaultStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "2.5rem",

    marginTop: "auto", 
    marginBottom: "auto",
    padding: "2vh",
    
    borderRadius: "20px",
    transition: "background-color 0.5s ease",
};
const globalStyle = {
    marginTop: "auto", 
    marginBottom: "auto",
    
    height: "auto",
    fontSize: "1.5rem",
    margin: "0 0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
}
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
        backgroundColor: isHovered ? "rgb(27, 1, 1)" : defaultStyle.backgroundColor,
    };

    return (
        <div style={globalStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href={props.url}>
                <button style={buttonStyle}>
                    {props.title}
                </button>
            </a>
        </div>
    );
}
