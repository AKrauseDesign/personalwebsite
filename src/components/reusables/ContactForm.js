import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="contactForm">
        <form onSubmit={this.handleSubmit}>
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label for="email">Email Address</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label for="message">Your Message</label>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
