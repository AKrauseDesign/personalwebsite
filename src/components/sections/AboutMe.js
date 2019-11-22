import React, { Component } from "react";
import Button from "../reusables/Button";

export default class AboutMe extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          {this.props.profilePic ? (
            <img src={this.props.profilePic} alt={this.props.name} />
          ) : null}
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
          <Button text="Contact Me" />
        </div>
      </section>
    );
  }
}
