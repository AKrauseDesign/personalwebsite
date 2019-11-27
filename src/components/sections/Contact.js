import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className={this.props.topBorder ? "container" : "alt-container"}>
          <h2>Contact Me</h2>
          <div className="contactBlock">
            <h3>{this.props.subtitle}</h3>
            <p>{this.props.description}</p>
            <p>
              Email me: <span> </span>
              <a href="mailto:andrew.l.krause@gmail.com">
                andrew.l.krause@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
