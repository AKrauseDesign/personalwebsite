import React, { Component } from "react";
import { Parallax } from "react-parallax";
import "../components/sections/styles/CaseStudies.scss";
import pattern from "../images/PatternGrid.svg";
import studyImage from "../images/RETM_img.png";
import Button2 from "../components/reusables/Button2";
import Card from "../components/reusables/Card";
import DetailCard from "../components/reusables/DetailCard";
import ProjectCard from "../components/reusables/Project";
import CaseNav from "../components/navigation/CaseNav";
import Contact from "../components/sections/ContactTwo";

export default class CaseStudy extends Component {
  render() {
    const { title, description } = this.props;
    const mySteps = [{ step: "item 1" }, { step: "item2" }];

    return (
      <div>
        <section id="casestudy_head">
          <div className="alt-container">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="button-container">
              <Button2
                url="/"
                text="Dive deep into the process"
                external={false}
                icon="long-arrow-right"
              />
            </div>
          </div>
        </section>
        <section id="cards">
          <div className="pattern-container">
            <Parallax
              bgImage={pattern}
              strength={-200}
              style={{ marginBottom: 30 }}
            >
              <div style={{ height: 60, backgroundSize: "contain" }}></div>
            </Parallax>
            <Parallax
              bgImage={pattern}
              strength={-200}
              style={{ marginBottom: 30 }}
            >
              <div style={{ height: 60, backgroundSize: "contain" }}></div>
            </Parallax>
            <Parallax
              bgImage={pattern}
              strength={-200}
              style={{ marginBottom: 30 }}
            >
              <div style={{ height: 60, backgroundSize: "contain" }}></div>
            </Parallax>
          </div>
          <div className="alt-container">
            <div className="card_container">
              <Card
                step="Step 1"
                title="Understanding the Project"
                content="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."
                url="https://www.google.com"
              />
              <Card
                step="Step 2"
                title="Engineering Solutions"
                content="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."
                url="https://www.google.com"
              />
              <Card
                step="Step 3"
                title="Final Presentation"
                content="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."
                url="https://www.google.com"
              />
            </div>
          </div>
        </section>
        <section id="details">
          <div className="alt-container">
            <h1>Beyond Extra</h1>
            <div className="imagery_container">
              <img className="the_image" src={studyImage} alt="Study image" />
            </div>
            <div className="details_container">
              <DetailCard
                detailCardTitle="Unique Brand Changes"
                detailCardInfo="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."
              />
              <DetailCard
                detailCardTitle="Parallax Everything"
                detailCardInfo="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."
              />
              <DetailCard
                detailCardTitle="Animation Draws in the Audience"
                detailCardInfo="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."
              />
            </div>
          </div>
        </section>
        <section id="cta">
          <div className="alt-container">
            <a href="/">
              Explore the website <i class="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </section>
        <div class="alt-bg">
          <section id="case_study-projects">
            <div class="alt-container">
              <h1>Recent Projects</h1>
              <ProjectCard
                detailCardTitle="Renasant Nation"
                detailCardInfo="Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies. "
                url=""
              />
              <ProjectCard
                detailCardTitle="Renasant Nation"
                detailCardInfo="Originally from Kansas City, I originally learned at the Metropolitan Community College, and obtained an associates in Computer Science. Over the years I’ve learned many languages, frameworks, ideas, and have had the opportunity to work with startups, IOT firms, banks, and marketing agencies. "
                url=""
              />
            </div>
          </section>
          <Contact
            subtitle="What do you need?"
            description="I’d love to meet with you and discuss your project. I’m comfortable working with innovative design, corporate branding structures, and a wide range of software engineering needs."
            topBorder={false}
          />
          <CaseNav title="Rewards Extra the Movie" />
        </div>
      </div>
    );
  }
}
