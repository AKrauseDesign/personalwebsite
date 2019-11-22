import React, { Component } from "react";
import Button from "../reusables/Button";

export default class Projects extends Component {
  projects = {
    data: [
      {
        name: "Renasant Nation",
        description:
          "Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies.",
        url: "https://www.renasantnation.com"
      },
      {
        name: "Renasant Nation",
        description:
          "Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies.",
        url: "https://www.renasantnation.com"
      },
      {
        name: "Renasant Nation",
        description:
          "Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies.",
        url: "https://www.renasantnation.com"
      }
    ]
  };

  render() {
    return (
      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          {this.projects.data.map(project => (
            <div key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Button url={project.url} text={project.name} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
