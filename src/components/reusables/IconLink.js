import React from "react";

export default function IconLink(props) {
  return (
    <a key={props.key} href={props.url} className="iconlink">
      {props.icon ? (
        <div>
          <i
            style={{ color: `${props.brandColor}` }}
            className={
              (props.iconType === "brand" ? "fab fa-" : "fal fa-") +
              `${props.icon}`
            }
          ></i>
          <span style={{ display: "none" }}>{props.icon}</span>
        </div>
      ) : null}
    </a>
  );
}
