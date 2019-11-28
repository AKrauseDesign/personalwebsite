import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h3 className="steps">{props.step}</h3>
      <h2 className="cardTitle">{props.title}</h2>
      <div className="card_content">
        <p>{props.content}</p>
      </div>
      <a href={props.url}>
        Learn More <i class="fal fa-long-arrow-right"></i>
      </a>
    </div>
  );
}
