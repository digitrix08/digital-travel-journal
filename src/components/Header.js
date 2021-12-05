import React from "react";
import earth from "../images/earth.svg";
import "../styles/Header.css";

export default function Header() {
    return (
        <header className="journal-header" >
            <img src={earth} alt="Earth" className="journal-header--image" />
            <h3 className="journal-header--title" >My Travel Journal</h3>
        </header>
    )
}