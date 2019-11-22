import React, { Component } from "react";
import Button from "../reusables/Button";

export default class AboveTheFold extends Component {
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <div className="button-container">
          <Button icon="newspaper" text="Resume" />
          <Button icon="brain" text="Projects" />
        </div>
      </section>
    );
  }
}
