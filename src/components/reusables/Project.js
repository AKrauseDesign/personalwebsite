import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <h2>{props.detailCardTitle}</h2>
      <p>{props.detailCardInfo}</p>
    </div>
  );
};
