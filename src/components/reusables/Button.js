import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <a
        href=""
        className={this.props.btnType === "inline" ? "inline-button" : "button"}
      >
        {this.props.icon ? (
          <i
            className={
              (this.props.iconType === "brand" ? "fab fa-" : "fal fa-") +
              `${this.props.icon}`
            }
          ></i>
        ) : null}
        {this.props.text}
      </a>
    );
  }
}
