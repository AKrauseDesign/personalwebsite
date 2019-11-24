import React from "react";

export default function DetailCard(props) {
  return (
    <div className="details-card">
      <h2>{props.detailCardTitle}</h2>
      <p>{props.detailCardInfo}</p>
    </div>
  );
};
