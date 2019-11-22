import React, { Component } from "react";

export default class Button extends Component {
  buttonClasses = (type, iconType) => {
    // type ? "solid-btn" : null;
    // iconType ? "fab fa-" : null;
  };

  //TODO: convert the buttons to the above function

  render() {
    return (
      <a
        href={this.props.url}
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
