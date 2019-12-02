import React, { PureComponent } from "react";
import "../components/sections/styles/Sections.scss";
import Button from "../components/reusables/Button";
import Contact from "../components/sections/Contact";

export default class Error extends PureComponent {
  render() {
    return (
      <div>
        <div className="container" style={{ borderTop: "none" }}>
          <h1>Sorry, that page wasn't found.</h1>
          <Button url="/" text="Return Home" external={false} />
        </div>
        <Contact
          subtitle="How Can I Help You?"
          description="I’d love to meet with you and discuss your project. I’m comfortable working with innovative design, corporate branding structures, and a wide range of software engineering needs."
          topBorder={true}
        />
      </div>
    );
  }
}
