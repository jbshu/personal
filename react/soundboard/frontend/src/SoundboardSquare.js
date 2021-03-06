import React, { Component } from "react";
import Slider from './components/Slider';
import "./SoundboardSquare.css";
import 'react-rangeslider/lib/index.css';

class SoundboardSquare extends Component {
  constructor(props) {
		super(props);

		this.state= {
      soundURL: '',
      fileName: '',
      volume: 0.5,
      speed: 1,
		};

    this.handleUploadSound= this.handleUploadSound.bind(this);
    this.volumeChange= this.volumeChange.bind(this);
    this.speedChange= this.speedChange.bind(this);
    this.playSound= this.playSound.bind(this);
	}

	handleUploadSound(e) {
		e.preventDefault();

		const data= new FormData();
		data.append('file', this.uploadInput.files[0]);
		data.append('filename', this.fileName.value);

    this.setState( {fileName:this.fileName.value} );

    //send data to node backend, save url in state
		fetch('http://localhost:8000/upload', {
			method: 'POST',
			body: data,
		}).then((response) => {
			response.json().then((body) => {
				this.setState({ soundURL: `http://localhost:8000/${body.file}` });
			});
    });
    
    e.preventDefault();
	}

  //used by Slider
  volumeChange(e) {
    this.setState( {volume: parseFloat(e.target.value)} );
  }

  //used by Slider
  speedChange(e) {
    this.setState( {speed: parseFloat(e.target.value)} );
  }

  playSound() {
    var audio= new Audio(this.state.soundURL);
    audio.volume= this.state.volume;
    audio.playbackRate= this.state.speed;
    audio.play();
  }

  render() {
    let chooser;

    //Only render upload dialogue if the square does not have a current sound
    //TODO: add support for swapping sounds
    if (this.state.fileName !== '') {
      chooser= <div id="sound-name-display-border">
                  <label id="sound-name-display">{this.state.fileName}</label>
                </div>
    }
    else {
      chooser= <div className= "chooser">
                  <div id="choose-sound-border">
                    <label id="choose-sound-label" for="choose-sound">Choose Sound</label>
                      <input id="choose-sound" type="file" ref= {(ref) => { this.uploadInput= ref; }}/>
                  </div>
                  <div id="sound-name-border">
                    <input id= "sound-name" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Sound name"/>
                  </div>
                  <div id="upload-border">
                    <button id="upload">Upload</button>
                  </div>
                </div>;  
    }

    return (
      <div className="squareMain">
          <form className="squareForm" onSubmit= {this.handleUploadSound}>
          {chooser}
            <div className="controls-container">
              <table id="slider-container">
                <tr>
                  <th>Volume</th>
                  <Slider min="0" max="1" step="0.05" onChange={this.volumeChange} />
                </tr>
                <tr>
                  <th>Speed</th>
                  <Slider min="0.2" max="2" step="0.2" onChange={this.speedChange} />
                </tr>
              </table>
              <div id="play-border">
                <button type="button" id="play" onClick= {this.playSound}></button>
              </div>
            </div>
          </form>
               
      </div>
    );
  }  
};


export default SoundboardSquare;
