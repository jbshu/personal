import React, { Component } from "react"; 
import SoundboardSquare from "./SoundboardSquare";
import "./Soundboard.css";

class Soundboard extends Component {
  render() {
    return(
      
    <div className="soundboardMain">
    <h1>A React/Node Soundboard</h1>
      <div className="header">
      <SoundboardSquare/>
      <SoundboardSquare/>
      <SoundboardSquare/>
      <SoundboardSquare/>
      </div>
    </div>
    );
  }

}

export default Soundboard;
