import React, { Component } from "react";
import { Parallax } from "react-parallax";
import "../components/sections/styles/CaseStudies.scss";
import pattern from "../images/PatternGrid.svg";
import Button2 from "../components/reusables/Button2";
import Card from "../components/reusables/Card";
import DetailCard from "../components/reusables/DetailCard";
import ProjectCard from "../components/reusables/Project";

export default class CaseStudy extends Component {
  render() {
    return (
      <div>
        <section id="casestudy_head">
          <div className="alt-container">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
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
            <div className="imagery_container"></div>
            <div className="details_container">
              <DetailCard detailCardTitle="Unique Brand Changes" detailCardInfo="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."/>
              <DetailCard detailCardTitle="Parallax Everything" detailCardInfo="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."/>
              <DetailCard detailCardTitle="Animation Draws in the Audience" detailCardInfo="Created using Adobe XD, Illustrator, Photoshop, After Effects, SCSS, and WordPress. Rewards Extra the Movie is a spotlight campaign on the bank’s prized account – Rewards Extra. Built with a custom loading screen."/>
            </div>
          </div>
        </section>
        <section id="cta">
          <div className='alt-container'> 
            <a href="/">
              Explore the website <i class="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </section>
        <div class='alt-bg'> 
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
        </div>
      </div>
    );
  }
}
