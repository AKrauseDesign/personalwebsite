import React, { Component } from "react";

export default class IconLink extends Component {
  render() {
    return (
      <a key={this.props.key} href={this.props.url} className="iconlink">
        {this.props.icon ? (
          <i
            style={{ color: `${this.props.brandColor}` }}
            className={
              (this.props.iconType === "brand" ? "fab fa-" : "fal fa-") +
              `${this.props.icon}`
            }
          ></i>
        ) : null}
      </a>
    );
  }
}
