import React, { Component } from "react";

class SoundboardSquare extends Component {
  constructor(props) {
    super(props);

    this.state= {
      file: "",
      filename: ""
    }

    this.uploadSound= this.uploadSound.bind(this);
    this.playSound= this.playSound.bind(this);
  }

  uploadSound(e) {
    this.setState({file: e.target.value});
    e.preventDefault(); 
  }

  playSound() {
    var audio= new Audio(this.state.filename);
    audio.play();
  }

  render() {
    return (
      <div className="soundboardSquareMain">
        <input type="file" onChange={this.uploadSound} accept="audio"/>
        <button onClick={this.playSound}>Play Sound</button>
      </div>
    );
  }
};

export default SoundboardSquare;
