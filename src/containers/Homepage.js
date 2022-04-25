import React, { Component } from 'react';

import './Homepage.css';
import uploadIcon from '../assets/upload.svg';
import testVideo from '../assets/test_video.mp4';

class Homepage extends Component {

    state = {
        inputImage: null,
        inputImageName: 'Choose a file',
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
        this.setState({
            showResults: true
        });
    }

    render() {
        const { inputImage, inputImageName, displayImage, showResults } = this.state;
        return (
            <div className='outer-container'>
                <div className='inner-container'>  
                    <div className='input-container'>  
                        {inputImage ? 
                            <img src={displayImage} alt='uploaded_image' className='uploaded-image' /> :
                            <img src={uploadIcon} alt='upload_icon' className='upload-icon'/> } 
                        <div>
                            <input 
                                type="file" 
                                name="file" 
                                id="file" 
                                className="input-file"
                                onChange={this.inputChangeHandler} />
                            <label 
                                htmlFor="file" 
                                className='input-file-label'>{inputImageName}</label>
                        </div>
                        {inputImage ? (
                            <button 
                                type='submit'
                                className='search-button'
                                onClick={this.querySubmitHandler}>Search</button> ) : null}
                    </div>
                    {showResults ? (
                        <div className='results-container'>
                            <span>Search results: </span>
                            <div>
                                {/* List of videos */}
                                <video 
                                    controls="controls"> 
                                    <source src={testVideo} 
                                        type="video/mp4" /> 
                                </video>
                                <video 
                                    controls="controls"> 
                                    <source src={testVideo} 
                                        type="video/mp4" /> 
                                </video>
                                <video 
                                    controls="controls"> 
                                    <source src={testVideo} 
                                        type="video/mp4" /> 
                                </video>     
                            </div>
                        </div>) : null}
                </div>
            </div>
        )
    }
}

export default Homepage;