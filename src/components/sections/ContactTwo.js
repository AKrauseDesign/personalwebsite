import React from "react";

export default function AltContact(props) {
  return (
    <section id="contact">
      <div className={props.topBorder ? "container" : "alt-container"}>
        <h2>Contact Me</h2>
        <div className="contactBlock">
          <h3>{props.subtitle}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}
