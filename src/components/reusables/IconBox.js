import React from "react";
import Icon from "./Icon";

export default function IconBox(props) {
  return (
    <div className="iconbox">
      <div class="iconbox-container">
        <Icon
          iconType={props.iconType}
          icon={props.icon}
          brandColor={props.brandColor}
        />
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}
