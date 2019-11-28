import React from "react";

export default function Button(props) {
  return (
    <a
      href={this.props.url}
      target={this.props.external ? "_blank" : null}
      rel="noopener noreferrer"
    >
      {this.props.text}

      {this.props.icon ? (
        <i
          className={
            (this.props.iconType === "brand" ? "fab fa-" : "fal fa-") +
            `${this.props.icon}`
          }
        ></i>
      ) : null}
    </a>
  );
}
