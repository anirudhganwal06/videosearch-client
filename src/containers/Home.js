import React, { Component } from 'react';
import axios from '../axios.js';

import './Home.css';
import uploadIcon from '../assets/upload.svg';
import testVideo from '../assets/test_video.mp4';

class Homepage extends Component {

    state = {
        inputImage: null,
        inputImageName: 'Choose an image',
        displayImage: uploadIcon,
        showResults: false
    }

    inputChangeHandler = (event) => {
        if(!event.target.files)
            return;
        const uploadedImage = event.target.files[0];
        this.setState({
            inputImage: uploadedImage,
            inputImageName: uploadedImage.name,
            displayImage: URL.createObjectURL(uploadedImage)
        });
    }

    querySubmitHandler = () => {
        const queryImage = this.state.inputImage;
        
        const data = new FormData();
        data.append('image', queryImage);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios.post("/search", data, config).then(result => {
            console.log(result);
        }).catch(err => console.log(err));
        
        this.setState({
            showResults: true
        });
    }

    render() {
        const { inputImage, inputImageName, displayImage, showResults } = this.state;
		const videosJSX = [];
		for (let i = 0; i < 18; i++) {
			videosJSX.push(
				<div key={i} className="col-3">
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
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-5 mt-5">
						{inputImage ? 
							<img src={displayImage} alt='uploaded_image' className="img-fluid"/> :
							<img src={uploadIcon} alt='upload_icon' className="img-fluid" /> } 

						<input 
							type="file" 
							name="file" 
							id="file" 
							className="input-file"
							onChange={this.inputChangeHandler} />
						<label 
							htmlFor="file" 
							className='input-file-label'>
							{inputImageName}
						</label>
						
						{inputImage ? (
							<div className="d-grid py-3">
								<button 
									type='submit'
									className="btn btn-outline-success"
									onClick={this.querySubmitHandler}>Search</button>
							</div> ) : null}

					</div>
				</div>
				{showResults ? (
					<div className="my-5" >
					<h3>Videos matching your image query:</h3>
					<div className="row my-2">
					{videosJSX}
					</div>
					</div>) : null}
            </div>
        )
    }
}

export default Homepage;


        	// <div>
            // <div className='outer-container'>
                // <div className='inner-container'>  
                    // <div className='input-container'>  
                        // {inputImage ? 
                            // <img src={displayImage} alt='uploaded_image' className='uploaded-image' /> :
                            // <img src={uploadIcon} alt='upload_icon' className='upload-icon'/> } 
                        // <div>
                            // <input 
                                // type="file" 
                                // name="file" 
                                // id="file" 
                                // className="input-file"
                                // onChange={this.inputChangeHandler} />
                            // <label 
                                // htmlFor="file" 
                                // className='input-file-label'>{inputImageName}</label>
                        // </div>
                        // {inputImage ? (
                            // <button 
                                // type='submit'
                                // className='search-button'
                                // onClick={this.querySubmitHandler}>Search</button> ) : null}
                    // </div>
                // </div>
            // </div>
                    // {showResults ? (
                    	// <div className="container">
                            // <span>Search results: </span>
				// <div className="row">
					// {videosJSX}
				// </div>
                        // </div>) : null}
            // </div>
