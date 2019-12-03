import React, { Component } from "react";
import Button from "../reusables/Button";

export default class Projects extends Component {
  projects = {
    data: [
      {
        name: "Renasant Nation",
        description:
          "Created using Adobe XD, Illustrator, Photoshop, After Effects, WordPress, and AngularJS, Renasant Nation is the media platform for Renasant Bank. They host a wide range of blog posts, mostly custom designs, that have audiences of over 10,000 people per week. Renasant Nation facilitates a space to hold sponsored YouTube videos and other customized series, as well as different campaigns.",
        // url: "https://www.renasantnation.com",
        url: "renasantnation.com",
        external: false
      },
      {
        name: "Rewards Extra the Movie",
        description:
          "Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen, and using custom SCSS recursive functions, parallax elements within patterns, and a completely custom multi-level container allowing for container bleed at different child levels, this campaign is one of the most complicated campaigns ever to have been completed while working for Mabus Agency.",
        // url: "https://www.renasantnation.com/rewardsextrathemovie",
        url: "renasantnation.com/rewardsextrathemovie",
        external: false
      },
      {
        name: "Renasant Mortgage",
        description:
          "Created using WordPress and Salesforce. The decisioning tool allows Mortgage customers to create a personalized data point for Advisors to reach out and provide them the most accurate quotes as possible, saving them time waiting in line at a physical branch location. We used Salesforce and Pardot to track user’s engagement in emails and to see what form elements they were stopping at or filling out incorrectly, as well as to collect general data for different types of personalized surveys that could be sent via email.",
        // url: "https://mortgage.renasantnation.com",
        url: "mortgage.renasantnation.com",
        external: false
      },
      {
        name: "Renasant Locations",
        description:
          "Created using Adobe XD, Illustrator, Photoshop, After Effects, Google Maps API, and WordPress. Renasant Locations is the branch finder tool for Renasant Bank. With over 250 different locations including ATMs, ITMS, general branches, mortgage departments, and insurance departments, I provided a custom SEO based solution to help generate top level content in all of the search engines.",
        // url: "https://locations.renasantbank.com",
        url: "locations.renasantbank.com",
        external: false
      },
      {
        name: "Marketing Proposal",
        description:
          "Created using Adobe Illustrator, the Marketing Proposal page is a stopgap for parties interested in contacting Renasant Bank for any connection other than personal or business banking.",
        // url: "https://www.renasantnation.com/proposal",
        url: "renasantnation.com/proposal",
        external: false
      },
      {
        name: "Rise With Renasant",
        description:
          "Created using Adobe XD, Illustrator, Photoshop, After Effects, and WordPress. Rise with Renasant is a women’s empowerment campaign that has spotlight stories about different women in the community written on completely custom blog posts.",
        // url: "https://www.renasantnation.com/rise",
        url: "renasantnation.com/rise",
        external: false
      },
      {
        name: "The Best Bank in the South",
        description:
          "A landing page created for Renasant Bank, the best bank in the south for ads running on Facebook, Twitter, LinkedIn, and across the web.",
        // url: "https://www.renasantbank.com/best-bank-in-the-south",
        url: "https://www.renasantbank.com/best-bank-in-the-south",
        external: false
      }
    ]
  };

  render() {
    return (
      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          {this.projects.data.map(project => (
            <div className="project-container" key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Button
                external={project.external}
                url={project.url}
                text={project.name}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
