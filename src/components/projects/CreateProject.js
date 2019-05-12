import React, { Component } from "react";

export default class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    // console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3"> Create a Project</h5>
          <div className="input-field">
            <label htmlFor="title"> Title </label>{" "}
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
            />{" "}
          </div>
          <div className="input-field">
            <label htmlFor="content"> Project Content </label>{" "}
            <textarea
              className="materialize-textarea"
              name="content"
              id="content"
              onChange={this.handleChange}
            />
          </div>{" "}
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0"> Create </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}
