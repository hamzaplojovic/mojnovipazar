import React from "react";
import "./Styles/Home.scss";
import { Link } from "react-router-dom";
import { IoNewspaper } from "@react-icons/all-files/io5/IoNewspaper";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";

function Home() {
    return (
        <div className="home">
            <Link to="/vesti" className="home-link">
                <div className="section">
                    <div className="iconDiv">
                        <IoNewspaper size={40} className="icon" />
                    </div>
                    <div className="text">
                        <h1>Vesti</h1>
                        <p>Vesti svih portala Sandzaka na jednom mestu.</p>
                    </div>
                </div>
            </Link>
            <a href="turizam" className="home-link">
                <div className="section">
                    <div className="iconDiv">
                        <FaPaperPlane size={40} className="icon" />
                    </div>
                    <div className="text">
                        <h1>Turizam</h1>
                        <p>Najvaznije znamenitosti Novog Pazara</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Home;
