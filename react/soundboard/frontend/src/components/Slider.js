import React, { Component } from "react"; 
//import "./Slider.css";

class Slider extends Component {
  render() {
    return(
      
    <label className="sliderContainer">Volume
        <input type="range" min="0" max="1" step="0.05" onChange={this.props.onChange} value={this.props.value} className="sliderMain"></input>
    </label>
    );
  }

}

export default Slider;