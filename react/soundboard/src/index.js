import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Soundboard from "./Soundboard";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Soundboard />
    </div>,
    destination
);
