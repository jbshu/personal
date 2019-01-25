import React, { Component } from "react";
import "./SoundboardSquare.css";

class SoundboardSquare extends Component {
  constructor(props) {
		super(props);

		this.state= {
			soundURL: '',
		};

    this.handleUploadSound= this.handleUploadSound.bind(this);
    this.playSound= this.playSound.bind(this);
	}

	handleUploadSound(e) {
		e.preventDefault();

		const data= new FormData();
		data.append('file', this.uploadInput.files[0]);
		data.append('filename', this.fileName.value);

		fetch('http://localhost:8000/upload', {
			method: 'POST',
			body: data,
		}).then((response) => {
			response.json().then((body) => {
				this.setState({ soundURL: `http://localhost:8000/${body.file}` });
			});
		});
	}

  playSound() {
    var audio= new Audio(this.state.soundURL);
    audio.play();
  }

  render() {
    return (
      <div className="soundboardSquareMain">
          <form onSubmit= {this.handleUploadSound}>
            <div>
              <input type="file" ref= {(ref) => { this.uploadInput= ref; }}/>
            </div>
            <div>
					    <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Sound name"/>
				    </div>
            <div>
              <button>Upload</button>
            </div>
            <button onClick= {this.playSound}>Play</button>
          </form>
      </div>
    );
  }
};

export default SoundboardSquare;
