import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {HashLink as Llink} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handlClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const scrollNav = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", scrollNav);
  return (
    <div className={color ? "header-scrol" : "header"}>
      <Link to="/">
        <h1>Cyber-Wiz</h1>
      </Link>
      <ul className={click ? "nav-menu" : "nav-menu active"}>
      <li>
          <HashLink to="#Home">Home</HashLink>
        </li>
        <li>
          <HashLink to="#project">Projects</HashLink>
        </li>
        <li>
          <HashLink to="#ourteam">Our Team</HashLink>
        </li>
        <li>
          <HashLink to="#contact">Contact</HashLink>
        </li>
      </ul>

      <div className="menu-list" onClick={handlClick}>
        {click ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
