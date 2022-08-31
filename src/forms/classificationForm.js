import React, { Component } from "react";

export default class ClassificationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classificationId: "",
            image: null
        };

        this.handleImageSelection = this.handleImageSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleImageSelection(event) {
        if (event.target.files.length > 0) {
            this.setState({ image: event.target.files[0] });
        }
    }

    handleSubmit(event) {
        // First build out the form data
        if (this.state.image != null) {
            let data = new FormData();
            data.append("image", this.state.image, this.state.image.name);

            let comp = this;
            let request = new XMLHttpRequest();
            request.addEventListener("load", function(event) {
                comp.setState({ classificationId: JSON.parse(request.responseText)["classification_id"] });
            });
            request.open("POST", "http://127.0.0.1:8000/classify");
            request.send(data);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <label>
                        Image:<br></br>
                        <input type="file" name="image" onChange={this.handleImageSelection}></input>
                    </label><br></br>
                    <input type="submit" value="Classify Image"></input>
                </form><br></br>
                <div>Classification ID: {this.state.classificationId}</div>
            </div>
        )
    }
}
