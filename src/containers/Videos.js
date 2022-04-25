import React, { Component } from 'react';
import testVideo from '../assets/test_video.mp4';

class Videos extends Component {
	state = {
		uploading: false
	}

	uploadVideoHandler = () => {
		this.setState({
			uploading: true
		});
		setTimeout(() => {
			this.setState({
				uploading: false
			})
		}, 2000);
	}

	render() {
		const videosJSX = [];
		for (let i = 0; i < 18; i++) {
			videosJSX.push(
				<div className="col-3">
					<video 
						width="100%"
						controls="controls"> 
						<source src={testVideo} 
							type="video/mp4" /> 
					</video>
				</div>
			);
		}
		return (
			<div className="container p-5">
				<p class="h1">Video Database</p>
				<div className="mb-3 text-end">
					<button type="button" class="btn btn-block btn-outline-success" onClick={this.uploadVideoHandler}>Upload Video</button>
				</div>
				{this.state.uploading ?
					<div class="progress my-3">
					<div 
					class="progress-bar progress-bar-striped progress-bar-animated w-100" 
					role="progressbar" 
					aria-valuenow="0" 
					aria-valuemin="0" 
					aria-valuemax="100">
					</div>
					</div>
				:null}
				<div className="row">
					{videosJSX}
				</div>
			</div>
		);
	}
}

export default Videos;
