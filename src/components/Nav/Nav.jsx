// import React from 'react'
import { useState } from "react";
import "./Nav.css";
import { AiOutlineMenu } from "react-icons/ai";
// import { FaRegClipboard } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
// import { Link } from "react-router-dom";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const showResponsiveNav = () =>{
    if (showNav) {
        setShowNav(false);
    }else{
        setShowNav(true);
    }
  }

  const hideNav = () =>{
    setShowNav(false);
  }

  return (
    <nav id="navbar">
        <div className="logo">
            <img src="/logo.png" alt="Logo du Restaurant Fouquet Bénin" />
        </div>
        <ul className={`navlinks-container ${showNav ? "show": ""}`}>
            <li className="navlink" onClick={hideNav}>
                <a href="#">
                    Accueil
                </a>
            </li>
            <li className="navlink" onClick={hideNav}>
                <a href="#about">
                    A Propos
                </a>
            </li>
            <li className="navlink" onClick={hideNav}>
                <a href="#review">
                    Avis
                </a>
            </li>
            <li className="navlink" onClick={hideNav}>
                <a href="#qrmenu-code">
                    QR Menu
                </a>
            </li>
            <li className="navlink" onClick={hideNav}>
                <a href="#contact">
                    Localisation
                </a>
            </li>
            <li className="contactlink" onClick={hideNav}>
                <a href="#contact">
                    Contact
                </a>
            </li>
            <li className="navlink" onClick={hideNav}>
                <a href="#gallery">
                    Galerie
                </a>
            </li>
        </ul>
        <button className="menu-btn">
            <a href="https://menu-lefouquetbj.netlify.app/" target="_blank" rel="noreferrer">
                <HiClipboardList />
            </a>
        </button>
        <button className="toggle-nav-btn" onClick={showResponsiveNav}>
            <AiOutlineMenu />
        </button>
    </nav>
  )
}

export default Nav