import React, { Component } from "react";
import ContactForm from "../reusables/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contactBlock">
            <h3>{this.props.subtitle}</h3>
            <p>{this.props.description}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    );
  }
}
