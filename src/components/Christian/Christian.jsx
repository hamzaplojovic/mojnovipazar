import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header";
import "../Styles/Tourism.scss";

function Christian() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://mkxbdw.deta.dev/christian")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);
    return (
        <div className="turizam-page">
            <Header />
            <div className="turizam-page-rows">
                {data.map((item) => {
                    return (
                        <div className="turizam-page-item">
                            <h1>{item.heading}</h1>
                            <p>{item.paragraph}</p>
                            <iframe
                                src={item.iframe}
                                frameborder="0"
                                loading="lazy"
                            ></iframe>
                        </div>
                    );
                })}
                <a
                    href="/turizam/christian/contribute"
                    className="contribute-link"
                >
                    <button className="contribute-btn">Contribute</button>
                </a>
            </div>
        </div>
    );
}

export default Christian;
