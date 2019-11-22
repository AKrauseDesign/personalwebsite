import React, { Component } from "react";
import IconLink from "../reusables/IconLink";
import Copyright from "../reusables/Copyright";

export default class Footer extends Component {
  connections = {
    social: [
      {
        text: "Linkedin",
        icon: "linkedin-in",
        iconType: "brand",
        url: "https://www.linkedin.com/in/andrew-krause-54092292/"
      },
      {
        text: "Dribbble",
        icon: "dribbble",
        iconType: "brand",
        url: "https://www.dribbble.com/akrausedesign"
      },
      {
        text: "Twitter",
        icon: "twitter",
        iconType: "brand",
        url: "https://www.twitter.com/akrausedesign"
      },
      {
        text: "Stackoverflow",
        icon: "stack-overflow",
        iconType: "brand",
        url: "https://www.stackoverflow.com/users/5994673/andrew"
      },
      {
        text: "Github",
        icon: "github",
        iconType: "brand",
        url: "https://www.github.com/akrausedesign"
      }
    ]
  };
  render() {
    return (
      <footer>
        <div className="container">
          <div class="footer-container">
            {this.props.footerPic ? (
              <img src={this.props.footerPic} alt={this.props.name} />
            ) : null}
            <div class="icons-container">
              {this.connections.social.map(connect => (
                <IconLink
                  key={connect.id}
                  iconType={connect.iconType}
                  icon={connect.icon}
                  url={connect.url}
                />
              ))}
              <Copyright />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
