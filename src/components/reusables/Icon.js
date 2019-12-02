import React from "react";

const Icon = ({ icon, iconType, brandColor }) => {
  return (
    <div>
      {icon ? (
        <i
          style={{ color: `${brandColor}` }}
          className={(iconType === "brand" ? "fab fa-" : "fal fa-") + `${icon}`}
        ></i>
      ) : null}
    </div>
  );
};

export default Icon;
