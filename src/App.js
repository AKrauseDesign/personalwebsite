import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/sections/Nav";
import logo from "./images/akd_logo.png";
import AboveTheFold from "./components/sections/AboveTheFold";
import Expertise from "./components/sections/Expertise";
import ConnectWithMe from "./components/sections/Connect";
import AboutMe from "./components/sections/AboutMe";
import Project from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default class App extends Component {
  projects = {
    "data": [
      { 
        name: "Renasant Nation", 
        description: "Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies."
      }, 
      { 
        name: "Renasant Nation", 
        description: "Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies."
      }, 
      { 
        name: "Renasant Nation", 
        description: "Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies."
      }
    ]
  }

  render() {
    return (
      <div>
        <Navigation logo={logo} />
        <AboveTheFold
          title="Hello, I'm Andrew."
          description="
            I'm a Full Stack eveloper, interested in UI/UX design. I do volunteer
            work with Team Rubicon and help others learn how to desgin and
            program."
        />
        <Expertise />
        <ConnectWithMe />
        <AboutMe 
          name="Andrew Krause" 
          description="Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies." 
        />
        {this.projects.data.map((project) => (
          <Project key={project.id} name={project.name} description={project.description} />
        ))}
        <Contact subtitle="What do you need?" description="I’d love to meet with you and discuss your project. I’m comfortable working with innovative design, corporate branding structures, and a wide range of software engineering needs." /> 
        <Footer />
      </div>
    );
  }
}
