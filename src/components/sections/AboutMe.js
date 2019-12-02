import React, { Component } from "react";
import Button from "../reusables/Button";

export default class AboutMe extends Component {
  render() {
    const { profilePic, name, description } = this.props;
    return (
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          {profilePic ? <img src={profilePic} alt={name} /> : null}
          <h1>{name}</h1>
          <p>{description}</p>
          <Button text="Contact Me" url="#contact" />
        </div>
      </section>
    );
  }
}
