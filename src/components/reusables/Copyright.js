import React, { Component } from "react";

export default class Copyright extends Component {
  currentYear = new Date();

  render() {
    return (
      <p className="copyright">
        {"Copyright 2016 - " + this.currentYear.getFullYear()}
      </p>
    );
  }
}
