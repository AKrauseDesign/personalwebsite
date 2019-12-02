import React from "react";
import Icon from "./Icon";

const IconBox = ({ iconType, icon, brandColor, text }) => {
  return (
    <div className="iconbox">
      <div class="iconbox-container">
        <Icon iconType={iconType} icon={icon} brandColor={brandColor} />
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default IconBox;
