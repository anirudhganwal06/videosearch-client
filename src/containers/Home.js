import React, { Component } from "react";
import axios from "../axios.js";

import "./Home.css";
import uploadIcon from "../assets/upload.svg";

class Homepage extends Component {
    state = {
        inputImage: null,
        inputImageName: "Choose an image",
        displayImage: uploadIcon,
        showResults: false,
        uploading: false,
        videoNames: []
    };

    inputChangeHandler = (event) => {
        if (!event.target.files) return;
        const uploadedImage = event.target.files[0];
        this.setState({
            inputImage: uploadedImage,
            inputImageName: uploadedImage.name,
            displayImage: URL.createObjectURL(uploadedImage),
        });
    };

    querySubmitHandler = () => {
        this.setState({
            uploading: true,
            videoNames: [],
            showResults: false
        });

        const queryImage = this.state.inputImage;

        const data = new FormData();
        data.append("image", queryImage);

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axios
            .post("/search", data, config)
            .then((result) => {
                this.setState({
                    showResults: true,
                    videoNames: result.data.videos,
                    uploading: false
                }, () => {
                    result.data.frames.forEach((frame, idx) => {
                        document.getElementById('vid' + idx).addEventListener('loadedmetadata', function () {
                            this.currentTime = parseInt(frame) - 2;
                        }, false);
                    });
                });

            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    uploading: false
                });
            });
    };

    render() {

        const {
            inputImage,
            inputImageName,
            displayImage,
            showResults,
            videoNames
        } = this.state;

        const videosJSX = videoNames.map((videoName, idx) => {
            return (
                <div key={idx} className="col-3">
                    <video id={'vid' + idx} width="100%" controls="controls">
                        <source src={require("../assets/sasta_db/" + videoName + '.mp4')} type="video/mp4" />
                    </video>
                </div>
            );
        });

        return (
            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5 mt-5">
                        {inputImage ? (
                            <img
                                src={displayImage}
                                alt="uploaded_image"
                                className="img-fluid"
                            />
                        ) : (
                            <img src={uploadIcon} alt="upload_icon" className="img-fluid" />
                        )}

                        <input
                            type="file"
                            name="file"
                            id="file"
                            className="input-file"
                            onChange={this.inputChangeHandler}
                        />
                        <label htmlFor="file" className="input-file-label">
                            {inputImageName}
                        </label>

                        {inputImage ? (
                            <div className="d-grid py-3">
                                <button
                                    type="submit"
                                    className="btn btn-outline-success"
                                    onClick={this.querySubmitHandler}
                                >
                                    Search
                                </button>
                            </div>
                        ) : null}
                    </div>
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
                    : null}
                {showResults ? (
                    <div className="my-5">
                        <h3>Videos matching your image query:</h3>
                        <div className="row my-2">{videosJSX}</div>
                    </div>
                ) : null}
            </div>
        );
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
