import React from "react";
import ReactDOM from "react-dom";
import Soundboard from "./Soundboard";
import "./index.css";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div className="container"> 
        <Soundboard />
    </div>,
    destination
);
