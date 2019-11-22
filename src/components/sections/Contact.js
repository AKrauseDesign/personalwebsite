import React, { Component } from "react";
import ContactForm from "../reusables/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <section id="contactme">
        <div className="container">
          <h2>Contact Me</h2>
          <h3>{this.props.subtitle}</h3>
          <p>{this.props.description}</p>
          <ContactForm />
        </div>
      </section>
    );
  }
}
