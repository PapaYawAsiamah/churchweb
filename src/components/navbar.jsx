"use client";
import React from "react";

import { useState } from "react";
import { useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import "../styles/navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <a className="container" href="/">
        <img src="/logo.jpg" alt="logo" className="logo" />
        <h3>TOPC</h3>
      </a>

      <nav ref={navRef}>
        <a href="/" onClick={showNavbar}>Home</a>
        <a href="/About" onClick={showNavbar}>About</a>
        <a href="/#footer" onClick={showNavbar}>Contact</a>
        <a href="/#location"  onClick={showNavbar} >Location</a>
        <a href="/Prayer" onClick={showNavbar}>Prayer</a>
        <a href="/#Ministries" onClick={showNavbar}>Ministries</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <ListIcon sx={{fontSize:"larger"}}/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
      <MenuIcon sx={{fontSize:"larger"}}/>
      </button>
    </header>
  );
};
export default Navbar;
