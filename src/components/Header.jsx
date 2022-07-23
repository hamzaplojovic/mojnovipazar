import React from "react";
import "./Styles/Header.css";
import { ImHome } from "@react-icons/all-files/im/ImHome";
import { IoNewspaper } from "@react-icons/all-files/io5/IoNewspaper";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <Link to="/" className="link">
                <div className="iconDiv">
                    <ImHome size={40} className="icon" />
                </div>
            </Link>
            <Link to="vesti" className="link">
                <div className="iconDiv">
                    <IoNewspaper size={40} className="icon" />
                </div>
            </Link>
            <a href="https://turizam.herokuapp.com" className="link">
                <div className="iconDiv">
                    <FaPaperPlane size={40} className="icon" />
                </div>
            </a>
        </nav>
    );
}

export default Header;
