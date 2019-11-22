import React, { Component } from 'react'; 
import ContactForm from "../reusables/ContactForm"; 

export default class Contact extends Component { 
  render() {
    return (
      <div>
        <h2>Contact Me</h2>
        <h3>{this.props.subtitle}</h3> 
        <p>{this.props.description}</p>
        <ContactForm />
      </div>
    )
  }
}