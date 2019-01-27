import React, { Component } from "react";
import "./SoundboardSquare.css";

class SoundboardSquare extends Component {
  constructor(props) {
		super(props);

		this.state= {
      soundURL: '',
      fileName: '',
		};

    this.handleUploadSound= this.handleUploadSound.bind(this);
    this.playSound= this.playSound.bind(this);
	}

	handleUploadSound(e) {
		e.preventDefault();

		const data= new FormData();
		data.append('file', this.uploadInput.files[0]);
		data.append('filename', this.fileName.value);

    this.setState( {fileName:this.fileName.value} );
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

  playSound() {
    var audio= new Audio(this.state.soundURL);
    audio.play();
  }

  render() {
    let chooser;
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
          </form>
      </div>
    );
  }
};

export default SoundboardSquare;
