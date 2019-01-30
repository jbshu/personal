import React, { Component } from "react"; 
import "./Slider.css"; 

//Volume slider
class Slider extends Component {
  render() {
    //onChange changes parent volume
    return(
      
    <div className="sliderContainer">
      <label id="sliderLabel">{this.props.name}
        <input type="range" min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.props.onChange} value={this.props.value} className="sliderMain"></input>
      </label>
    </div>
    );
  }

}

export default Slider;