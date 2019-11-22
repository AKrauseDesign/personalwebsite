import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    return (
      <div>
        {this.props.icon ? (
          <i
            style={{ color: `${this.props.brandColor}` }}
            className={
              (this.props.iconType === "brand" ? "fab fa-" : "fal fa-") +
              `${this.props.icon}`
            }
          ></i>
        ) : null}
      </div>
    );
  }
}
