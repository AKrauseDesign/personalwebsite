import React from "react";

export default function Icon(props) {
  return (
    <div>
      {props.icon ? (
        <i
          style={{ color: `${props.brandColor}` }}
          className={
            (props.iconType === "brand" ? "fab fa-" : "fal fa-") +
            `${props.icon}`
          }
        ></i>
      ) : null}
    </div>
  );
}
