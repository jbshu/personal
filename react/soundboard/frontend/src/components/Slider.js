import React, { Component } from "react"; 
//import "./Slider.css"; 

//Volume slider
class Slider extends Component {
  render() {
    //onChange changes parent volume
    return(
      
    <label className="sliderContainer">Volume
        <input type="range" min="0" max="1" step="0.05" onChange={this.props.onChange} value={this.props.value} className="sliderMain"></input>
    </label>
    );
  }

}

export default Slider;