import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={this.props.logo} alt="Andrew Krause Logo" />
          <nav>
            <a href="#contact" className="inverse-btn">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
}
