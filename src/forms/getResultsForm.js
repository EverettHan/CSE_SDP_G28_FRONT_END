import React from "react";

export default class GetStatusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classificationId: "",
            results: null
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormChange(event) {
        this.setState({ classificationId: event.target.value });
        event.preventDefault();
    }

    handleSubmit(event) {
        if (this.state.classificationId != "") {
            let request = new XMLHttpRequest();
            let comp = this;
            request.addEventListener("load", function(event) {
                comp.setState({ results: JSON.parse(this.response) });
            });
            request.open("GET", "http://127.0.0.1:8000/getresults?classification_id=" + this.state.classificationId);
            request.send()
        }
        event.preventDefault();
    }

    render() {
        let classification = "";
        if (this.state.results != null) {
            classification = this.state.results["classification"];
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.classificationId} onChange={this.handleFormChange}></input><br></br>
                    <input type="submit" value="Get Classification Results"></input>
                </form><br></br>
                Result: {classification}
            </div>
        )
    }
}
