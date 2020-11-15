import React from "react";
import EmailContact from "../reusables/EmailContact";

export default function Contact(props) {
  return (
    <section id="contact">
      <div className={props.topBorder ? "container" : "alt-container"}>
        <h2>Contact Me</h2>
        <div className="contactBlock">
          <h3>{props.subtitle}</h3>
          <p>{props.description}</p>
          <EmailContact email="letstalktoandrew@gmail.com" />
        </div>
      </div>
    </section>
  );
}
