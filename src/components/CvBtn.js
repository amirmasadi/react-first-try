import React from 'react'

const aStyle ={
    fontSize: "1.3rem",
    backgroundColor: "var(--gray-1)",
    padding: "0.5em 1.7em",
    border: "2px solid var(--gray-1)",
    borderRadius: "8px",
    display: "inline-block",
    color: "var(--deep-dark)",
    transition: "all 0.3s ease",
}

export default function CvBtn() {
    return (
        <a href="https://jobinja.ir/user/amirasadi/download" style={aStyle}>دانلود رزومه</a>
    )
}
