import React, { Component } from "react";
import Button from "../reusables/Button";

export default class AboveTheFold extends Component {
  render() {
    return (
      <section id="atf">
        <div className="container">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <div className="button-container">
            <Button
              url={process.env.PUBLIC_URL + "files/AndrewKrauseResume2019.pdf"}
              icon="newspaper"
              text="Resume"
              external={true}
            />
            <Button url="#contact" icon="brain" text="Projects" />
          </div>
        </div>
      </section>
    );
  }
}
