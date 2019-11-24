import React, { Component } from "react";
import "../components/sections/styles/Sections.scss";
import face from "../images/andrew-min.jpg";
import AboveTheFold from "../components/sections/AboveTheFold";
import Expertise from "../components/sections/Expertise";
import ConnectWithMe from "../components/sections/Connect";
import AboutMe from "../components/sections/AboutMe";
import Project from "../components/sections/Projects";

export default class Home extends Component {
  render() {
    return (
      <div>
        <AboveTheFold
          title="Hello, I'm Andrew."
          description="
            I'm a Full Stack developer, interested in UI/UX design. I do volunteer
            work with Team Rubicon and help others learn how to design and
            program."
        />
        <Expertise />
        <ConnectWithMe />
        <AboutMe
          profilePic={face}
          name="Andrew Krause"
          description="Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies."
        />
        <Project />
      </div>
    );
  }
}
