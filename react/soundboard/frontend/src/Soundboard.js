import React, { Component } from "react"; 
import SoundboardSquare from "./SoundboardSquare";
import "./Soundboard.css";

class Soundboard extends Component {
  //TODO: add button for dynamically spawning more squares
  render() {
    return(
      
    <div className="soundboardMain">
      <h1>A React/Node Soundboard</h1>
        <div className="header">
          <SoundboardSquare className="square"/>
          <SoundboardSquare className="square"/>
          <SoundboardSquare className="square"/>
          <SoundboardSquare className="square"/>
        </div>
    </div>
    );
  }

}

export default Soundboard;
