import React, { Component } from "react";

class SoundboardSquare extends Component {
  constructor(props) {
    super(props);

    this.state= {
      file: "",
      filename: ""
    }

    this.uploadSound= this.uploadSound.bind(this);
  }

  uploadSound(e) {
    this.setState({file: e.target.value});
  }

  playSound() {
    var audio= new Audio(filename);
    audio.play();
  }

  render() {
    return (
      <div class="soundboardSquareMain">
        <input type="file" onChange={this.uploadSound} />
        <button onclick="playSound()">Play Sound</button>
      </div>
    );
  }
};

export default SoundboardSquare;
