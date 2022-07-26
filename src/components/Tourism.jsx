import React from "react";
import "./Styles/Tourism.scss";
import { Link } from "react-router-dom";
import { FaMosque } from "@react-icons/all-files/fa/FaMosque";
import { GiStoneTower } from "@react-icons/all-files/gi/GiStoneTower";
import { GiAncientRuins } from "@react-icons/all-files/gi/GiAncientRuins";
import { BiChurch } from "@react-icons/all-files/bi/BiChurch";
import Header from "./Header";

function Tourism() {
    return (
        <div className="tourism-main">
            <Header />
            <div className="tourism">
                <div className="row">
                    <Link to="/turizam/islamic" className="turizam-link">
                        <div className="tourism-item">
                            <div className="turizam-iconDiv">
                                <FaMosque size={40} className="tourism-icon" />
                            </div>
                            <h1>Islamski Spomenici</h1>
                            <p>Islamski spomenici Novog Pazara</p>
                        </div>
                    </Link>
                    <Link to="/turizam/historic" className="turizam-link">
                        <div className="tourism-item">
                            <div className="turizam-iconDiv">
                                <GiStoneTower
                                    size={40}
                                    className="tourism-icon"
                                />
                            </div>
                            <h1>Historijski Spomenici</h1>
                            <p>Historijski Spomenici Novog Pazara</p>
                        </div>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/turizam/christian" className="turizam-link">
                        <div className="tourism-item">
                            <div className="turizam-iconDiv">
                                <BiChurch size={40} className="tourism-icon" />
                            </div>
                            <h1>Hriscanski Spomenici</h1>
                            <p>Hriscanski Spomenici Novog Pazara</p>
                        </div>
                    </Link>
                    <Link to="/turizam/collapsed" className="turizam-link">
                        <div className="tourism-item">
                            <div className="turizam-iconDiv">
                                <GiAncientRuins
                                    size={40}
                                    className="tourism-icon"
                                />
                            </div>
                            <h1>Sruseni Spomenici</h1>
                            <p>Sruseni Spomenici Novog Pazara</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Tourism;
