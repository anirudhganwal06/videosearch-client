import React, { Component } from 'react';
import axios from '../axios.js';

class Videos extends Component {
	state = {
		uploading: false,
		dbVideos: []
	}

	uploadVideoHandler = event => {
		this.setState({
			uploading: true
		});

		const formData = new FormData();
		formData.append('video', event.target.files[0]);
		const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        };
		axios.post('/add', formData, config)
		.then(result => {
			console.log(result);
			this.setState({
				uploading: false
			})
		})
		.catch(err => console.log(err));
	}

	componentDidMount = () => {
		axios.get("/db")
		.then(result => {
			console.log(result);
			if(result.data && result.data.videos) {
				this.setState({
					dbVideos: result.data.videos
				});
			};
		})
		.catch(err => console.log(err));
	}

	render() {
		const videosJSX = this.state.dbVideos.map((video, idx) => {
			return(
				<div key={idx} className="col-3">
					<video 
						width="100%"
						controls="controls"> 
						<source 
							type="video/mp4"
							src={require("../assets/sasta_db/" + video)}
						/> 
					</video>
				</div>
			)
		});
		return (
			<div className="container p-5">
				<p className="h1">Video Database</p>
				<div className="mb-3 text-end">
					<input 
						type="file" 
						className="btn btn-block btn-outline-success" 
						accept="video/*"
						onChange={this.uploadVideoHandler}/>
				</div>
				{this.state.uploading ?
					<div className="progress my-3">
					<div 
					className="progress-bar progress-bar-striped progress-bar-animated w-100" 
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
