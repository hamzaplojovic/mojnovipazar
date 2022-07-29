import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Styles/News.scss";
import Header from "./Header";

function News() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://mkxbdw.deta.dev")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    return (
        <div className="news-main">
            <Header />
            <div className="news">
                {data.map((item) => {
                    return (
                        <div className="item">
                            <h1>{item.title}</h1>
                            <a href={item.url} className="item-link">
                                <img src={item.img} alt="" />
                            </a>

                            <h6>{item.date.slice(0, 10)}</h6>
                            <p>{item.short_summary}......</p>
                            <h5>Views: {item.views}</h5>
                            <h5>Author: {item.domain}</h5>
                            <a className="button" href={item.url}>
                                Read More
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default News;
