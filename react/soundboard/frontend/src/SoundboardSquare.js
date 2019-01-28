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
		};

    this.handleUploadSound= this.handleUploadSound.bind(this);
    this.volumeChange= this.volumeChange.bind(this);
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

  playSound() {
    var audio= new Audio(this.state.soundURL);
    audio.volume= this.state.volume;
    audio.play();
  }

  render() {
    let chooser;

    //Only render upload dialogue if the square does not have a current sound
    //TODO: add support for swapping sounds
    if (this.state.fileName !== '') {
      chooser= <p>{this.state.filename}</p>;
    }
    else {
      chooser= <div id= "chooser">
                  <div id="upload-sound-border">
                  <label id="upload-sound-label" for="upload-sound">Choose sound</label>
                      <input id="upload-sound" type="file" ref= {(ref) => { this.uploadInput= ref; }}/>
                  </div>
                  <div id="sound-name-border">
                    <input id= "sound-name" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Sound name"/>
                  </div>
                </div>;  
    }

    return (
      <div className="squareMain">
          <form onSubmit= {this.handleUploadSound}>
          {chooser}
            <div id="buttons-border">
              <button id="upload">Upload</button>
              <button type="button" id="play" onClick= {this.playSound}>Play { this.state.fileName }</button>
            </div> 
             <Slider onChange={this.volumeChange} />
          </form>
               
      </div>
    );
  }  
};


export default SoundboardSquare;
