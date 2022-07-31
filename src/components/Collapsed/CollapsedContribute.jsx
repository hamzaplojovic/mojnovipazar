import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Styles/Contribute.scss";
import Header from "../Header";

const InputDiv = (props) => {
    return (
        <div className="input-div">
            <label htmlFor={props.id}>{props.name}</label>
            <input
                type="text"
                id={props.id}
                onChange={props.change}
                value={props.value}
            />
        </div>
    );
};

function CollapsedContribute() {
    const [heading, setHeading] = useState("");
    const [desc, setDesc] = useState("");
    const [iframe, setIframe] = useState("");
    const handleHeadingChange = (event) => {
        setHeading(event.target.value);
        console.log("value is:", event.target.value);
    };
    const handleDescChange = (event) => {
        setDesc(event.target.value);
        console.log("value is:", event.target.value);
    };
    const handleIframeChange = (event) => {
        setIframe(event.target.value);
        console.log("value is:", event.target.value);
    };

    return (
        <div className="contribute-header">
            <Header />
            <div className="contribute">
                <div className="form">
                    <InputDiv
                        id="heading"
                        name="Heading:"
                        change={handleHeadingChange}
                        value={heading}
                    />
                    <InputDiv
                        id="desc"
                        name="Description:"
                        change={handleDescChange}
                        value={desc}
                    />
                    <InputDiv
                        id="Iframe"
                        name="Link:"
                        change={handleIframeChange}
                        value={iframe}
                    />
                    <h3>
                        To get link, go to place on maps, than click "Share" and
                        then "Embed", copy HTML and paste it here.
                    </h3>
                    <button className="contribute-btn-secondary">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CollapsedContribute;
