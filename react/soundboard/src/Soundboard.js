import React, { Component } from "react"; 
import SoundboardSquare from "./SoundboardSquare";

class Soundboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="soundboardMain">
      <div className="header">
      <SoundboardSquare/>
      </div>
    </div>
    );
  }

}

export default Soundboard;
