import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <img src={this.props.logo} alt="Andrew Krause Logo" />
        <nav>
          <a className="solid-btn">Contact</a>
        </nav>
      </div>
    );
  }
}
