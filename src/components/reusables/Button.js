import React from "react";

export default function Button(props) {
  return (
    <a
      href={props.url}
      target={props.external ? "_blank" : null}
      rel="noopener noreferrer"
      className={props.btnType === "inline" ? "inline-button" : "button"}
    >
      {props.icon ? (
        <i
          className={
            (props.iconType === "brand" ? "fab fa-" : "fal fa-") +
            `${props.icon}`
          }
        ></i>
      ) : null}
      {props.text}
    </a>
  );
}
