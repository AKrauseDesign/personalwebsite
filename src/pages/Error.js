import React, { Component } from "react";
import "../components/sections/styles/Sections.scss";
import Button from "../components/reusables/Button";

export default class Error extends Component {
  render() {
    return (
      <div className="container" style={{ borderTop: "none" }}>
        <h1>Sorry, that page wasn't found.</h1>
        <Button url="/" text="Return Home" external={false} />
      </div>
    );
  }
}
