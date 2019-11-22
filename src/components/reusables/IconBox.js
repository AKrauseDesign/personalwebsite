import React, { Component } from "react";

export default class IconBox extends Component {
  render() {
    return (
      <div className="IconBox_container">
        {this.props.icon ? (
          <i
            className={
              (this.props.iconType === "brand" ? "fab fa-" : "fal fa-") +
              `${this.props.icon}`
            }
          ></i>
        ) : null}
        <h4>{this.props.text}</h4>
      </div>
    );
  }
}
