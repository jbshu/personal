import React, { Component } from "react"; 
import SoundboardSquare from "./SoundboardSquare";
import "./Soundboard.css";

//Holds state for number of squares. One button adds squares, another removes
class Soundboard extends Component {
  constructor(props) {
    super(props);
    this.state= {
      numSquare: 1,
    };

    this.addSquare= this.addSquare.bind(this);
    this.removeSquare= this.removeSquare.bind(this);
  }

  addSquare(e) {
    this.setState( {numSquare: this.state.numSquare + 1} );
  }

  removeSquare(e) {
    this.setState( {numSquare: this.state.numSquare - 1} );
  }

  render() {
    var squares= [];
    var i;

    //figure out how many squares to render
    for (i= 0; i < this.state.numSquare; i++) {
      squares.push(<SoundboardSquare/>);
    }

    return(
    <div className="soundboardMain">
      <h1>A React/Node Soundboard</h1>
      <h2>
        <div id="spawn-border">
          <button id="spawn-square" onClick={this.addSquare}>Add Square</button>
        </div>
        <div id="remove-border">
          <button id="remove-square" onClick={this.removeSquare}>Remove Square</button>
        </div>
      </h2>
        <div className="header">
          {squares}
        </div>
    </div>
    );
  }

}

export default Soundboard;
